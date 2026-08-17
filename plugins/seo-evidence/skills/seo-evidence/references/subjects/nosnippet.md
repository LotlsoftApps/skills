# nosnippet

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Bing introduced support for the data-nosnippet HTML attribute on October 15 2025, and its nosnippet directive blocks all text and preview thumbnails from appearing in snippets. Bing says data-nosnippet content is still indexed normally and available for ranking but excluded from snippets and AI summaries; its guidance on scope conflicts, naming span, div, and section elements in one place and any HTML element in another. Google documents nosnippet as blocking text snippets and video previews, preventing direct input for AI Overviews and AI Mode, and being equivalent to max-snippet:0, while a static image thumbnail may still appear if it improves user experience. Google treats data-nosnippet as a boolean attribute on span, div, and section elements, so any value like "false" is ignored, and structured data inside it remains usable; as of August 1 2026, nosnippet in practice removes content from AI Overviews and also removes traditional snippets.

## Claims (26)

### Documented position (21)

- **[documented-position]** Google's 'Robots meta tag, data-nosnippet, and X-Robots-Tag specifications' documentation states that the nosnippet rule tells Google not to show a text snippet or video preview in the search results for a page.
  - as of: 2026-03-24
  - quote: "nosnippet"
  - quote: "Do not show a text snippet or video preview in the search results for this page."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that a static image thumbnail may still be visible for a page carrying the nosnippet rule when it results in a better user experience.
  - as of: 2026-03-24
  - quote: "A static image thumbnail (if available) may still be visible, when it results in a better user experience."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that the nosnippet rule prevents content from being used as a direct input for AI Overviews and AI Mode.
  - as of: 2026-03-24
  - quote: "This applies to all forms of search results (at Google: web search, Google Images, Discover, AI Overviews, AI Mode) and will also prevent the content from being used as a direct input for AI Overviews and AI Mode."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that the max-snippet value 0 means no snippet is to be shown.
  - as of: 2026-03-24
  - quote: "0: No snippet is to be shown. Equivalent to nosnippet."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that the max-snippet value 0 is equivalent to nosnippet.
  - as of: 2026-03-24
  - quote: "0: No snippet is to be shown. Equivalent to nosnippet."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that when a page carries both max-snippet:50 and nosnippet rules, the nosnippet rule applies.
  - as of: 2026-03-24
  - quote: "Conflicting robots rules: In the case of conflicting robots rules, the more restrictive rule applies. For example, if a page has both max-snippet:50 and nosnippet rules, the nosnippet rule will apply."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that the data-nosnippet HTML attribute can be used on span, div, and section elements.
  - as of: 2026-03-24
  - quote: "You can designate textual parts of an HTML page not to be used as a snippet. This can be done on an HTML-element level with the data-nosnippet HTML attribute on span, div, and section elements."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that data-nosnippet is a boolean attribute.
  - as of: 2026-03-24
  - quote: "The data-nosnippet is considered a boolean attribute."
  - quote: "As with all boolean attributes, any value specified is ignored."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that any value specified for data-nosnippet is ignored.
  - as of: 2026-03-24
  - quote: "The data-nosnippet is considered a boolean attribute."
  - quote: "As with all boolean attributes, any value specified is ignored."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation gives an example in which a div carrying data-nosnippet="false" is also excluded from the snippet.
  - as of: 2026-03-24
  - quote: "`<div data-nosnippet="false">`also not in snippet</div>"
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation advises site owners not to add or remove the data-nosnippet attribute of existing nodes through JavaScript.
  - as of: 2026-03-24
  - quote: "To avoid uncertainty from rendering, do not add or remove the data-nosnippet attribute of existing nodes through JavaScript."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that structured data remains usable for search results when declared within a data-nosnippet element.
  - as of: 2026-03-24
  - quote: "Also note that structured data remains usable for search results when declared within a data-nosnippet element."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications" documentation states that the settings can be read and followed only if crawlers are allowed to access the pages that include them.
  - as of: 2026-03-24
  - quote: "Keep in mind that these settings can be read and followed only if crawlers are allowed to access the pages that include these settings."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's 'Robots meta tag, data-nosnippet, and X-Robots-Tag specifications' documentation states that a meta tag named googlebot-news with the nosnippet value shows a full snippet in Google's web search results.
  - as of: 2026-03-24
  - quote: "To show a full snippet in Google's web search results, but no snippet in Google News, specify googlebot-news as the name of the meta tag:"
  - quote: "`<meta name="googlebot-news" content="nosnippet">`"
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's 'Robots meta tag, data-nosnippet, and X-Robots-Tag specifications' documentation states that a meta tag named googlebot-news with the nosnippet value shows no snippet in Google News.
  - as of: 2026-03-24
  - quote: "To show a full snippet in Google's web search results, but no snippet in Google News, specify googlebot-news as the name of the meta tag:"
  - quote: "`<meta name="googlebot-news" content="nosnippet">`"
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **[documented-position]** Google's "How to write meta descriptions" documentation instructs site owners to use the nosnippet meta tag to prevent Google from displaying a snippet for a page in search results.
  - as of: 2026-04-20
  - quote: "To prevent Google from displaying a snippet for your page in search results, use the nosnippet meta tag ."
  - source: https://developers.google.com/search/docs/appearance/snippet
