# robots.txt

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Robots.txt is a crawl directive, not an enforcement or hiding mechanism: Google states that crawlers may choose whether to obey the instructions, that a robots.txt block prevents Google from crawling a URL but the URL can still be indexed and appear without a description if linked from elsewhere, and that robots.txt should not be used for canonicalization. In September 2022, RFC 9309 made the Robots Exclusion Protocol an IETF Standards Track document, extending the method originally defined by Martijn Koster in 1994, and in September 2023 Google added the Google-Extended robots.txt control for Bard and Vertex AI generative APIs. As of July 1, 2025, Cloudflare changed its default to block AI crawlers unless they pay creators; by August 2026, Search Engine Journal reported that BuzzStream measured 75% of top U.S. and UK publishers blocking training crawlers, and roughly 95% of the 492,000 robots.txt mentions of CCBot existed to block it.

## Claims (28)

### Documented position (18)

- **[documented-position]** Google Search Central's robots.txt introduction states that a robots.txt file is not a mechanism for keeping a web page out of Google.
  - as of: 2025-12-10
  - quote: "A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction states that Google may still find and index a URL disallowed in robots.txt if it is linked from other places on the web.
  - as of: 2025-12-10
  - quote: "While Google won't crawl or index the content blocked by a robots.txt file, we might still find and index a disallowed URL if it is linked from other places on the web. As a result, the URL address and, potentially, other publicly available information such as anchor text in links to the page can still appear in Google Search results."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction states that the instructions in robots.txt files cannot enforce crawler behavior.
  - as of: 2025-12-10
  - quote: "The instructions in robots.txt files cannot enforce crawler behavior to your site; it's up to the crawler to obey them. While Googlebot and other respectable web crawlers obey the instructions in a robots.txt file, other crawlers might not."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction states that it is up to the crawler to obey the instructions in robots.txt files.
  - as of: 2025-12-10
  - quote: "The instructions in robots.txt files cannot enforce crawler behavior to your site; it's up to the crawler to obey them. While Googlebot and other respectable web crawlers obey the instructions in a robots.txt file, other crawlers might not."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction warns against using a robots.txt file as a means to hide web pages from Google Search results.
  - as of: 2025-12-10
  - quote: "Warning: Don't use a robots.txt file as a means to hide your web pages (including PDFs and other text-based formats supported by Google) from Google Search results."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction states that if a web page is blocked with a robots.txt file, the web page's URL can still appear in search results.
  - as of: 2025-12-10
  - quote: "If your web page is blocked with a robots.txt file, its URL can still appear in search results, but the search result won't have a description."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google Search Central's robots.txt introduction states that if a web page is blocked with a robots.txt file, the web page's search result will not have a description.
  - as of: 2025-12-10
  - quote: "If your web page is blocked with a robots.txt file, its URL can still appear in search results, but the search result won't have a description."
  - source: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **[documented-position]** Google's crawl budget documentation states that Google will not shift crawl budget freed by robots.txt blocking to other pages unless Google is already hitting the site's crawl capacity limit.
  - as of: 2026-07-22
  - quote: "Don't use robots.txt to temporarily reallocate crawl budget for other pages; use robots.txt to block pages or resources that you don't want Google to crawl at all. Google won't shift this newly available crawl budget to other pages unless Google is already hitting your site's crawl capacity limit."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** Google's AI features documentation states that robots.txt directives for Googlebot are the control site owners use to manage how their sites are crawled for Search.
  - as of: 2025-12-10
  - quote: "AI is built into Search and integral to how Search functions, which is why robots.txt directives for Googlebot is the control for site owners to manage access to how their sites are crawled for Search."
  - source: https://developers.google.com/search/docs/appearance/ai-features
- **[documented-position]** Google's crawl budget documentation states that URLs blocked by robots.txt stay part of the crawl queue much longer than URLs returning a 404.
  - as of: 2026-07-22
  - quote: "Google won't forget a URL that it knows about, but a 404 status code is a strong signal not to crawl that URL again. Blocked URLs, however, will stay part of your crawl queue much longer, and will be recrawled when the block is removed."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** Google's crawl budget documentation states that blocking URLs with robots.txt prevents Google from crawling them.
  - as of: 2026-07-22
  - quote: "Blocking URLs with robots.txt prevents Google from crawling them, and significantly decreases the chance the URLs will be processed by other Google systems (such as getting indexed by Google Search)."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** Google's crawl budget documentation states that blocking URLs with robots.txt significantly decreases the chance the URLs will be processed by other Google systems such as getting indexed by Google Search.
  - as of: 2026-07-22
  - quote: "Blocking URLs with robots.txt prevents Google from crawling them, and significantly decreases the chance the URLs will be processed by other Google systems (such as getting indexed by Google Search)."
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** RFC 9309 states that it specifies and extends the Robots Exclusion Protocol method originally defined by Martijn Koster in 1994, adding definition language for the protocol, instructions for handling errors, and instructions for caching.
  - as of: 2022-09-01
  - quote: "This document specifies and extends the "Robots Exclusion Protocol" method originally defined by Martijn Koster in 1994 for service owners to control how content served by their services may be accessed, if at all, by automatic clients known as crawlers. Specifically, it adds definition language for the protocol, instructions for handling errors, and instructions for caching."
  - source: https://www.rfc-editor.org/rfc/rfc9309.txt
