# Lighthouse

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Lighthouse is an open-source, automated tool for improving web page quality. Its performance score is a weighted average of metric scores from a log-normal distribution derived from HTTP Archive data. As of Lighthouse v6 in 2019-09-19, desktop runs use specific desktop scoring instead of mobile-based curves, and as of Lighthouse 10 in 2023-02-09, the Time to Interactive metric was removed with its weight shifted to Cumulative Layout Shift, which now accounts for 25% of the score. A perfect score of 100 is not expected, and Google does not use the X/100 Lighthouse score for search ranking; it evaluates Core Web Vitals separately.

## Claims (29)

### Documented position (19)

- **[documented-position]** Chrome for Developers' Lighthouse overview documentation describes Lighthouse as an open-source tool.
  - as of: 2025-06-02
  - quote: "Lighthouse is an open-source, automated tool to help you improve the quality of web pages."
  - source: https://developer.chrome.com/docs/lighthouse/overview
- **[documented-position]** Chrome for Developers' Lighthouse overview documentation describes Lighthouse as an automated tool.
  - as of: 2025-06-02
  - quote: "Lighthouse is an open-source, automated tool to help you improve the quality of web pages."
  - source: https://developer.chrome.com/docs/lighthouse/overview
- **[documented-position]** Chrome for Developers' Lighthouse overview documentation describes Lighthouse as a tool to help you improve the quality of web pages.
  - as of: 2025-06-02
  - quote: "Lighthouse is an open-source, automated tool to help you improve the quality of web pages."
  - source: https://developer.chrome.com/docs/lighthouse/overview
- **[documented-position]** web.dev's Web Vitals article states that tools like Lighthouse load pages in a simulated environment without a user.
  - as of: 2024-10-31
  - quote: "Note: Tools like Lighthouse that load pages in a simulated environment without a user cannot measure INP, as there is no user input. However, the Total Blocking Time (TBT) metric is lab-measurable and is a proxy for INP."
  - source: https://web.dev/articles/vitals
- **[documented-position]** web.dev's Web Vitals article states that tools like Lighthouse cannot measure INP because there is no user input.
  - as of: 2024-10-31
  - quote: "Note: Tools like Lighthouse that load pages in a simulated environment without a user cannot measure INP, as there is no user input. However, the Total Blocking Time (TBT) metric is lab-measurable and is a proxy for INP."
  - source: https://web.dev/articles/vitals
- **[documented-position]** Chrome for Developers' Lighthouse performance scoring documentation states that the Lighthouse Performance score is a weighted average of the metric scores.
  - as of: 2019-09-19
  - quote: "The Performance score is a weighted average of the metric scores."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** The Lighthouse scoring distribution is a log-normal distribution.
  - as of: 2019-09-19
  - quote: "The scoring distribution is a log-normal distribution derived from the performance metrics of real website performance data on HTTP Archive."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** The Lighthouse scoring distribution is derived from the performance metrics of real website performance data on HTTP Archive.
  - as of: 2019-09-19
  - quote: "The scoring distribution is a log-normal distribution derived from the performance metrics of real website performance data on HTTP Archive."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** Chrome for Developers' Lighthouse performance scoring documentation states that a perfect Lighthouse score of 100 is extremely challenging to achieve.
  - as of: 2019-09-19
  - quote: "To provide a good user experience, sites should strive to have a good score (90-100). A "perfect" score of 100 is extremely challenging to achieve and not expected."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** Chrome for Developers' Lighthouse performance scoring documentation states that a perfect Lighthouse score of 100 is not expected.
  - as of: 2019-09-19
  - quote: "To provide a good user experience, sites should strive to have a good score (90-100). A "perfect" score of 100 is extremely challenging to achieve and not expected."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** Chrome for Developers' Lighthouse performance scoring documentation states that a lot of the variability in the overall Performance score and metric values is not due to Lighthouse but to changes in underlying conditions.
  - as of: 2019-09-19
  - quote: "A lot of the variability in your overall Performance score and metric values is not due to Lighthouse. When your Performance score fluctuates it's usually because of changes in underlying conditions."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** The Lighthouse 10 announcement on the Chrome for Developers blog states that Cumulative Layout Shift will now account for 25% of the overall performance score.
  - as of: 2023-02-09
  - quote: "The venerable Time To Interactive (TTI) metric is being removed in Lighthouse 10, concluding the deprecation process started in Lighthouse 8. TTI's 10% score weight is shifting to Cumulative Layout Shift (CLS), which will now account for 25% of the overall performance score."
  - source: https://developer.chrome.com/blog/lighthouse-10-0
