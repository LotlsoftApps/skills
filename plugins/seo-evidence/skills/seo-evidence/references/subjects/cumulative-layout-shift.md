# Cumulative Layout Shift

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Cumulative Layout Shift is the largest burst of layout shift scores for unexpected layout shifts over the entire page lifecycle, where the burst is the session window with the maximum cumulative score; layout shifts within 500 milliseconds of user input can be excluded. As of 2023, web.dev defines good CLS as 0.1 or less and poor as greater than 0.25, measured at the 75th percentile of page loads segmented across mobile and desktop, and the 0.1 threshold was chosen over 0.05 as a better balance between experience quality and achievability. In 2021 Chrome changed the metric to a maximum session window with a 1 second gap capped at 5 seconds, which caps a page's CLS and did not make any page's score worse; the analysis reported that 55% of origins would see no change at the 75th percentile and about 3% would improve to good. By 2025, 72% of desktop pages and 81% of mobile pages achieved a good CLS score, with desktop up from 62% in 2021.

## Claims (31)

### Documented position (16)

- **[documented-position]** The web.dev Cumulative Layout Shift article states that good CLS values are 0.1 or less.
  - as of: 2023-04-12
  - quote: "Good CLS values are 0.1 or less. Poor values are greater than 0.25."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article states that poor CLS values are greater than 0.25.
  - as of: 2023-04-12
  - quote: "Good CLS values are 0.1 or less. Poor values are greater than 0.25."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article states that a good threshold at which to measure CLS is the 75th percentile of page loads, segmented across mobile and desktop devices.
  - as of: 2023-04-12
  - quote: "To provide a good user experience, sites should strive to have a CLS score of 0.1 or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article states that CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifecycle of a page.
  - as of: 2023-04-12
  - quote: "CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifecycle of a page."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article states that the largest burst is the session window with the maximum cumulative score of all layout shifts within that window.
  - as of: 2023-04-12
  - quote: "The largest burst is the session window with the maximum cumulative score of all layout shifts within that window."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article states that layout shifts occurring within 500 milliseconds of user input have the hadRecentInput flag set so they can be excluded from calculations.
  - as of: 2023-04-12
  - quote: "Layout shifts that occur within 500 milliseconds of user input will have the hadRecentInput flag set, so they can be excluded from calculations."
  - source: https://web.dev/articles/cls
- **[documented-position]** The finalised change to Cumulative Layout Shift is a maximum session window with a 1 second gap, capped at 5 seconds.
  - as of: 2021-04-07
  - quote: "we've finalized the change we plan to make to the metric: maximum session window with 1 second gap, capped at 5 seconds"
  - quote: "Evolving the CLS metric"
  - source: https://web.dev/blog/evolving-cls
  - source: https://web.dev/blog/evolving-cls
- **[documented-position]** The web.dev Cumulative Layout Shift article notes that the layout shift score was initially calculated based only on impact fraction.
  - as of: 2023-04-12
  - quote: "Note: Initially, the layout shift score was calculated based only on impact fraction . The distance fraction was introduced to avoid overly penalizing cases where large elements shift by a small amount."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev Cumulative Layout Shift article notes that the distance fraction was introduced to avoid overly penalizing cases where large elements shift by a small amount.
  - as of: 2023-04-12
  - quote: "Note: Initially, the layout shift score was calculated based only on impact fraction . The distance fraction was introduced to avoid overly penalizing cases where large elements shift by a small amount."
  - source: https://web.dev/articles/cls
- **[documented-position]** Cumulative Layout Shift's candidate metric options were implemented in Chrome, according to the web.dev post 'Evolving the CLS metric'.
  - as of: 2021-04-07
  - quote: "We also implemented the top options in Chrome and did a large-scale analysis of the metrics over millions of web pages."
  - source: https://web.dev/blog/evolving-cls
- **[documented-position]** The web.dev post "Evolving the CLS metric" states that no page will have a worse Cumulative Layout Shift score as a result of the session-window change.
  - as of: 2021-04-07
  - quote: "Since this update caps the CLS of a page, no page will have a worse score as a result of this change."
  - source: https://web.dev/blog/evolving-cls