- **[documented-position]** Google's Search Central blog states that the proposed Robots Exclusion Protocol draft does not change the rules created in 1994 for robots.txt.
  - as of: 2019-07-01
  - quote: "It doesn't change the rules created in 1994, but rather defines essentially all undefined scenarios for robots.txt parsing and matching, and extends it for the modern web."
  - source: https://developers.google.com/search/blog/2019/07/rep-id
- **[documented-position]** Google's Search Central blog states that the proposed Robots Exclusion Protocol draft defines essentially all undefined scenarios for robots.txt parsing and matching.
  - as of: 2019-07-01
  - quote: "It doesn't change the rules created in 1994, but rather defines essentially all undefined scenarios for robots.txt parsing and matching, and extends it for the modern web."
  - source: https://developers.google.com/search/blog/2019/07/rep-id
- **[documented-position]** Google's common crawlers documentation states that crawling preferences addressed to the GoogleOther user agent in robots.txt do not affect any specific product.
  - as of: 2026-07-14
  - quote: "Crawling preferences addressed to the GoogleOther user agent don't affect any specific product. GoogleOther is the generic crawler that may be used by various"
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google's canonicalization documentation states that the robots.txt file should not be used for canonicalization purposes.
  - as of: 2026-07-10
  - quote: "Don't use the robots.txt file for canonicalization purposes. Google may still index URLs that are disallowed in robots.txt without their content."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **[documented-position]** Google's canonicalization documentation states that Google may still index URLs that are disallowed in robots.txt without their content.
  - as of: 2026-07-10
  - quote: "Don't use the robots.txt file for canonicalization purposes. Google may still index URLs that are disallowed in robots.txt without their content."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

### Measured finding (1)

- **[measured-finding]** In 2026, a CCBot block in a site's robots.txt is as likely to be a platform default as a decision.
  - as of: 2026-08-10
  - quote: "Its managed robots.txt reached 3.8 million more domains that never wrote one. Ad plugins add blocklists. In 2026, a CCBot block is as likely to be a platform default as a decision."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/

### Practical effect (1)

- **[practical-effect]** Search Engine Journal reports that Common Crawl's crawler CCBot never runs JavaScript.
  - as of: 2026-08-10
  - quote: "Both sides are read before JavaScript runs, which is the point, because CCBot never runs it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/

### Changed on (5)

- **[changed-on]** The Robots Exclusion Protocol was published as IETF Standards Track document RFC 9309 in September 2022, having previously never been turned into an official Internet standard.
  - as of: 2022-09-01
  - quote: "Internet Engineering Task Force (IETF) M. Koster Request for Comments: 9309 Category: Standards Track G. Illyes ISSN: 2070-1721 H. Zeller L. Sassman Google LLC September 2022 Robots Exclusion Protocol"
  - quote: "However, the REP was never turned into an official Internet standard, which means that developers have interpreted the protocol somewhat differently over the years."
  - source: https://www.rfc-editor.org/rfc/rfc9309.txt
  - source: https://developers.google.com/search/blog/2019/07/rep-id
- **[changed-on]** Google announced Google-Extended, made available through robots.txt.
  - as of: 2023-09-28
  - quote: "Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products."
  - quote: "Making simple and scalable controls, like Google-Extended, available through robots.txt is an important step in providing transparency and control that we believe all providers of AI models should make available."
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
- **[changed-on]** Google-Extended, made available through robots.txt, is a new control.
  - as of: 2023-09-28
  - quote: "Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products."
  - quote: "Making simple and scalable controls, like Google-Extended, available through robots.txt is an important step in providing transparency and control that we believe all providers of AI models should make available."
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
- **[changed-on]** Web publishers can use Google-Extended, made available through robots.txt, to manage whether their sites help improve Bard and Vertex AI generative APIs.
  - as of: 2023-09-28
  - quote: "Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products."
  - quote: "Making simple and scalable controls, like Google-Extended, available through robots.txt is an important step in providing transparency and control that we believe all providers of AI models should make available."
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
  - source: https://blog.google/technology/ai/an-update-on-web-publisher-controls/
- **[changed-on]** Cloudflare called the day on which Cloudflare announced the robots.txt default change 'Content Independence Day'.
  - as of: 2025-07-01
  - quote: "That changes today, July 1, what we’re calling Content Independence Day. Cloudflare, along with a majority of the world's leading publishers and AI companies, is changing the default to block AI crawlers unless they pay creators for their content."
  - source: https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/

### Echoed without a primary source (3)

- **[echoed-claim]** Roughly 492,000 sites name CCBot in robots.txt.
  - as of: 2026-08-10
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
- **[echoed-claim]** About 95% of the mentions of CCBot in robots.txt exist to block CCBot.
  - as of: 2026-08-10
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
- **[echoed-claim]** Search Engine Journal reports that BuzzStream measured the practice of blocking training crawlers using robots.txt at 75% of the top U.S. and UK publishers.
  - as of: 2026-08-10
  - quote: "The BBC robots.txt blocks 13 of the 14 AI crawlers the checker tracks, and other top news sites have been blocking training crawlers on purpose since 2023. BuzzStream measured it at 75% of the top U.S. and UK publishers."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
