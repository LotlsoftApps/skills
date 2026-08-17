# changefreq

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

The sitemaps.org protocol as of 2016-11-21 defines `<changefreq>` as an optional hint, lists valid values as always, hourly, daily, weekly, monthly, yearly and never, and states that crawlers may deviate from it, including periodically crawling pages marked "never". Google's documentation as of 2020-11-11 and 2026-07-08 says Google ignores `<priority>` and `<changefreq>`, and Bing's blog as of 2025-07-31 says Bing ignores changefreq and priority while lastmod remains a key recrawl signal; Google's July 2026 documentation says it uses the lastmod value if it is consistently and verifiably accurate. Yandex's documentation as of 2026-08-12 describes changefreq as frequency of page changes, but these claims do not establish whether Yandex uses it, and some third-party guides from 2025 and 2026 still advise tuning changefreq and warn that high values may trigger aggressive crawling, which conflicts with the Google and Bing statements that the tag is ignored.

## Claims (41)

### Documented position (24)

- **[documented-position]** The sitemaps.org sitemap protocol defines the `<changefreq>` element as how frequently the page is likely to change.
  - as of: 2016-11-21
  - quote: "How frequently the page is likely to change."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that the `<changefreq>` value provides general information to search engines.
  - as of: 2016-11-21
  - quote: "This value provides general information to search engines and may not correlate exactly to how often they crawl the page."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that the `<changefreq>` value may not correlate exactly to how often search engines crawl the page.
  - as of: 2016-11-21
  - quote: "This value provides general information to search engines and may not correlate exactly to how often they crawl the page."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol lists the `<changefreq>` element as optional.
  - as of: 2016-11-21
  - quote: "`<changefreq>` optional How frequently the page is likely to change."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol lists the valid values of `<changefreq>` as always, hourly, daily, weekly, monthly, yearly and never.
  - as of: 2016-11-21
  - quote: "Valid values are: always hourly daily weekly monthly yearly never"
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol says the changefreq value 'always' should be used to describe documents that change each time they are accessed.
  - as of: 2016-11-21
  - quote: "The value "always" should be used to describe documents that change each time they are accessed."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol says the changefreq value 'never' should be used to describe archived URLs.
  - as of: 2016-11-21
  - quote: "The value "never" should be used to describe archived URLs."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that the value of the `<changefreq>` tag is considered a hint and not a command.
  - as of: 2016-11-21
  - quote: "Please note that the value of this tag is considered a hint and not a command."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that search engine crawlers may crawl pages with changefreq 'hourly' less frequently than hourly.
  - as of: 2016-11-21
  - quote: "Even though search engine crawlers may consider this information when making decisions, they may crawl pages marked "hourly" less frequently than that, and they may crawl pages marked "yearly" more frequently than that."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that search engine crawlers may crawl pages with changefreq value "yearly" more frequently than yearly.
  - as of: 2016-11-21
  - quote: "Even though search engine crawlers may consider this information when making decisions, they may crawl pages marked "hourly" less frequently than that, and they may crawl pages marked "yearly" more frequently than that."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that crawlers may periodically crawl pages whose changefreq value is 'never'.
  - as of: 2016-11-21
  - quote: "Crawlers may periodically crawl pages marked "never" so that they can handle unexpected changes to those pages."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** The sitemaps.org sitemap protocol states that the purpose of periodically crawling pages whose changefreq value is 'never' is to handle unexpected changes to those pages.
  - as of: 2016-11-21
  - quote: "Crawlers may periodically crawl pages marked "never" so that they can handle unexpected changes to those pages."
  - source: https://www.sitemaps.org/protocol.html
- **[documented-position]** Google's developer documentation on building a sitemap states that Google ignores `<priority>` and `<changefreq>` values.
  - as of: 2026-07-08
  - quote: "Google ignores `<priority>` and `<changefreq>` values."
  - quote: "Last updated 2026-07-08 UTC."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's developer documentation on building a sitemap states that Google uses the `<lastmod>` value if it is consistently and verifiably accurate.
  - as of: 2026-07-08
  - quote: "Google uses the `<lastmod>` value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's sitemap documentation, in the version last updated 11 November 2020, told readers that Google ignores `<priority>` and `<changefreq>` values.
  - as of: 2020-11-11
  - quote: "Google ignores `<priority>` and `<changefreq>` values, so don't bother adding them."
  - quote: "Last updated 2020-11-11 UTC."
  - source: https://web.archive.org/web/20201112022544/https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
  - source: https://web.archive.org/web/20201112022544/https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
