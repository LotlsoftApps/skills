# Google-Extended

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Google-Extended controls whether content Google crawls from a site may be used to train future Gemini models and for grounding in Gemini Apps and Vertex AI. It does not affect the site’s inclusion or ranking in Google Search, and it does not remove content from AI Overviews; opting out of AI Overviews requires blocking Googlebot entirely, which would also eliminate the site’s organic search traffic. By July 2026, its documented scope explicitly included grounding, following earlier versions that covered only training.

## Claims (21)

### Documented position (12)

- **[documented-position]** Google's crawler documentation states that Google-Extended does not impact a site's inclusion in Google Search.
  - as of: 2026-07-14
  - quote: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google's crawler documentation states that Google-Extended is not used as a ranking signal in Google Search.
  - as of: 2026-07-14
  - quote: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google's crawler documentation states that Google-Extended is a standalone product token.
  - as of: 2026-07-14
  - quote: "Google-Extended is a standalone product token that web publishers can use to manage whether content Google crawls from their sites may be used for training future generations of Gemini models that power Gemini Apps and Vertex AI API for Gemini and for grounding (providing content from the Google Search index to the model at prompt time to improve factuality and relevancy) in Gemini Apps and Grounding with Google Search on Vertex AI."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google's crawler documentation states that web publishers can use Google-Extended to manage whether content Google crawls from their sites may be used for training future generations of Gemini models and for grounding.
  - as of: 2026-07-14
  - quote: "Google-Extended is a standalone product token that web publishers can use to manage whether content Google crawls from their sites may be used for training future generations of Gemini models that power Gemini Apps and Vertex AI API for Gemini and for grounding (providing content from the Google Search index to the model at prompt time to improve factuality and relevancy) in Gemini Apps and Grounding with Google Search on Vertex AI."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google-Extended does not have a separate HTTP request user agent string.
  - as of: 2026-07-14
  - quote: "Google-Extended doesn't have a separate HTTP request user agent string. Crawling is done with existing Google user agent strings; the robots.txt user-agent token is used in a control capacity."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google-Extended's crawling is done with existing Google user agent strings.
  - as of: 2026-07-14
  - quote: "Google-Extended doesn't have a separate HTTP request user agent string. Crawling is done with existing Google user agent strings; the robots.txt user-agent token is used in a control capacity."
  - source: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google-Extended is described as a token to manage whether sites help improve Gemini Apps and Vertex AI generative APIs in an archived September 2024 copy of Google's crawler documentation.
  - as of: 2024-09-16
  - quote: "Google-Extended is a standalone product token that web publishers can use to manage whether their sites help improve Gemini Apps and Vertex AI generative APIs, including future generations of models that power those products. Google-Extended does not impact a site's inclusion or ranking in Google Search."
  - source: https://web.archive.org/web/20240916053734/https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** The archived September 2024 copy of Google's crawler documentation does not mention grounding in its description of Google-Extended.
  - as of: 2024-09-16
  - quote: "Google-Extended is a standalone product token that web publishers can use to manage whether their sites help improve Gemini Apps and Vertex AI generative APIs, including future generations of models that power those products. Google-Extended does not impact a site's inclusion or ranking in Google Search."
  - source: https://web.archive.org/web/20240916053734/https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[documented-position]** Google's "AI features and your website" documentation directs readers to Google-Extended.
  - as of: 2025-12-10
  - quote: "To limit AI training and grounding in some of Google's other systems, read more about Google-Extended."
  - source: https://developers.google.com/search/docs/appearance/ai-features
- **[documented-position]** The purpose of Google's "AI features and your website" documentation directing readers to Google-Extended is to limit AI training and grounding in some of Google's other systems.
  - as of: 2025-12-10
  - quote: "To limit AI training and grounding in some of Google's other systems, read more about Google-Extended."
  - source: https://developers.google.com/search/docs/appearance/ai-features
- **[documented-position]** Google-Extended is the tool that Google's Search Console help page for the Search generative AI control directs readers to use to limit training of the models used to generate responses in Search generative AI features.
  - as of: 2026-06-03
  - quote: "This control doesn't affect AI training; to limit training of the models used to generate responses in Search generative AI features, use Google-Extended. To block your content from appearing in Google Search completely, use noindex."
  - source: https://support.google.com/webmasters/answer/16908024?hl=en