- **[documented-position]** All Lighthouse score curves prior to v6 were based on mobile performance data.
  - as of: 2019-09-19
  - quote: "Prior to Lighthouse v6, all score curves were based on mobile performance data, however a desktop Lighthouse run would use that. In practice, this led to artificially inflated desktop scores. Lighthouse v6 fixed this bug by using specific desktop scoring."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[documented-position]** Lighthouse's Agentic Browsing category does not have a weighted average score from 0 to 100.
  - as of: 2026-05-05
  - quote: "Unlike other Lighthouse categories, the Agentic Browsing category does not have a weighted average score from 0 to 100. Because the standards for the agentic web are still emerging, the current focus is to gather data and provide actionable signals rather than a definitive ranking."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- **[documented-position]** Other Lighthouse categories have a weighted average score from 0 to 100.
  - as of: 2026-05-05
  - quote: "Unlike other Lighthouse categories, the Agentic Browsing category does not have a weighted average score from 0 to 100. Because the standards for the agentic web are still emerging, the current focus is to gather data and provide actionable signals rather than a definitive ranking."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- **[documented-position]** Chrome for Developers' Lighthouse agentic browsing scoring documentation states that the Agentic Browsing category is experimental.
  - as of: 2026-05-05
  - quote: "Note: The Agentic Browsing category and WebMCP support are experimental and based on proposed standards. Testing this category requires Chrome 150 or later, and WebMCP audits require registering for the WebMCP origin trial."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- **[documented-position]** Chrome for Developers' Lighthouse agentic browsing scoring documentation states that WebMCP support is experimental.
  - as of: 2026-05-05
  - quote: "Note: The Agentic Browsing category and WebMCP support are experimental and based on proposed standards. Testing this category requires Chrome 150 or later, and WebMCP audits require registering for the WebMCP origin trial."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- **[documented-position]** Chrome for Developers' Lighthouse agentic browsing scoring documentation states that testing the Agentic Browsing category requires Chrome 150 or later.
  - as of: 2026-05-05
  - quote: "Note: The Agentic Browsing category and WebMCP support are experimental and based on proposed standards. Testing this category requires Chrome 150 or later, and WebMCP audits require registering for the WebMCP origin trial."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- **[documented-position]** Google Search Central's page experience documentation states that trying to get a perfect Lighthouse score just for SEO reasons may not be the best use of your time.
  - as of: 2025-12-10
  - quote: "These scores are meant to help you to improve your site for your users overall, and trying to get a perfect score just for SEO reasons may not be the best use of your time."
  - source: https://developers.google.com/search/docs/appearance/page-experience

### Measured finding (4)

- **[measured-finding]** The Lighthouse 10 announcement on the Chrome for Developers blog reports an analysis of 13 million page loads in the latest HTTP Archive run.
  - as of: 2023-02-09
  - quote: "In an analysis of 13 million page loads in the latest HTTP Archive run, 90% of those pages would see an improvement in their Lighthouse performance score, with 50% of them seeing a performance improvement of more than 5 points."
  - source: https://developer.chrome.com/blog/lighthouse-10-0
- **[measured-finding]** The analysis reported by the Lighthouse 10 announcement on the Chrome for Developers blog states that 90% of the 13 million page loads would see an improvement in their Lighthouse performance score.
  - as of: 2023-02-09
  - quote: "In an analysis of 13 million page loads in the latest HTTP Archive run, 90% of those pages would see an improvement in their Lighthouse performance score, with 50% of them seeing a performance improvement of more than 5 points."
  - source: https://developer.chrome.com/blog/lighthouse-10-0