- **[documented-position]** The web.dev post "Evolving the CLS metric" states that the session-window change caps the Cumulative Layout Shift (CLS) of a page.
  - as of: 2021-04-07
  - quote: "Since this update caps the CLS of a page, no page will have a worse score as a result of this change."
  - source: https://web.dev/blog/evolving-cls
- **[documented-position]** The web.dev article "How the Core Web Vitals metrics thresholds were defined" states that Cumulative Layout Shift (CLS) is new.
  - as of: 2020-05-21
  - quote: "Cumulative Layout Shift (CLS) is a new metric that measures how much the visible content of a page shifts around. Given CLS is new, we are not aware of research that can directly inform the thresholds for this metric."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article "How the Core Web Vitals metrics thresholds were defined" states that its authors are not aware of research that can directly inform the thresholds for Cumulative Layout Shift (CLS).
  - as of: 2020-05-21
  - quote: "Cumulative Layout Shift (CLS) is a new metric that measures how much the visible content of a page shifts around. Given CLS is new, we are not aware of research that can directly inform the thresholds for this metric."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article on how the Core Web Vitals thresholds were defined states that the 0.1 Cumulative Layout Shift 'good' threshold was chosen over the 0.05 threshold.
  - as of: 2020-05-21
  - quote: "Thus, we conclude that, while many origins meet the 0.05 threshold, the slightly less stringent CLS threshold of 0.1 strikes a better balance between quality of experience and achievability."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article on how the Core Web Vitals thresholds were defined states that the 0.1 Cumulative Layout Shift threshold strikes a better balance between quality of experience and achievability than the 0.05 threshold.
  - as of: 2020-05-21
  - quote: "Thus, we conclude that, while many origins meet the 0.05 threshold, the slightly less stringent CLS threshold of 0.1 strikes a better balance between quality of experience and achievability."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds

### Measured finding (12)

- **[measured-finding]** Cumulative Layout Shift's candidate metric options were analysed at large scale over millions of web pages, according to the web.dev post 'Evolving the CLS metric'.
  - as of: 2021-04-07
  - quote: "We also implemented the top options in Chrome and did a large-scale analysis of the metrics over millions of web pages."
  - source: https://web.dev/blog/evolving-cls
- **[measured-finding]** The web.dev post 'Evolving the CLS metric' reports that 55% of origins would see no change in Cumulative Layout Shift at all at the 75th percentile as a result of the session-window change.
  - as of: 2021-04-07
  - quote: "And based on our analysis, 55% of origins will not see a change in CLS at all at the 75th percentile"
  - source: https://web.dev/blog/evolving-cls
- **[measured-finding]** The web.dev post 'Evolving the CLS metric' reports that about 3% of origins would see their Cumulative Layout Shift (CLS) scores improve from a 'needs improvement' or 'poor' rating to a 'good' rating as a result of the session-window change.
  - as of: 2021-04-07
  - quote: "Most will only see a slight improvement, but about 3% will see their scores improve from having a "needs improvement" or "poor" rating to having a "good" rating."
  - source: https://web.dev/blog/evolving-cls
