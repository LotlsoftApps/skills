---
name: seo-evidence
description: Answer SEO and crawler questions from cited, dated primary sources instead of training-data folklore, check whether a widely repeated SEO claim has any primary source, and audit a live site against that evidence. Use when asked what affects ranking or indexing, whether to add or remove a tag (canonical, changefreq, lastmod, hreflang, FAQPage, llms.txt, robots directives), how AI crawlers and AI Overviews treat a site, whether an SEO "best practice" is still true, or to check a site's SEO - including phrasings like "does X hurt SEO", "should we add X", "is it true that X", "what does Google actually say about X", "audit my SEO", "check our robots.txt", "are we visible to ChatGPT", "why isn't this page indexed".
---

# SEO, with the receipts

1,163 claims about how search engines behave, across 38 subjects. Every claim
carries a direct quote from a named source, that source's own URL, and the date
the quote was true. Claims are separated by what KIND of evidence they are, and
253 further claims were written and refused for lack of support; those are not
here.

The point is narrow and worth stating plainly: **most SEO statements in a
model's training data are echoes of vendor blog posts.** This evidence set
separates what an operator documents from what the field repeats, so you can
tell someone which one you are giving them.

Paths below are relative to this skill's own directory - the one holding this
`SKILL.md`. From anywhere else, prefix them, e.g.
`~/.claude/skills/seo-evidence/references/index.md`.

## Answering a question

1. **Find the subject.** `grep -i "<term>" references/index.md` - 38 subjects,
   one row each, with counts and the opening sentence of its summary.
2. **Read the subject file.** `references/subjects/<slug>.md` holds the summary
   and every claim, grouped by evidence type, each with its quote, its source
   URL and its date.
3. **Check the repeated-ideas list before repeating a statistic.**
   `grep -i "<term>" references/echoed.md`. Each entry carries the result of
   going and looking for its source, and you should answer with that result:
   - **contradicted** - a primary source says the opposite. Say so, with the quote.
   - **backed** - a real source exists. Use it, and check what it actually measured.
   - **searched, nothing found** - the searches are listed. Say the field repeats
     it and no source could be found, on that date. Never say it is false.
   - **not yet checked** - say the field repeats it, and nothing more.
4. **Answer with the quote, the source and the date.** Not "Google ignores
   changefreq" but "Google's sitemap documentation, as of 2026-07-08, says it
   ignores `<changefreq>` and `<priority>`" plus the link.

```bash
grep -ril "changefreq" references/subjects/ | head
grep -i -A4 "lastmod" references/subjects/sitemap-lastmod.md
```

## What each evidence type licenses you to say

This vocabulary is the skill. Using the wrong verb for the evidence type is how
confident, wrong SEO advice gets written.

| Type                  | What it is                                      | What you may say                                                 |
| --------------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| `documented-position` | The operator's own words                        | "Google documents that…" - never "Google does…"                  |
| `measured-finding`    | Someone measured it, method attached            | "X measured…", naming who and when                               |
| `practical-effect`    | Observed behaviour, distinct from documentation | "In practice…", with the source                                  |
| `changed-on`          | A dated change                                  | "Since `<date>`…" - this is where advice expires                 |
| `disputed-between`    | Sources disagree                                | Give both. Do not pick a winner                                  |
| `echoed-claim`        | Repeated, no primary source in reach            | "The field repeats…, and nothing here establishes it either way" |

**Never present an unchecked `echoed-claim` as established, and never present it
as debunked.** It is not a falsehood, and its absence here is not proof of absence:
these claims come from a bounded set of documents, so a missing source can mean
the idea has none or only that the document carrying it was never read. The
finding is the repetition.

## Auditing a site

```bash
node scripts/audit.mjs https://example.com          # markdown report
node scripts/audit.mjs https://example.com --json   # machine-readable
```

Node 18+, no dependencies, no API key. It fetches the page, `/robots.txt`,
`/llms.txt` and each sitemap named in robots.txt (up to three), then reports:

| Severity   | Means                                                           |
| ---------- | --------------------------------------------------------------- |
| `error`    | The site is doing something the evidence says does not work     |
| `warn`     | Weakens a documented signal                                     |
| `disputed` | The sources genuinely disagree; the tool does not pick a winner |
| `info`     | A choice worth making deliberately, not a defect                |

Then **Observations**: true of the site, with no claim behind them. Weigh those
yourself. Keeping them separate is the point - it is the line between "Google
documents this" and "this is a common opinion".

Ten rules, each backed by a claim: sitemap `<changefreq>`/`<priority>`, sitemap
`<lastmod>`, `noindex` in robots.txt, robots.txt blocking versus indexing,
whether the page has a body without JavaScript, training-crawler policy,
`rel=canonical`, meta description, FAQPage markup, and `llms.txt`.
`references/rules.md` lists each with its quote, source and date; read it before
arguing with a finding.

The audit will not produce a score - a number invites optimising the number -
and will not predict rankings. There is no `<title>` rule because no claim about
the title element is held here; its absence is reported as an observation and
nothing more.

## Training crawlers and retrieval crawlers

Conflating these is the most common way a site loses AI visibility by accident:

- **Training crawlers** (`GPTBot`, `Google-Extended`, `CCBot`, `ClaudeBot`,
  `Applebot-Extended`, `Bytespider`, `Meta-ExternalAgent`) take content to train
  models. Blocking them is a policy choice with no documented search cost.
- **Retrieval crawlers** (`OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`,
  `Claude-User`, `PerplexityBot`, `Perplexity-User`) fetch a page to answer a
  question and cite it. Blocking one removes the site from that engine's
  answers.

Blocking `Google-Extended` does **not** remove a site from AI Overviews - those
are fed by the ordinary Googlebot index. Google documents this, and the field
widely believes otherwise; both are recorded in
`references/subjects/googleextended.md`.

## When the evidence is silent, or old

Say so, and say what you are falling back on. 38 subjects do not cover every SEO
question, and a confident answer assembled from training data while a cited
skill is loaded is worse than no skill at all, because the citation posture makes
it look checked.

Every file is stamped with the date it was compiled, and every claim with the
date its quote was true. 154 claims here are dated CHANGES to guidance that was
previously true, which is what this material is for: guidance expires quietly.
When a claim is load-bearing and old, open its source URL and check it still
says what it said.
