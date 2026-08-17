# noindex

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

For Google, noindex is not a supported robots.txt rule; Google announced on July 2, 2019 that it would retire handling of unsupported robots.txt noindex on September 1, 2019, and its documentation as of December 10, 2025 states that specifying noindex in robots.txt is not supported. The supported noindex mechanisms for Google are a meta tag or an HTTP response header, including X-Robots-Tag for non-HTML resources such as PDFs, video files, and image files; for the rule to be effective, the page must not be blocked by robots.txt and must be otherwise accessible. When Googlebot sees the noindex tag or header, Google drops the page entirely from Google Search results regardless of other links, but the page may continue to appear until Googlebot revisits it, and revisiting may take months depending on page importance. noindex does not prevent Google from requesting the page, wastes crawling time, and Google advises against using noindex to manage crawl budget; Google also states that a noindex, follow directive is essentially the same as noindex, nofollow in the long run, and that using JavaScript to change or remove the noindex meta tag may not work as expected, while other search engines may interpret noindex differently.

## Claims (26)

### Documented position (20)

- **[documented-position]** Google Search Central's noindex documentation states that specifying the noindex rule in the robots.txt file is not supported by Google.
  - as of: 2025-12-10
  - quote: "There are two ways to implement noindex: as a `<meta>` tag and as an HTTP response header. They have the same effect; choose the method that is more convenient for your site and appropriate for the content type. Specifying the noindex rule in the robots.txt file is not supported by Google."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** noindex is an unsupported and unpublished robots.txt rule.
  - as of: 2019-07-02
  - quote: "In the interest of maintaining a healthy ecosystem and preparing for potential future open source releases, we're retiring all code that handles unsupported and unpublished rules (such as noindex) on September 1, 2019."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt
- **[documented-position]** Google's Search Central blog states that robots.txt rules such as crawl-delay, nofollow and noindex were never documented by Google.
  - as of: 2019-07-02
  - quote: "In particular, we focused on rules unsupported by the internet draft, such as crawl-delay, nofollow, and noindex. Since these rules were never documented by Google, naturally, their usage in relation to Googlebot is very low."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt
- **[documented-position]** Google's Search Central blog states that the usage of robots.txt rules such as crawl-delay, nofollow and noindex in relation to Googlebot is very low.
  - as of: 2019-07-02
  - quote: "In particular, we focused on rules unsupported by the internet draft, such as crawl-delay, nofollow, and noindex. Since these rules were never documented by Google, naturally, their usage in relation to Googlebot is very low."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt
- **[documented-position]** Google's Search Central blog states that the noindex rule in robots meta tags is the most effective way to remove URLs from the index when crawling is allowed.
  - as of: 2019-07-02
  - quote: "noindex in robots meta tags: Supported both in the HTTP response headers and in HTML, the noindex rule is the most effective way to remove URLs from the index when crawling is allowed."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt
