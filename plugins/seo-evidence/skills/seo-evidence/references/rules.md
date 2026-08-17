# What the audit checks, and what says so

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

Every rule carries the claim that justifies it. A rule whose claim is no longer in the evidence set fails the build rather than shipping unsourced.

## Sitemap emits <changefreq> or <priority>

- id: `sitemap-changefreq-priority`
- severity: warn

Both are ignored by Google. Emitting them is inert, but it is a signal that the sitemap was written from folklore rather than from the documentation.

> Google's developer documentation on building a sitemap states that Google ignores `<priority>` and `<changefreq>` values.
>
> Quoted: "Google ignores `<priority>` and `<changefreq>` values."

documented-position, as of 2026-07-08 - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
More on this subject: `references/subjects/changefreq.md` (changefreq)

## Sitemap carries no <lastmod>

- id: `sitemap-lastmod`
- severity: info

Google uses lastmod when it is consistently and verifiably accurate. Omit it rather than fake it: a value that cannot be stated accurately is worse than none.

> Google's "Build and submit a sitemap" documentation states that Google uses the sitemap `<lastmod>` value if it is consistently and verifiably accurate.
>
> Quoted: "Google uses the `<lastmod>` value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate."

documented-position, as of 2026-07-08 - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
More on this subject: `references/subjects/sitemap-lastmod.md` (sitemap lastmod)

## robots.txt contains a noindex directive

- id: `robots-noindex`
- severity: error

Google does not support noindex in robots.txt. A page relying on it is not protected from indexing at all; use the meta tag or the X-Robots-Tag header.

> Google Search Central's noindex documentation states that specifying the noindex rule in the robots.txt file is not supported by Google.
>
> Quoted: "There are two ways to implement noindex: as a `<meta>` tag and as an HTTP response header. They have the same effect; choose the method that is more convenient for your site and appropriate for the content type. Specifying the noindex rule in the robots.txt file is not supported by Google."

documented-position, as of 2025-12-10 - https://developers.google.com/search/docs/crawling-indexing/block-indexing
More on this subject: `references/subjects/noindex.md` (noindex)

## Disallowed paths can still be indexed

- id: `robots-block-is-not-noindex`
- severity: info

robots.txt governs crawling, not indexing. A disallowed URL linked from elsewhere can still appear in results, without a description.

> Google Search Central's robots.txt introduction states that a robots.txt file is not a mechanism for keeping a web page out of Google.
>
> Quoted: "A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google."

documented-position, as of 2025-12-10 - https://developers.google.com/search/docs/crawling-indexing/robots/intro
More on this subject: `references/subjects/robotstxt.md` (robots.txt)

## Page body is empty without JavaScript

- id: `client-rendered-body`
- severity: error

The page ranks normally in Google, whose renderer executes JavaScript, while being blank to the crawlers behind ChatGPT and Claude.

> Vercel's blog post on AI crawlers reports, regarding JavaScript rendering, that ChatGPT and Claude crawlers do not execute JavaScript files.
>
> Quoted: "The data indicates that while ChatGPT and Claude crawlers do fetch JavaScript files (ChatGPT: 11.50%, Claude: 23.84% of requests), they don't execute them. They can't read client-side rendered content."

measured-finding, as of 2024-12-17 - https://vercel.com/blog/the-rise-of-the-ai-crawler
More on this subject: `references/subjects/javascript-rendering.md` (JavaScript rendering)

> Vercel's blog post on AI crawlers reports, regarding JavaScript rendering, that ChatGPT and Claude crawlers cannot read client-side rendered content.
>
> Quoted: "The data indicates that while ChatGPT and Claude crawlers do fetch JavaScript files (ChatGPT: 11.50%, Claude: 23.84% of requests), they don't execute them. They can't read client-side rendered content."

measured-finding, as of 2024-12-17 - https://vercel.com/blog/the-rise-of-the-ai-crawler
More on this subject: `references/subjects/javascript-rendering.md` (JavaScript rendering)

## No stated policy for training crawlers

- id: `training-crawler-policy`
- severity: info

Blocking a training crawler is a choice, not a defect. It is listed so the choice is made deliberately rather than by default.