- **[documented-position]** Google's "AI features and your website" documentation names nosnippet, data-nosnippet, max-snippet and noindex as the controls for limiting the information shown from a site's pages in Search.
  - as of: 2025-12-10
  - quote: "To limit the information shown from your pages in Search, use nosnippet, data-nosnippet, max-snippet, or noindex controls."
  - source: https://developers.google.com/search/docs/appearance/ai-features
- **[documented-position]** The Bing Webmaster blog states that content marked with data-nosnippet is still indexed normally by Bing.
  - as of: 2025-10-15
  - quote: "When Bing crawls your site, any content marked with data-nosnippet is still indexed normally, but it will be excluded from snippets and AI summaries. The content tagged as data-nosnippet is available for ranking."
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute
- **[documented-position]** The Bing Webmaster blog states that content marked with data-nosnippet remains available for ranking.
  - as of: 2025-10-15
  - quote: "When Bing crawls your site, any content marked with data-nosnippet is still indexed normally, but it will be excluded from snippets and AI summaries. The content tagged as data-nosnippet is available for ranking."
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute
- **[documented-position]** The Bing Webmaster blog describes Bing's nosnippet directive as blocking all text from appearing in snippets.
  - as of: 2025-10-15
  - quote: "nosnippet: Blocks all text and preview thumbnails from appearing in snippets."
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute
- **[documented-position]** The Bing Webmaster blog describes Bing's nosnippet directive as blocking preview thumbnails from appearing in snippets.
  - as of: 2025-10-15
  - quote: "nosnippet: Blocks all text and preview thumbnails from appearing in snippets."
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute

### Practical effect (2)

- **[practical-effect]** nosnippet removes content from AI Overviews
  - as of: 2026-08-01
  - quote: "For example, Nosnippet removes content from AI Overviews, but it also takes out traditional snippets at the same time. This all-or-nothing approach was something Google acknowledged in January , when it mentioned it was exploring ways to opt out of AI features."
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
- **[practical-effect]** nosnippet takes out traditional snippets
  - as of: 2026-08-01
  - quote: "For example, Nosnippet removes content from AI Overviews, but it also takes out traditional snippets at the same time. This all-or-nothing approach was something Google acknowledged in January , when it mentioned it was exploring ways to opt out of AI features."
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/

### Changed on (1)

- **[changed-on]** The Bing Webmaster blog announced on October 15 2025 that Bing was introducing support for the data-nosnippet HTML attribute.
  - as of: 2025-10-15
  - quote: "October 15 2025"
  - quote: "At Bing, empowering creators with meaningful control over their content is a core priority. This is why we're introducing the data-nosnippet HTML attribute."
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute

### Disputed between sources (1)

- **[disputed-between]** Bing Webmaster blog says the data-nosnippet attribute can be applied to any HTML element
  - as of: 2026-03-24
  - quote: "This can be done on an HTML-element level with the data-nosnippet HTML attribute on span, div, and section elements."
  - quote: "You can apply the data-nosnippet attribute to any HTML element you want to exclude from Bing Search snippets or AI summaries."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
  - source: https://blogs.bing.com/webmaster/October-2025/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute

### Echoed without a primary source (1)

- **[echoed-claim]** nosnippet echoes Search Engine Journal's report of a NewzDash figure that nearly 1 in 6 U.S. trending news queries place Top Stories inside AI Overviews.
  - as of: 2026-08-01
  - quote: "John Shehata, CEO and founder of NewzDash and GDdash, put a number on it : “Nearly 1 in 6 U.S. trending news queries now place Top Stories inside AI Overviews.” The 15.5% rate applies to tracked results where Google displayed Top Stories, not to all queries NewzDash tracked. The UK figure is 17.46%."
  - quote: "NewzDash hasn't published sample sizes or collection dates alongside the figures."
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