- **[documented-position]** Google Search Central's noindex documentation states that for the noindex rule to be effective the page or resource must not be blocked by a robots.txt file and must be otherwise accessible to the crawler.
  - as of: 2025-12-10
  - quote: "For the noindex rule to be effective, the page or resource must not be blocked by a robots.txt file, and it has to be otherwise accessible to the crawler. If the page is blocked by a robots.txt file or the crawler can't access the page, the crawler will never see the noindex rule, and the page can still appear in search results, for example if other pages link to it."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that when Googlebot crawls a page and extracts the noindex tag or header, Google will drop that page entirely from Google Search results regardless of whether other sites link to it.
  - as of: 2025-12-10
  - quote: "When Googlebot crawls that page and extracts the tag or header, Google will drop that page entirely from Google Search results, regardless of whether other sites link to it."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google's crawl budget documentation advises against using noindex to manage crawl budget.
  - as of: 2026-07-22
  - quote: "Don't use noindex, as Google will still request, but then drop the page when it sees a noindex meta tag or header in the HTTP response, wasting crawling time."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** The noindex rule does not prevent Google from requesting a page.
  - as of: 2026-07-22
  - quote: "Don't use noindex, as Google will still request, but then drop the page when it sees a noindex meta tag or header in the HTTP response, wasting crawling time."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** Google Search Central's noindex documentation states that the time it takes Googlebot to revisit a page after a noindex rule is added depends on the importance of the page on the internet.
  - as of: 2025-12-10
  - quote: "We have to crawl your page in order to see `<meta>` tags and HTTP headers. If a page is still appearing in results, it's probably because we haven't crawled the page since you added the noindex rule. Depending on the importance of the page on the internet, it may take months for Googlebot to revisit a page."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that the time it takes Googlebot to revisit a page after a noindex rule is added may be months.
  - as of: 2025-12-10
  - quote: "We have to crawl your page in order to see `<meta>` tags and HTTP headers. If a page is still appearing in results, it's probably because we haven't crawled the page since you added the noindex rule. Depending on the importance of the page on the internet, it may take months for Googlebot to revisit a page."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that some search engines might interpret the noindex rule differently.
  - as of: 2025-12-10
  - quote: "Be aware that some search engines might interpret the noindex rule differently. As a result, it is possible that your page might still appear in results from other search engines."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that a page might still appear in results from other search engines.
  - as of: 2025-12-10
  - quote: "Be aware that some search engines might interpret the noindex rule differently. As a result, it is possible that your page might still appear in results from other search engines."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that the X-Robots-Tag HTTP response header can be used for non-HTML resources.
  - as of: 2025-12-10
  - quote: "Instead of a `<meta>` tag, you can return an X-Robots-Tag HTTP header with a value of either noindex or none in your response. A response header can be used for non-HTML resources, such as PDFs, video files, and image files."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google Search Central's noindex documentation states that the X-Robots-Tag HTTP response header can be used for PDFs, video files, and image files.
  - as of: 2025-12-10
  - quote: "Instead of a `<meta>` tag, you can return an X-Robots-Tag HTTP header with a value of either noindex or none in your response. A response header can be used for non-HTML resources, such as PDFs, video files, and image files."
  - source: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- **[documented-position]** Google's JavaScript SEO documentation states that when Google encounters the noindex tag it may skip rendering and JavaScript execution.
  - as of: 2026-03-04
  - quote: "When Google encounters the noindex tag, it may skip rendering and JavaScript execution, which means using JavaScript to change or remove the robots meta tag from noindex may not work as expected. If you do want the page indexed, don't use a noindex tag in the original page code."
  - source: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **[documented-position]** Google's JavaScript SEO documentation states that using JavaScript to change or remove the robots meta tag from noindex may not work as expected.
  - as of: 2026-03-04
  - quote: "When Google encounters the noindex tag, it may skip rendering and JavaScript execution, which means using JavaScript to change or remove the robots meta tag from noindex may not work as expected. If you do want the page indexed, don't use a noindex tag in the original page code."
  - source: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **[documented-position]** Google's canonicalization documentation states that Google does not recommend using noindex to prevent selection of a canonical page within a single site.
  - as of: 2026-07-10
  - quote: "We don't recommend using noindex to prevent selection of a canonical page within a single site, because it will completely block the page from Search."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **[documented-position]** Google's canonicalization documentation states that using noindex to prevent selection of a canonical page within a single site will completely block the page from Search.
  - as of: 2026-07-10
  - quote: "We don't recommend using noindex to prevent selection of a canonical page within a single site, because it will completely block the page from Search."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **[documented-position]** A noindex and follow directive is essentially kind of the same as a noindex, nofollow directive, with no really big difference in the long run.
  - as of: 2017-12-28
  - quote: "But if we see the noindex there for longer than we think this this page really doesn't want to be used in search so we will remove it completely. And then we won't follow the links anyway. So in noindex and follow is essentially kind of the same as a noindex, nofollow. There's no really big difference there in the long run."
  - source: https://www.seroundtable.com/google-long-term-noindex-follow-24990.html

### Measured finding (2)

- **[measured-finding]** Google's Search Central blog reports that Google analyzed the usage of the noindex directive in robots.txt rules.
  - as of: 2019-07-02
  - quote: "While open-sourcing our parser library, we analyzed the usage of robots.txt rules. In particular, we focused on rules unsupported by the internet draft, such as crawl-delay, nofollow, and noindex. Since these rules were never documented by Google, naturally, their usage in relation to Googlebot is very low. Digging further, we saw their usage was contradicted by other rules in all but 0.001% of all robots.txt files on the internet."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt
- **[measured-finding]** Google's Search Central blog reports that the use of the unsupported noindex directive was contradicted by other rules in all but 0.001% of all robots.txt files on the internet.
  - as of: 2019-07-02
  - quote: "While open-sourcing our parser library, we analyzed the usage of robots.txt rules. In particular, we focused on rules unsupported by the internet draft, such as crawl-delay, nofollow, and noindex. Since these rules were never documented by Google, naturally, their usage in relation to Googlebot is very low. Digging further, we saw their usage was contradicted by other rules in all but 0.001% of all robots.txt files on the internet."
  - source: https://developers.google.com/search/blog/2019/07/a-note-on-unsupported-rules-in-robotstxt

### Practical effect (2)

- **[practical-effect]** The noindex rule causes Google to drop the page after requesting it.
  - as of: 2026-07-22
  - quote: "Don't use noindex, as Google will still request, but then drop the page when it sees a noindex meta tag or header in the HTTP response, wasting crawling time."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[practical-effect]** The noindex rule wastes crawling time.
  - as of: 2026-07-22
  - quote: "Don't use noindex, as Google will still request, but then drop the page when it sees a noindex meta tag or header in the HTTP response, wasting crawling time."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget

### Echoed without a primary source (2)

- **[echoed-claim]** Search Engine Roundtable reports that with a noindex and follow directive Google initially keeps the page in its index.
  - as of: 2017-12-28
  - quote: "So it's kind of tricky with noindex. Which which I think is something somewhat of a misconception in general with a the SEO community. In that with a noindex and follow it's still the case that we see the noindex. Snd in the first step we say okay you don't want this page shown in the search results. We'll still keep it in our index, we just won't show it and then we can follow those links."
  - source: https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
- **[echoed-claim]** Search Engine Roundtable reports that with a noindex and follow directive Google follows the links on the page.
  - as of: 2017-12-28
  - quote: "So it's kind of tricky with noindex. Which which I think is something somewhat of a misconception in general with a the SEO community. In that with a noindex and follow it's still the case that we see the noindex. Snd in the first step we say okay you don't want this page shown in the search results. We'll still keep it in our index, we just won't show it and then we can follow those links."
  - source: https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