- **[measured-finding]** The web.dev article on how the Core Web Vitals thresholds were defined reports that in internal testing, levels of shift from 0.15 and higher were consistently perceived as disruptive.
  - as of: 2020-05-21
  - quote: "In our internal testing, we found that levels of shift from 0.15 and higher were consistently perceived as disruptive, while shifts of 0.1 and lower were noticeable but not excessively disruptive."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** The web.dev article on how the Core Web Vitals thresholds were defined reports that in internal testing, shifts of 0.1 and lower were noticeable but not excessively disruptive.
  - as of: 2020-05-21
  - quote: "In our internal testing, we found that levels of shift from 0.15 and higher were consistently perceived as disruptive, while shifts of 0.1 and lower were noticeable but not excessively disruptive."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** Cumulative Layout Shift is reported by the web.dev article on how the Core Web Vitals thresholds were defined, based on CrUX data, to be 0.05 or lower for nearly 50% of origins.
  - as of: 2020-04
  - quote: "Based on CrUX data, we can see that nearly 50% of origins have CLS of 0.05 or lower."
  - quote: "% of CrUX origins classified as "good" for candidate CLS thresholds as of April 2020"
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** The web.dev article on how the Core Web Vitals thresholds were defined reports that at a 0.25 threshold for Cumulative Layout Shift, roughly 20% of phone origins would be classified as 'poor'.
  - as of: 2020-04
  - quote: "For a 0.25 threshold, roughly 20% of phone origins, and 18% of desktop origins, would be classified as "poor"."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** The web.dev article on how the Core Web Vitals thresholds were defined reports that at a 0.25 threshold for Cumulative Layout Shift, roughly 18% of desktop origins would be classified as 'poor'.
  - as of: 2020-04
  - quote: "For a 0.25 threshold, roughly 20% of phone origins, and 18% of desktop origins, would be classified as "poor"."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** The Web Almanac 2025 performance chapter reports that 72% of desktop pages achieve a "good" Cumulative Layout Shift score.
  - as of: 2025-07
  - quote: "In 2025, 72% of desktop pages and 81% of mobile pages achieve a "good" Cumulative Layout Shift (CLS) score."
  - quote: "Performance | 2025 | The Web Almanac by HTTP Archive"
  - source: https://almanac.httparchive.org/en/2025/performance
  - source: https://almanac.httparchive.org/en/2025/performance
- **[measured-finding]** The Web Almanac 2025 performance chapter reports that 81% of mobile pages achieve a "good" Cumulative Layout Shift score.
  - as of: 2025-07
  - quote: "In 2025, 72% of desktop pages and 81% of mobile pages achieve a "good" Cumulative Layout Shift (CLS) score."
  - quote: "Performance | 2025 | The Web Almanac by HTTP Archive"
  - source: https://almanac.httparchive.org/en/2025/performance
  - source: https://almanac.httparchive.org/en/2025/performance
- **[measured-finding]** The Web Almanac 2025 performance chapter reports that the share of mobile pages with a good Cumulative Layout Shift (CLS) score reached 81% over the period from 2021 to 2025.
  - as of: 2025-07
  - quote: "Desktop CLS improved gradually from 62% in 2021 to 72% in 2025, while mobile saw stronger gains, reaching 81% over the same period."
  - source: https://almanac.httparchive.org/en/2025/performance
- **[measured-finding]** The Web Almanac 2025 performance chapter reports that on mobile, 62% of pages fail to set dimensions on at least one image.
  - as of: 2025-07
  - quote: "On mobile, 62% of pages fail to set dimensions on at least one image, an improvement from 66% in 2024, indicating gradual adoption of CLS friendly image practices."
  - source: https://almanac.httparchive.org/en/2025/performance

### Changed on (3)

- **[changed-on]** Chrome's Cumulative Layout Shift changelog lists 'Cumulative Layout Shift uses max session window' as a metric definition improvement in Chrome 91.
  - as of: 2021
  - quote: "Chrome 91 Metric definition improvement: Cumulative Layout Shift uses max session window"
  - quote: "Chrome Speed - Cumulative Layout Shift Changelog"
  - source: https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/cls.md
  - source: https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/cls.md
- **[changed-on]** The Web Almanac 2025 performance chapter reports that the share of desktop pages with a good Cumulative Layout Shift (CLS) score rose from 62% in 2021 to 72% in 2025.
  - as of: 2025-07
  - quote: "Desktop CLS improved gradually from 62% in 2021 to 72% in 2025, while mobile saw stronger gains, reaching 81% over the same period."
  - source: https://almanac.httparchive.org/en/2025/performance
- **[changed-on]** The Web Almanac 2025 performance chapter reports that the 62% figure for mobile pages failing to set dimensions on at least one image is an improvement from 66% in 2024.
  - as of: 2025-07
  - quote: "On mobile, 62% of pages fail to set dimensions on at least one image, an improvement from 66% in 2024, indicating gradual adoption of CLS friendly image practices."
  - source: https://almanac.httparchive.org/en/2025/performance
