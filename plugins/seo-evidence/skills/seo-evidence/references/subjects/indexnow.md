# IndexNow

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

IndexNow is a free, open-source protocol for notifying participating search engines when content is added, updated, or removed, and search engines adopting it agree that submitted URLs are automatically shared with all other participating search engines. As of June 2025, Microsoft recommends IndexNow over the still-supported Bing URL Submission API, which Bing describes as a legacy option; Google said in November 2021 that it would test the protocol's potential benefits, but no later Google position is given, and a May 2025 Bing Webmaster blog post said Amazon planned to begin adopting it in mid-June. The protocol's documented rules allow up to 10,000 URLs per POST, require host ownership proof, and treat an HTTP 200 response only as receipt; use does not guarantee crawling or indexing, and every crawl counts toward the site's crawl quota. Bing Webmaster Tools asserts that timely updates or removals can drive more relevant traffic, improve rankings, and lower crawl costs, and as of August 2022 Bing reported more than 16 million sites publishing over 1.2 billion URLs per day, with IndexNow attributed to 7% of all new URLs clicked in web search results.

## Claims (28)

### Documented position (21)

- **[documented-position]** Bing Webmaster Tools' 'Why IndexNow' page describes IndexNow as a free and open-source protocol.
  - as of: 2026-08-11
  - quote: "IndexNow is a free, open-source protocol empowering website owners with unprecedented control over how quickly their content is discovered and displayed in search results—giving consumers access to the most current information at the time of search."
  - source: https://www.bing.com/webmasters/url-submission-api
- **[documented-position]** Bing Webmaster Tools' 'Why IndexNow' page describes IndexNow as empowering website owners with control over how quickly their content is discovered and displayed in search results.
  - as of: 2026-08-11
  - quote: "IndexNow is a free, open-source protocol empowering website owners with unprecedented control over how quickly their content is discovered and displayed in search results—giving consumers access to the most current information at the time of search."
  - source: https://www.bing.com/webmasters/url-submission-api
- **[documented-position]** The IndexNow.org documentation states that an IndexNow key should have a minimum of 8 hexadecimal characters.
  - as of: 2026-08-11
  - quote: "Your-key should have a minimum of 8 and a maximum of 128 hexadecimal characters."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that an IndexNow key should have a maximum of 128 hexadecimal characters.
  - as of: 2026-08-11
  - quote: "Your-key should have a minimum of 8 and a maximum of 128 hexadecimal characters."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that the IndexNow key can contain only lowercase characters (a-z), uppercase characters (A-Z), numbers (0-9), and dashes.
  - as of: 2026-08-11
  - quote: "The key can contain only the following characters: lowercase characters (a-z), uppercase characters (A-Z), numbers (0-9), and dashes (-)."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** IndexNow.org documentation states that you can submit up to 10,000 URLs per post.
  - as of: 2026-08-11
  - quote: "You can submit up to 10,000 URLs per post, mixing http and https URLs if needed."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** IndexNow.org documentation states that you can mix http and https URLs if needed.
  - as of: 2026-08-11
  - quote: "You can submit up to 10,000 URLs per post, mixing http and https URLs if needed."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** URL submission to IndexNow requires proving host ownership by hosting at least one text file within that host.
  - as of: 2026-08-11
  - quote: "To submit URLs, you must "prove" ownership of the host for which URLs are being submitted by hosting at least one text file within the host."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that it is strongly recommended to use Option 1.
  - as of: 2026-08-11
  - quote: "URLs that are not considered valid in option 2 may not be considered for indexing. It is strongly recommended that you use Option 1 and place your file key at the root directory of your web server."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that it is strongly recommended to place your file key at the root directory of your web server.
  - as of: 2026-08-11
  - quote: "URLs that are not considered valid in option 2 may not be considered for indexing. It is strongly recommended that you use Option 1 and place your file key at the root directory of your web server."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that an HTTP 200 response code only indicates that the search engine has received your URL.
  - as of: 2026-08-11
  - quote: "A successful request will return an HTTP 200 response code; if you receive a different response, verify that you don't submit too often, that the key and URL are valid and resubmit the request. The HTTP 200 response code only indicates that the search engine has received your URL."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** The IndexNow.org documentation states that search engines adopting the IndexNow protocol agree that submitted URLs will be automatically shared with all other participating search engines.
  - as of: 2026-08-11
  - quote: "Search engines adopting the IndexNow protocol agree that submitted URLs will be automatically shared with all other participating search engines."
  - source: https://www.indexnow.org/documentation