- **[documented-position]** Google's sitemap documentation, in the version last updated 11 November 2020, told readers that they should not bother adding `<priority>` and `<changefreq>` values.
  - as of: 2020-11-11
  - quote: "Google ignores `<priority>` and `<changefreq>` values, so don't bother adding them."
  - quote: "Last updated 2020-11-11 UTC."
  - source: https://web.archive.org/web/20201112022544/https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
  - source: https://web.archive.org/web/20201112022544/https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
- **[documented-position]** An archived version of Google's Webmaster Tools help page on sitemaps listed `<changefreq>` as optional.
  - as of: 2015-03-17
  - quote: "`<changefreq>` Optional Provides a hint about how frequently the page is likely to change."
  - source: https://web.archive.org/web/20150317165015/https://support.google.com/webmasters/answer/183668
- **[documented-position]** The Bing Webmaster Blog states that optional sitemap tags like changefreq and priority are ignored by Bing.
  - as of: 2025-07-31
  - quote: "Optional sitemap tags like changefreq and priority are ignored by Bing and do not influence how your content is crawled or ranked."
  - source: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search
- **[documented-position]** The Bing Webmaster Blog states that the changefreq and priority sitemap tags do not influence how content is crawled or ranked.
  - as of: 2025-07-31
  - quote: "Optional sitemap tags like changefreq and priority are ignored by Bing and do not influence how your content is crawled or ranked."
  - source: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search
- **[documented-position]** The Bing Webmaster Blog states that the lastmod field in a sitemap remains a key signal helping Bing prioritize URLs for recrawling and reindexing.
  - as of: 2025-07-31
  - quote: "The lastmod field in your sitemap remains a key signal, helping Bing prioritize URLs for recrawling and reindexing, or skip them entirely if the content hasn’t changed since the last crawl."
  - source: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search
- **[documented-position]** Yandex's webmaster documentation lists changefreq among the sitemap tags.
  - as of: 2026-08-12
  - quote: "changefreq No Frequency of page changes."
  - source: https://yandex.com/support/webmaster/en/controlling-robot/sitemap.html
- **[documented-position]** Yandex's webmaster documentation describes changefreq as the frequency of page changes.
  - as of: 2026-08-12
  - quote: "changefreq No Frequency of page changes."
  - source: https://yandex.com/support/webmaster/en/controlling-robot/sitemap.html
- **[documented-position]** Search Engine Roundtable reported that a question was asked in a video hangout to Google's John Mueller about whether changefreq (priority and change frequency in XML sitemaps) matters in XML sitemaps.
  - as of: 2015-05-08
  - quote: "Google's John Mueller was asked in a video hangout on Google+ this morning if priority and change frequency matter much in XML Sitemaps and John from Google said nope."
  - quote: "Priority and change frequency doesn’t really play that much of a role with Sitemaps anymore."
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
- **[documented-position]** Search Engine Roundtable reported that Google's John Mueller said that changefreq (priority and change frequency in XML sitemaps) doesn't really play that much of a role with Sitemaps anymore.
  - as of: 2015-05-08
  - quote: "Google's John Mueller was asked in a video hangout on Google+ this morning if priority and change frequency matter much in XML Sitemaps and John from Google said nope."
  - quote: "Priority and change frequency doesn’t really play that much of a role with Sitemaps anymore."
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html

### Practical effect (3)

- **[practical-effect]** Search Engine Roundtable quotes Google's John Mueller regarding changefreq.
  - as of: 2015-05-08
  - quote: "Google's John Mueller was asked in a video hangout on Google+ this morning if priority and change frequency matter much in XML Sitemaps and John from Google said nope."
  - quote: "So what I’d really recommend is using the timestamp."
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
- **[practical-effect]** Google's John Mueller recommends using the timestamp in sitemaps regarding changefreq.
  - as of: 2015-05-08
  - quote: "Google's John Mueller was asked in a video hangout on Google+ this morning if priority and change frequency matter much in XML Sitemaps and John from Google said nope."
  - quote: "So what I’d really recommend is using the timestamp."
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
  - source: https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
