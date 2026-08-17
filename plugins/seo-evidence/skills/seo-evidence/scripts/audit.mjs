#!/usr/bin/env node
/**
 * Audit one site's crawlability and answer-engine visibility, citing the
 * evidence for every finding.
 *
 * The rules and their evidence live in ../references/rules.json. This script
 * decides what is TRUE OF THE SITE; it never decides what is true of search
 * engines. If a check has no claim behind it, it is reported as an observation
 * and says so.
 *
 * Usage:
 *   node audit.mjs https://example.com
 *   node audit.mjs https://example.com --json
 *
 * No dependencies, Node 18+.
 *
 * The robots.txt parser, the no-JavaScript body extraction and the crawler
 * lists have been run against ~30 live sites; the comments explain why each is
 * shaped the way it is.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const RULES = JSON.parse(readFileSync(join(HERE, '..', 'references', 'rules.json'), 'utf8'));

const UA = 'Mozilla/5.0 (compatible; SeoPostureAudit/1.0)';
const TIMEOUT_MS = 15000;

/**
 * Crawlers that take content for TRAINING. Blocking these is a policy choice
 * with no effect on search ranking, and Google documents as much for
 * Google-Extended.
 */
const TRAINING_BOTS = [
  'GPTBot',
  'Google-Extended',
  'CCBot',
  'anthropic-ai',
  'ClaudeBot',
  'Applebot-Extended',
  'Bytespider',
  'Meta-ExternalAgent',
];

/**
 * Crawlers that fetch a page to ANSWER a question and cite it. Blocking one of
 * these removes the site from that engine's answers, which is usually done by
 * accident while trying to block training. Google-Extended is deliberately NOT
 * here: AI Overviews are fed by the ordinary Googlebot index, so blocking it
 * costs training, not citations.
 */
const RETRIEVAL_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
];

/**
 * Minimum body text (characters, markup stripped) before a page counts as
 * readable without JavaScript. Calibrated against real sites: an unrendered
 * page measures 0 to 20 (an empty mount or a placeholder comment), while the
 * tersest genuinely-prerendered page measured 104. 80 sits in the gap.
 */
const MIN_BODY_TEXT = 80;

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const target = args.find((a) => !a.startsWith('--'));

if (!target) {
  process.stderr.write('usage: node audit.mjs <url> [--json]\n');
  process.exit(2);
}

const base = new URL(target.startsWith('http') ? target : `https://${target}`);

async function get(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: ctrl.signal });
    return { ok: res.ok, status: res.status, headers: res.headers, body: await res.text(), url: res.url };
  } catch (err) {
    return { ok: false, status: 0, headers: new Headers(), body: '', err: String(err.message ?? err) };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Parse robots.txt into groups, per the spec: consecutive User-agent lines
 * share one group of rules, and the group ends at the first rule line. Naive
 * "split on blank lines" gets that wrong, and a bare regex over the whole file
 * matches a Disallow belonging to some other agent entirely.
 */
function parseRobots(text) {
  const groups = [];
  let current = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const [field, ...rest] = line.split(':');
    const key = field.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (key === 'user-agent') {
      if (!current || current.disallow.length || current.allow.length) {
        current = { agents: [], disallow: [], allow: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
    } else if (current && key === 'disallow') {
      current.disallow.push(value);
    } else if (current && key === 'allow') {
      current.allow.push(value);
    }
  }
  return groups;
}

const disallowsAll = (text, bot) =>
  parseRobots(text).some(
    (g) => g.agents.includes(bot.toLowerCase()) && g.disallow.includes('/') && !g.allow.includes('/'),
  );

/**
 * Visible text a crawler gets from the raw HTML, with no JavaScript run.
 * <noscript> is stripped along with <script>: a "this app needs JavaScript"
 * fallback is not content, and counting it would let every client-rendered
 * shell pass.
 */
function bodyText(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return (m ? m[1] : html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:[a-z]+|#\d+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const rule = (id) => RULES.rules.find((r) => r.id === id);
const findings = [];
const observations = [];

/** A finding always carries the rule's evidence. There is no unsourced path. */
function report(id, detail) {
  const r = rule(id);
  if (!r) throw new Error(`no rule ${id}`);
  findings.push({ id, severity: r.severity, title: r.title, detail, says: r.says, evidence: r.evidence });
}

const observe = (detail) => observations.push(detail);

// ------------------------------------------------------------------ the fetch

const page = await get(base.href);
if (!page.ok && page.status === 0) {
  process.stderr.write(`could not fetch ${base.href}: ${page.err}\n`);
  process.exit(1);
}

const robots = await get(new URL('/robots.txt', base).href);
const llms = await get(new URL('/llms.txt', base).href);

const sitemapUrls = robots.ok
  ? [...robots.body.matchAll(/^\s*sitemap:\s*(\S+)/gim)].map((m) => m[1])
  : [];
if (sitemapUrls.length === 0) sitemapUrls.push(new URL('/sitemap.xml', base).href);
const sitemaps = [];
for (const url of sitemapUrls.slice(0, 3)) sitemaps.push({ url, ...(await get(url)) });

// ----------------------------------------------------------------- the checks

const html = page.body;
const text = bodyText(html);
const xRobots = (page.headers.get('x-robots-tag') || '').toLowerCase();
const metaRobots = (html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i)?.[1] || '').toLowerCase();
const noindexed = xRobots.includes('noindex') || metaRobots.includes('noindex');

if (noindexed) {
  observe(
    `The page asks not to be indexed (${xRobots.includes('noindex') ? 'X-Robots-Tag header' : 'meta robots'}). Everything below still applies to answer engines, which fetch pages they will not index.`,
  );
}

if (text.length < MIN_BODY_TEXT) {
  report('client-rendered-body', `The raw HTML carries ${text.length} characters of text. Nothing else in the page is readable without running JavaScript.`);
}

const canonicals = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)].length;
if (canonicals !== 1) {
  report('canonical', canonicals === 0 ? 'No rel=canonical on the page.' : `${canonicals} rel=canonical links on one page.`);
}

const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)?.[1]?.trim() ?? '';
if (!description) {
  report('meta-description', 'No meta description.');
} else {
  observe(`Meta description is ${description.length} characters. The evidence set records no documented limit, only that Google truncates the snippet to fit.`);
}