- **[measured-finding]** Lighthouse's 'Milliseconds make millions' case study states that the research team studied 37 leading European and American brand sites.
  - as of: 2020-06-24
  - quote: "The research team studied 37 leading European and American brand sites, collecting data on over 30 million user sessions."
  - source: https://web.dev/case-studies/milliseconds-make-millions
- **[measured-finding]** Lighthouse's 'Milliseconds make millions' case study states that the research team collected data on over 30 million user sessions.
  - as of: 2020-06-24
  - quote: "The research team studied 37 leading European and American brand sites, collecting data on over 30 million user sessions."
  - source: https://web.dev/case-studies/milliseconds-make-millions

### Practical effect (2)

- **[practical-effect]** Search Engine Journal reports that Google's John Mueller wrote that Google does not use the X/100 Lighthouse score for search.
  - as of: 2021-10-29
  - quote: "Google's John Mueller responded to one such question in the r/SEO forum on Reddit this week."
  - quote: "Google doesn't use the X/100 lighthouse score for search, we use the core web vitals separately (lcp, cls, fid). I think you can get those from Lighthouse too, but there are lots of other tools that also show them."
  - source: https://www.searchenginejournal.com/do-google-lighthouse-scores-affect-seo/425347/
  - source: https://www.searchenginejournal.com/do-google-lighthouse-scores-affect-seo/425347/
- **[practical-effect]** Search Engine Journal reports that Google's John Mueller wrote that Google uses the Core Web Vitals separately from the X/100 Lighthouse score.
  - as of: 2021-10-29
  - quote: "Google's John Mueller responded to one such question in the r/SEO forum on Reddit this week."
  - quote: "Google doesn't use the X/100 lighthouse score for search, we use the core web vitals separately (lcp, cls, fid). I think you can get those from Lighthouse too, but there are lots of other tools that also show them."
  - source: https://www.searchenginejournal.com/do-google-lighthouse-scores-affect-seo/425347/
  - source: https://www.searchenginejournal.com/do-google-lighthouse-scores-affect-seo/425347/

### Changed on (4)

- **[changed-on]** The Lighthouse 10 announcement on the Chrome for Developers blog states that the Time To Interactive metric is being removed in Lighthouse 10.
  - as of: 2023-02-09
  - quote: "The venerable Time To Interactive (TTI) metric is being removed in Lighthouse 10, concluding the deprecation process started in Lighthouse 8. TTI's 10% score weight is shifting to Cumulative Layout Shift (CLS), which will now account for 25% of the overall performance score."
  - source: https://developer.chrome.com/blog/lighthouse-10-0
- **[changed-on]** The Lighthouse 10 announcement on the Chrome for Developers blog states that the 10% score weight of the Time To Interactive metric is shifting to Cumulative Layout Shift.
  - as of: 2023-02-09
  - quote: "The venerable Time To Interactive (TTI) metric is being removed in Lighthouse 10, concluding the deprecation process started in Lighthouse 8. TTI's 10% score weight is shifting to Cumulative Layout Shift (CLS), which will now account for 25% of the overall performance score."
  - source: https://developer.chrome.com/blog/lighthouse-10-0
- **[changed-on]** Mobile-based score curves before Lighthouse v6 artificially inflated desktop scores.
  - as of: 2019-09-19
  - quote: "Prior to Lighthouse v6, all score curves were based on mobile performance data, however a desktop Lighthouse run would use that. In practice, this led to artificially inflated desktop scores. Lighthouse v6 fixed this bug by using specific desktop scoring."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- **[changed-on]** Lighthouse v6 fixed this by using specific desktop scoring.
  - as of: 2019-09-19
  - quote: "Prior to Lighthouse v6, all score curves were based on mobile performance data, however a desktop Lighthouse run would use that. In practice, this led to artificially inflated desktop scores. Lighthouse v6 fixed this bug by using specific desktop scoring."
  - source: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