- **[practical-effect]** Changefreq set to daily for an About page that actually changes about once per year causes search engines to stop checking once they realize the content has not changed in the last dozen checks.
  - as of: 2026-04-10
  - quote: "If you tell search engines that your About page changes daily, but you only change it about once per year, they will simply stop checking when they realize the content hasn't changed the last dozen times they've checked."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/

### Disputed between sources (1)

- **[disputed-between]** Yandex's webmaster documentation states that the Yandex robot loads pages one by one, sorted by the presence and value of the priority coefficient from 0.0 to 1.0.
  - as of: 2026-08-12
  - quote: "Importance of the page. The robot loads pages one by one, sorted by the presence and value of the coefficient from 0.0 to 1.0."
  - source: https://yandex.com/support/webmaster/en/controlling-robot/sitemap.html

### Echoed without a primary source (13)

- **[echoed-claim]** Content Powered quotes John Mueller of Google as saying that priority and change frequency doesn't play that much of a role with Sitemaps anymore.
  - as of: 2026-04-10
  - quote: "We also have direct word on this subject from John Mueller of Google."
  - quote: "Priority and change frequency doesn't play that much of a role with Sitemaps anymore."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
- **[echoed-claim]** Slickplan's guide to sitemap priority and change frequency tells readers that setting realistic change frequencies is crucial because it avoids confusing search sites that do acknowledge the changefreq tag.
  - as of: 2025-09-11
  - quote: "Setting realistic change frequencies is crucial as it avoids confusing search sites that do acknowledge the changefreq tag, aiding in properly communicating page update routines."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide states that change frequency tells search engines how often a page's content updates, offering a hint for crawling prioritization.
  - as of: 2025-09-11
  - quote: "Change frequency tells search engines how often a page’s content updates, offering a hint for crawling prioritization."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of major news publications.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of weather services.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of forums.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide claims that large sites tend to have the most to gain from using the priority and changefreq tags.
  - as of: 2025-09-11
  - quote: "Large sites tend to have the most to gain from using these tags as the guidance can nudge and help search sites get pages crawled and indexed more effectively and in line with your intention."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Slickplan's guide claims that the guidance from the priority and changefreq tags can nudge search sites to get pages crawled and indexed more effectively.
  - as of: 2025-09-11
  - quote: "Large sites tend to have the most to gain from using these tags as the guidance can nudge and help search sites get pages crawled and indexed more effectively and in line with your intention."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
- **[echoed-claim]** Content Powered's article on sitemap priority and changefreq tells readers that setting changefreq too high will confuse search engines.
  - as of: 2026-04-10
  - quote: "Setting it too high will confuse search engines and may result in them searching your site too aggressively, even when there aren't any changes."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
- **[echoed-claim]** Content Powered's article on sitemap priority and changefreq tells readers that setting changefreq too high may result in search engines searching the site too aggressively even when there are no changes.
  - as of: 2026-04-10
  - quote: "Setting it too high will confuse search engines and may result in them searching your site too aggressively, even when there aren't any changes."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
- **[echoed-claim]** Setting Changefreq values too high could result in dozens of other search engines hammering the site's server.
  - as of: 2026-04-10
  - quote: "Google isn't the only search engine that checks your sitemap, so if you have your Changefreq values set too high, you could have dozens of other search engines hammering your server and slowing it down."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
- **[echoed-claim]** Setting Changefreq values too high could result in dozens of other search engines slowing down the site's server.
  - as of: 2026-04-10
  - quote: "Google isn't the only search engine that checks your sitemap, so if you have your Changefreq values set too high, you could have dozens of other search engines hammering your server and slowing it down."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
- **[echoed-claim]** Content Powered's article tells readers that changefreq is still something you should tune
  - as of: 2026-04-10
  - quote: "It's still something you should tune, but it isn't going to make or break your website."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