if (/"@type"\s*:\s*"FAQPage"/i.test(html)) {
  report('faqpage-markup', 'The page carries FAQPage structured data.');
}

if (!/<title[^>]*>[^<]{3,}<\/title>/i.test(html)) {
  observe('No non-empty <title>. The evidence set holds no claim about the title element, so this is an observation rather than a finding.');
}

if (robots.ok) {
  const noindexLines = robots.body.split(/\r?\n/).filter((l) => /^\s*noindex\s*:/i.test(l));
  if (noindexLines.length > 0) {
    report('robots-noindex', `robots.txt contains ${noindexLines.length} noindex line(s): ${noindexLines.map((l) => l.trim()).join('; ')}`);
  }

  const disallowing = parseRobots(robots.body).filter((g) => g.disallow.some((d) => d !== ''));
  if (disallowing.length > 0) {
    report('robots-block-is-not-noindex', `robots.txt disallows paths for ${disallowing.length} user-agent group(s).`);
  }

  const unblockedTraining = TRAINING_BOTS.filter((b) => !disallowsAll(robots.body, b));
  if (unblockedTraining.length === TRAINING_BOTS.length) {
    report('training-crawler-policy', 'robots.txt blocks none of the training crawlers, which is the default rather than a decision.');
  } else if (unblockedTraining.length > 0) {
    report('training-crawler-policy', `Some training crawlers are blocked and others are not: still allowed are ${unblockedTraining.join(', ')}.`);
  }

  const blockedRetrieval = RETRIEVAL_BOTS.filter((b) => disallowsAll(robots.body, b));
  if (blockedRetrieval.length > 0) {
    observe(`robots.txt blocks retrieval crawlers ${blockedRetrieval.join(', ')}. These fetch a page to answer a question and cite it, so blocking them removes the site from those answers. No claim in the evidence set states this directly, so it is an observation.`);
  }

  if (sitemapUrls.length === 0) observe('robots.txt names no Sitemap.');
} else {
  observe(`No robots.txt (${robots.status || robots.err}). Every crawler, including training crawlers, is allowed by default.`);
}

const liveSitemaps = sitemaps.filter((s) => s.ok && (s.body.includes('<urlset') || s.body.includes('<sitemapindex')));
if (liveSitemaps.length === 0) {
  observe(`No readable sitemap at ${sitemapUrls.join(', ')}.`);
} else {
  for (const s of liveSitemaps) {
    if (/<changefreq>|<priority>/i.test(s.body)) {
      const emitted = [/<changefreq>/i.test(s.body) && '<changefreq>', /<priority>/i.test(s.body) && '<priority>']
        .filter(Boolean)
        .join(' and ');
      report('sitemap-changefreq-priority', `${s.url} emits ${emitted}.`);
    }
    if (!/<lastmod>/i.test(s.body) && s.body.includes('<urlset')) {
      report('sitemap-lastmod', `${s.url} carries no <lastmod>.`);
    }
  }
}

report('llms-txt', llms.ok ? 'The site serves /llms.txt.' : `No /llms.txt (${llms.status || llms.err}).`);

// ----------------------------------------------------------------- the report

const SEVERITY_ORDER = { error: 0, warn: 1, disputed: 2, info: 3 };
findings.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

if (asJson) {
  process.stdout.write(`${JSON.stringify({ url: page.url ?? base.href, evidenceCompiled: RULES.compiled, findings, observations }, null, 2)}\n`);
} else {
  const out = [`# SEO posture: ${page.url ?? base.href}`, ''];
  out.push(`Checked against evidence compiled ${RULES.compiled}. Every finding below carries the claim that justifies it; anything the evidence does not settle is listed as an observation instead.`, '');
  if (findings.length === 0) out.push('No findings.', '');
  for (const f of findings) {
    out.push(`## [${f.severity}] ${f.title}`, '', f.detail, '', f.says, '');
    for (const e of f.evidence) {
      out.push(`> ${e.claim}`);
      if (e.quote) out.push(`>`, `> Quoted: "${e.quote.replace(/\s+/g, ' ').trim()}"`);
      out.push('', `${e.predicate}, as of ${e.asOf ?? 'undated'} - ${e.source ?? 'no source'}`, `More on this subject: ${e.reference} (${e.subject})`, '');
    }
  }
  if (observations.length > 0) {
    out.push('## Observations', '', 'True of the site, with no claim in the evidence set behind them. Weigh them yourself.', '');
    for (const o of observations) out.push(`- ${o}`);
    out.push('');
  }
  process.stdout.write(out.join('\n'));
}