- **[documented-position]** Bing Webmaster Tools' IndexNow getting-started page documents api.indexnow.org as the host for submitting a set of URLs.
  - as of: 2026-08-11
  - quote: "Submitting a set of URL via an HTTP request"
  - quote: "POST /IndexNow HTTP/1.1"
  - quote: "Host: api.indexnow.org"
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
- **[documented-position]** Bing Webmaster Tools' IndexNow getting-started page documents that the submission of a set of URLs to api.indexnow.org uses HTTP POST request.
  - as of: 2026-08-11
  - quote: "Submitting a set of URL via an HTTP request"
  - quote: "POST /IndexNow HTTP/1.1"
  - quote: "Host: api.indexnow.org"
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
- **[documented-position]** Bing Webmaster Tools' IndexNow getting-started page states that a site should publish only URLs changing (added, updated, or deleted) since the time it starts to use IndexNow.
  - as of: 2026-08-11
  - quote: "I just started using IndexNow, should I publish URLs changed last year?"
  - quote: "No, you should publish only URLs changing (added, updated, or deleted) since the time you start to use IndexNow."
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
- **[documented-position]** Bing Webmaster Tools' IndexNow getting-started page states that using IndexNow does not guarantee that web pages will be crawled or indexed by search engines.
  - as of: 2026-08-11
  - quote: "Using IndexNow ensures that search engines are aware of your website changes. Using IndexNow does not guarantee that web pages will be crawled or indexed by search engines. It may take time for the change to reflect in search engines."
  - source: https://www.bing.com/indexnow/getstarted
- **[documented-position]** Bing Webmaster Tools' IndexNow getting-started page states that every crawl of a URL submitted via IndexNow counts towards your crawl quota.
  - as of: 2026-08-11
  - quote: "Does the URLs submitted count on my crawl quota?"
  - quote: "Yes, every crawl counts towards your crawl quota. By publishing them to INDEXNOW, you notify search engines that you care about these URLs, search engines will generally prioritize crawling these URLs versus other URLs they know."
  - source: https://www.bing.com/indexnow/getstarted
  - source: https://www.bing.com/indexnow/getstarted
- **[documented-position]** The note that recommends IndexNow on the Bing Webmaster blog's post about the Bing URL submission API states that the Bing URL submission API is still supported.
  - as of: 2025-06-30
  - quote: "Note (Updated June 2025)"
  - quote: "The Bing URL Submission API is still supported, but Microsoft now recommends using IndexNow for faster, easier indexing across multiple search engines."
  - source: https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
  - source: https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
- **[documented-position]** IndexNow's documented position is that the Bing URL Submission API is a legacy option best suited for advanced users or custom implementations where more control is required, as described in the Bing Webmaster blog's post on the Bing URL submission API.
  - as of: 2025-06-30
  - quote: "The Bing URL Submission API is a legacy option that allows for direct URL submissions to Bing. It's best suited for advanced users or custom implementations where more control is required."
  - source: https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
- **[documented-position]** The Bing Webmaster blog's February 2026 post introducing AI Performance states that IndexNow helps keep information fresh across search and AI experiences by notifying participating search engines whenever content is added, updated, or removed.
  - as of: 2026-02-10
  - quote: "IndexNow helps keep information fresh across search and AI experiences by notifying participating search engines whenever content is added, updated, or removed."
  - source: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- **[documented-position]** Google said it would be testing the potential benefits of the IndexNow protocol.
  - as of: 2021-11-09
  - quote: "According to Google:"
  - quote: "“We're encouraged by work to make web crawling more efficient, and we will be testing the potential benefits of this protocol.”"
  - source: https://www.searchenginejournal.com/google-will-be-testing-indexnow/426602/
  - source: https://www.searchenginejournal.com/google-will-be-testing-indexnow/426602/

### Measured finding (2)

- **[measured-finding]** The Bing Webmaster blog reported in August 2022 that more than 16 million web sites were publishing over 1.2 billion URLs per day to the IndexNow API.
  - as of: 2022-08-12
  - quote: "Since we enabled the IndexNow protocol in Fall 2021 , adoption of IndexNow continues to grow. Today more than 16 million web sites are publishing over 1.2 billion URLs per day to the IndexNow API."
  - source: https://blogs.bing.com/webmaster/august-2022/IndexNow-adoption-gains-momentum
- **[measured-finding]** The Bing Webmaster blog reported in August 2022 that IndexNow was attributed to 7% of all new URLs clicked in web search results in August 2022
  - as of: 2022-08-12
  - quote: "This month, IndexNow attributed to 7% of all new URLs clicked in web search results."
  - source: https://blogs.bing.com/webmaster/august-2022/IndexNow-adoption-gains-momentum

### Changed on (2)

- **[changed-on]** A note updated in June 2025 on the Bing Webmaster blog's post about the Bing URL submission API recommends IndexNow for faster, easier indexing across multiple search engines.
  - as of: 2025-06-30
  - quote: "Note (Updated June 2025)"
  - quote: "The Bing URL Submission API is still supported, but Microsoft now recommends using IndexNow for faster, easier indexing across multiple search engines."
  - source: https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
  - source: https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
- **[changed-on]** The Bing Webmaster blog's May 2025 post on IndexNow states that Amazon plans to begin adopting IndexNow in mid-June.
  - as of: 2025-05-19
  - quote: "Amazon plans to begin adopting IndexNow in mid-June, enabling its systems to more efficiently detect changes across the web—helping reduce unnecessary crawling and keeping its infrastructure aligned with the most current content available."
  - source: https://blogs.bing.com/webmaster/May-2025/IndexNow-Drives-Smarter-and-Faster-Content-Discovery

### Echoed without a primary source (3)

- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help drive more relevant traffic to your site.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help improve search engine rankings.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help lower crawl costs.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
