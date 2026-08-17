# sitemap lastmod

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Google uses the sitemap `<lastmod>` element as a signal for scheduling crawls to previously discovered URLs, and its documentation as of 2026-07-08 says Google uses the value if it is consistently and verifiably accurate. The signal is treated as binary, so incorrect lastmod dates risk being ignored completely; on 16 July 2026 Gary Illyes said a site is better off not using lastmod dates if those dates are wrong. The value should reflect the last significant update, not trivial changes such as sidebar, footer, or copyright date updates, and it is fine to omit lastmod for pages whose last modification date cannot be easily determined.

## Claims (20)

### Documented position (12)

- **[documented-position]** Google's "Build and submit a sitemap" documentation states that Google uses the sitemap `<lastmod>` value if it is consistently and verifiably accurate.
  - as of: 2026-07-08
  - quote: "Google uses the `<lastmod>` value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's "Build and submit a sitemap" documentation states that Google ignores the `<priority>` and `<changefreq>` values in XML sitemaps.
  - as of: 2026-07-08
  - quote: "Google ignores `<priority>` and `<changefreq>` values."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's "Build and submit a sitemap" documentation states that the `<lastmod>` value should reflect the date and time of the last significant update to the page.
  - as of: 2026-07-08
  - quote: "The `<lastmod>` value should reflect the date and time of the last significant update to the page. For example, an update to the main content, the structured data, or links on the page is generally considered significant, however an update to the copyright date is not."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's "Build and submit a sitemap" documentation states that an update to the copyright date is not significant.
  - as of: 2026-07-08
  - quote: "The `<lastmod>` value should reflect the date and time of the last significant update to the page. For example, an update to the main content, the structured data, or links on the page is generally considered significant, however an update to the copyright date is not."
  - source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[documented-position]** Google's 'Optimize your crawl budget' documentation recommends including the `<lastmod>` tag if a site includes updated content.
  - as of: 2026-07-22
  - quote: "If your site includes updated content, we recommend including the `<lastmod>` tag."
  - quote: "Optimize your crawl budget"
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
  - source: https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[documented-position]** Google's Search Central blog post 'Sitemaps ping endpoint is going away' states that if a site's lastmod element does not consistently match reality, Google will eventually stop believing the site about the last modified date of its pages.
  - as of: 2023-06-26
  - quote: "it needs to consistently match reality: if your page changed 7 years ago, but you're telling us in the lastmod element that it changed yesterday, eventually we're not going to believe you anymore when it comes to the last modified date of your pages"
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that Google uses the sitemap lastmod element as a signal for scheduling crawls to URLs it previously discovered.
  - as of: 2023-06-26
  - quote: "nowadays lastmod is indeed useful in many cases and we're using it as a signal for scheduling crawls to URLs that we previously discovered"
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that a site can use a lastmod element for all the pages in its sitemap.
  - as of: 2023-06-26
  - quote: "You can use a lastmod element for all the pages in your sitemap, or just the ones you're confident about."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that a site can use a lastmod element for just the pages it is confident about.
  - as of: 2023-06-26
  - quote: "You can use a lastmod element for all the pages in your sitemap, or just the ones you're confident about."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that where site software cannot easily tell the last modification date of a page, it is fine to leave out lastmod for those pages.
  - as of: 2023-06-26
  - quote: "some site software may not be able to easily tell the last modification date of the homepage or a category page because it just aggregates the other pages on the site. In these cases it's fine to leave out lastmod for those pages."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that when Google says 'last modification' in the context of sitemap lastmod it means 'last significant modification'.
  - as of: 2023-06-26
  - quote: "And when we say "last modification", we actually mean "last significant modification". If your CMS changed an insignificant piece of text in the sidebar or footer, you don't have to update the lastmod value for that page."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[documented-position]** Google's Search Central blog states that an insignificant change to sidebar or footer text does not require updating the lastmod value.
  - as of: 2023-06-26
  - quote: "And when we say "last modification", we actually mean "last significant modification". If your CMS changed an insignificant piece of text in the sidebar or footer, you don't have to update the lastmod value for that page."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping

### Measured finding (2)

- **[measured-finding]** Google's Search Central blog states that in the case of Google Search, the vast majority of unauthenticated sitemap submissions lead to spam.
  - as of: 2023-06-26
  - quote: "Our internal studies-and also other search engines such as Bing -tell us that at this point these unauthenticated sitemap submissions are not very useful. In fact, in the case of Google Search, the vast majority of the submissions lead to spam."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[measured-finding]** Google's Search Central blog states that, based on Google's internal studies, the sitemap priority element generally doesn't accurately reflect the actual priority of a page relative to other pages on a site.
  - as of: 2023-06-26
  - quote: "The priority element is a heavily subjective field and based on our internal studies, it generally doesn't accurately reflect the actual priority of a page relative to other pages on a site."
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping

### Practical effect (2)

- **[practical-effect]** The Bluesky post at bsky.app/profile/methode.bsky.social states that a site is probably better off without the lastmods.
  - as of: 2026-07-16
  - quote: "probably better off without the lastmods. at least you save a few bytes"
  - source: https://bsky.app/profile/methode.bsky.social/post/3mqqrdfwyu22h
- **[practical-effect]** The Bluesky post at bsky.app/profile/methode.bsky.social states that leaving out lastmods at least saves a few bytes.
  - as of: 2026-07-16
  - quote: "probably better off without the lastmods. at least you save a few bytes"
  - source: https://bsky.app/profile/methode.bsky.social/post/3mqqrdfwyu22h

### Changed on (2)

- **[changed-on]** Google announced on 26 June 2023 that it was deprecating its support for the sitemaps ping endpoint.
  - as of: 2023-06-26
  - quote: "we're deprecating our support for sitemaps ping and the endpoint will stop functioning in 6 months"
  - quote: "Monday, June 26, 2023"
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- **[changed-on]** Google announced on 26 June 2023 that the sitemaps ping endpoint would stop functioning in 6 months.
  - as of: 2023-06-26
  - quote: "we're deprecating our support for sitemaps ping and the endpoint will stop functioning in 6 months"
  - quote: "Monday, June 26, 2023"
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
  - source: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping

### Echoed without a primary source (2)

- **[echoed-claim]** Search Engine Roundtable reported on 16 July 2026 that Gary Illyes of Google said on Bluesky that a site is better off not using a lastmod date in its XML sitemap if those dates are wrong.
  - as of: 2026-07-16
  - quote: "Gary Illyes from Google said that you are better off not using a lastmod date in your XML Sitemap if those dates are wrong. He said on Bluesky , "probably better off without the lastmods. at least you save a few bytes.""
  - quote: "Jul 16, 2026"
  - source: https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
  - source: https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
- **[echoed-claim]** Search Engine Journal reported that Google treats the sitemap lastmod signal as binary, meaning the signal is either trusted or not.
  - as of: 2024-06-11
  - quote: "Google treats lastmod as binary - trusted or not."
  - quote: "Incorrect lastmod dates risk the signal being ignored completely."
  - quote: "June 11, 2024"
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