- **[documented-position]** Google's Search Console help page for the Search generative AI control, the page that directs readers to use Google-Extended, states that the Search generative AI control doesn't affect AI training.
  - as of: 2026-06-03
  - quote: "This control doesn't affect AI training; to limit training of the models used to generate responses in Search generative AI features, use Google-Extended. To block your content from appearing in Google Search completely, use noindex."
  - source: https://support.google.com/webmasters/answer/16908024?hl=en

### Changed on (2)

- **[changed-on]** A Google blog post announced Google-Extended.
  - as of: 2023-09-28
  - quote: "Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products."
  - source: https://blog.google/innovation-and-ai/products/an-update-on-web-publisher-controls/
- **[changed-on]** Google-Extended is a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs.
  - as of: 2023-09-28
  - quote: "Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products."
  - source: https://blog.google/innovation-and-ai/products/an-update-on-web-publisher-controls/

### Echoed without a primary source (7)

- **[echoed-claim]** A page on amicited.com asserts that many publishers mistakenly believe blocking Google-Extended will prevent their content from appearing in AI Overviews.
  - as of: 2026-01-03
  - quote: "Many publishers mistakenly believe that blocking Google-Extended will prevent their content from appearing in AI Overviews, but this is fundamentally incorrect."
  - source: https://www.amicited.com/blog/google-extended-what-it-does-should-you-block-it/
- **[echoed-claim]** A page on digitalapplied.com asserts that the distinction between Google-Extended and AI Overviews trips up most publishers.
  - as of: 2026-06-06
  - quote: "Blocking Google-Extended is therefore insufficient to remove you from AI Overviews, a distinction that trips up most publishers."
  - source: https://www.digitalapplied.com/blog/google-search-console-ai-performance-block-ai-responses-2026-decision
- **[echoed-claim]** A page on playwire.com asserts that some publishers report that blocking Google-Extended may affect their appearance in Google's "Grounding with Google Search" feature for Gemini.
  - as of: 2025-12-08
  - quote: "There's a catch here. Some publishers report that blocking Google-Extended may affect their appearance in Google's "Grounding with Google Search" feature for Gemini. This could potentially impact citations to your pages in AI-generated responses."
  - source: https://www.playwire.com/blog/how-to-block-ai-bots-with-robotstxt-the-complete-publishers-guide
- **[echoed-claim]** A guide on zerokit.dev states that for Google-Extended, opting out of AI Overviews entirely is a different and more complex conversation.
  - as of: 2026-04-09
  - quote: "Blocking Google-Extended may reduce how well Gemini understands your content for grounding purposes, but it won't necessarily remove you from AI Overviews. If you want to opt out of AI Overviews entirely, that's a different (and more complex) conversation involving the nosnippet meta tag."
  - source: https://zerokit.dev/guides/block-google-extended.html
- **[echoed-claim]** A guide on zerokit.dev states that for Google-Extended, opting out of AI Overviews entirely involves the nosnippet meta tag.
  - as of: 2026-04-09
  - quote: "Blocking Google-Extended may reduce how well Gemini understands your content for grounding purposes, but it won't necessarily remove you from AI Overviews. If you want to opt out of AI Overviews entirely, that's a different (and more complex) conversation involving the nosnippet meta tag."
  - source: https://zerokit.dev/guides/block-google-extended.html
- **[echoed-claim]** A page on intrepidonline.com states that to remove content from AI Overviews, a site owner needs to block Googlebot itself and not just Google-Extended.
  - as of: 2024-06-20
  - quote: "Answer: To put it bluntly, there is no easy way to do this without harming your site. To remove your content from AI Overviews, you need to block Googlebot itself (not just Google-Extended), which would result in your site no longer ranking and losing all of your organic traffic from Google."
  - source: https://www.intrepidonline.com/blog/seo/sge-google-block-not-block/
- **[echoed-claim]** A page on intrepidonline.com states that blocking Googlebot itself and not just Google-Extended would result in the site no longer ranking.
  - as of: 2024-06-20
  - quote: "Answer: To put it bluntly, there is no easy way to do this without harming your site. To remove your content from AI Overviews, you need to block Googlebot itself (not just Google-Extended), which would result in your site no longer ranking and losing all of your organic traffic from Google."
  - source: https://www.intrepidonline.com/blog/seo/sge-google-block-not-block/