> Google's crawler documentation states that web publishers can use Google-Extended to manage whether content Google crawls from their sites may be used for training future generations of Gemini models and for grounding.
>
> Quoted: "Google-Extended is a standalone product token that web publishers can use to manage whether content Google crawls from their sites may be used for training future generations of Gemini models that power Gemini Apps and Vertex AI API for Gemini and for grounding (providing content from the Google Search index to the model at prompt time to improve factuality and relevancy) in Gemini Apps and Grounding with Google Search on Vertex AI."

documented-position, as of 2026-07-14 - https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
More on this subject: `references/subjects/googleextended.md` (Google-Extended)

> Google's crawler documentation states that Google-Extended does not impact a site's inclusion in Google Search.
>
> Quoted: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."

documented-position, as of 2026-07-14 - https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
More on this subject: `references/subjects/googleextended.md` (Google-Extended)

## No rel=canonical, or more than one

- id: `canonical`
- severity: warn

A canonical is a hint rather than a rule, and two of them let the engine discard both and choose for itself.

> Google's Search Central canonicalization documentation states that indicating a canonical preference is a hint.
>
> Quoted: "You can indicate your preference to Google using these techniques, but Google may choose a different page as canonical than you do, for various reasons. That is, indicating a canonical preference is a hint, not a rule."

documented-position, as of 2026-07-10 - https://developers.google.com/search/docs/crawling-indexing/canonicalization
More on this subject: `references/subjects/canonical-tag.md` (canonical tag)

## No meta description

- id: `meta-description`
- severity: warn

Google truncates the snippet to fit the result. There is no documented character limit; the widely repeated 155 is echoed from vendor guides, not from Google.

> Google Search Central's documentation on controlling snippets states that the meta description snippet is truncated in Google Search results as needed, typically to fit the device width.
>
> Quoted: "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width."

documented-position, as of 2026-04-20 - https://developers.google.com/search/docs/appearance/snippet
More on this subject: `references/subjects/meta-description.md` (meta description)

## FAQPage structured data present

- id: `faqpage-markup`
- severity: info

The FAQ rich result was restricted to well-known health and government sites in August 2023. Google states there is no need to remove the markup, so this is dead weight rather than a fault.

> Google's August 2023 announcement about FAQ rich results stated that FAQPage structured data would no longer be shown regularly as a FAQ rich result for all sites other than well-known, authoritative government and health websites.
>
> Quoted: "Going forward, FAQ (from FAQPage structured data) rich results will only be shown for well-known, authoritative government and health websites."

changed-on, as of 2023-08-08 - https://developers.google.com/search/blog/2023/08/howto-faq-changes
More on this subject: `references/subjects/faqpage-structured-data.md` (FAQPage structured data)

> Google's August 2023 announcement about the FAQ rich result told site owners that there was no need to proactively remove FAQPage structured data.
>
> Quoted: "While you can drop this structured data from your site, there's no need to proactively remove it."

documented-position, as of 2023-08-08 - https://developers.google.com/search/blog/2023/08/howto-faq-changes
More on this subject: `references/subjects/faqpage-structured-data.md` (FAQPage structured data)

## llms.txt

- id: `llms-txt`
- severity: disputed

The sources disagree, and this tool does not pick a winner. Google Search states it ignores the file; Google’s own Lighthouse documentation tells site owners to create one.

> Google Search Central's documentation states that Google Search ignores LLMS.txt files.
>
> Quoted: "It's completely fine if you decide to create and maintain LLMS.txt files (or other similar files) for other services or systems that use these files. Doing so will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."

documented-position, as of 2026-07-10 - https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
More on this subject: `references/subjects/llmstxt.md` (llms.txt)

> Google's Chrome for Developers Lighthouse documentation instructs site owners to create an llms.txt file in their website's root directory.
>
> Quoted: "Create an llms.txt file and place it in the root directory of your website (for example, https://example.com/llms.txt). The file should follow the llms.txt specification and provide a concise Markdown summary of your site's purpose and key links."

disputed-between, as of 2026-07-10 - https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
More on this subject: `references/subjects/llmstxt.md` (llms.txt)
