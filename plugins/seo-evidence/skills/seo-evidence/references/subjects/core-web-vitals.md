# Core Web Vitals

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

On March 12 2024, Interaction to Next Paint became a stable Core Web Vital metric, replaced First Input Delay, and Chrome stated it was officially deprecating FID support; Chrome tools would no longer guarantee FID availability, and developers were told they had until September 9 2024 to transition. The current set focuses on loading, interactivity, and visual stability, with documented thresholds of LCP 2.5 seconds or less, CLS 0.1 or less and poor above 0.25, and INP 200 ms or less and poor above 500 ms; a page passes if it meets all three recommended targets at the 75th percentile, using the same thresholds for mobile and desktop. As of December 10 2025, Google states that Core Web Vitals are used by its ranking systems, but good results in Search Console or third-party tools do not guarantee top rankings, and trying for a perfect score solely for SEO may not be the best use of time.

## Claims (27)

### Documented position (22)

- **[documented-position]** The web.dev article on Largest Contentful Paint states that a good LCP value is 2.5 seconds or less.
  - as of: 2025-09-04
  - quote: "To provide a good user experience, sites should strive to have Largest Contentful Paint of 2.5 seconds or less."
  - quote: "A good LCP value is 2.5 seconds or less."
  - source: https://web.dev/articles/lcp
  - source: https://web.dev/articles/lcp
- **[documented-position]** The web.dev article on Interaction to Next Paint states that an INP below or at 200 milliseconds means a page has good responsiveness.
  - as of: 2025-09-02
  - quote: "An INP below or at 200 milliseconds means a page has good responsiveness ."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article on Interaction to Next Paint states that an INP above 500 milliseconds means a page has poor responsiveness.
  - as of: 2025-09-02
  - quote: "An INP above 500 milliseconds means a page has poor responsiveness ."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article on Interaction to Next Paint states that one highest interaction is ignored for every 50 interactions when reporting the metric.
  - as of: 2025-09-02
  - quote: "To give a better measure of the actual responsiveness for pages with a high number of interactions, we ignore one highest interaction for every 50 interactions."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article on Cumulative Layout Shift states that good CLS values are 0.1 or less.
  - as of: 2023-04-12
  - quote: "To provide a good user experience, sites should strive to have a CLS score of 0.1 or less."
  - quote: "Good CLS values are 0.1 or less."
  - source: https://web.dev/articles/cls
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev article on Cumulative Layout Shift states that poor CLS values are greater than 0.25.
  - as of: 2023-04-12
  - quote: "Good CLS values are 0.1 or less. Poor values are greater than 0.25."
  - source: https://web.dev/articles/cls
- **[documented-position]** The web.dev 'Web Vitals' article states that a page should be considered passing if it meets the recommended targets at the 75th percentile for all three of the Core Web Vitals metrics.
  - as of: 2024-10-31
  - quote: "Tools that assess Core Web Vitals compliance should consider a page passing if it meets the recommended targets at the 75th percentile for all three of the Core Web Vitals metrics."
  - source: https://web.dev/articles/vitals
- **[documented-position]** The web.dev "Web Vitals" article states that the current set of Core Web Vitals focuses on three aspects of the user experience: loading, interactivity, and visual stability.
  - as of: 2024-10-31
  - quote: "The metrics that make up Core Web Vitals will evolve over time. The current set focuses on three aspects of the user experience— loading , interactivity , and visual stability —and includes the following metrics (and their respective thresholds):"
  - source: https://web.dev/articles/vitals
- **[documented-position]** The web.dev 'Web Vitals' article states that stable Core Web Vitals metrics will not change more than once per year.
  - as of: 2024-10-31
  - quote: "Stable metrics are actively supported, and can be subject to bug fixes and definition changes. Stable Core Web Vitals metrics won't change more than once per year."
  - source: https://web.dev/articles/vitals
- **[documented-position]** The web.dev blog post about the INP launch states that INP has replaced FID as a Core Web Vital metric.
  - as of: 2024-03-12
  - quote: "Now that INP has replaced FID as a Core Web Vital metric, Chrome is officially deprecating support for FID."
  - source: https://web.dev/blog/inp-cwv-launch
- **[documented-position]** The web.dev blog post about the INP launch states that Chrome is officially deprecating support for FID.
  - as of: 2024-03-12
  - quote: "Now that INP has replaced FID as a Core Web Vital metric, Chrome is officially deprecating support for FID."
  - source: https://web.dev/blog/inp-cwv-launch
- **[documented-position]** The web.dev article 'Defining the Core Web Vitals metrics thresholds' states that a candidate good threshold is confirmed achievable only if at least 10% of origins meet it in Chrome User Experience Report data.
  - as of: 2025-05-07
  - quote: "When evaluating candidate Core Web Vitals "good" thresholds, we verify that those thresholds are achievable, based on data from the Chrome User Experience Report (CrUX). To confirm that a threshold is achievable, we require that at least 10% of origins meet the "good" threshold."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article "Defining the Core Web Vitals metrics thresholds" states that by default the worst-performing 10-30% of origins are classified as poor when no relevant research is available for defining a poor threshold.
  - as of: 2025-05-07
  - quote: "Conversely, we establish the "poor" threshold by identifying a level of performance that only a minority of origins are not meeting. Unless there is research available relevant to defining a "poor" threshold, by default the worst-performing 10-30% of origins are classified as "poor"."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article 'Defining the Core Web Vitals metrics thresholds' states that research points to 100 ms as a good Interaction to Next Paint threshold.
  - as of: 2025-05-07
  - quote: "Given this, we conclude that research points to 100 ms as a "good" Interaction to Next Paint threshold for Web Vitals. Additionally, given users reported low quality levels for delays of 300 ms or more, ideally this would be the "poor" threshold."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article "Defining the Core Web Vitals metrics thresholds" states that taking into consideration the 100 ms threshold supported by research and the achievability criteria, 200 ms is a reasonable threshold for good experiences.
  - as of: 2025-05-07
  - quote: "Taking into consideration the 100 ms threshold supported by research into the quality of experience and the achievability criteria, we conclude that 200 ms is a reasonable threshold for good experiences"
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article "Defining the Core Web Vitals metrics thresholds" states that the 75th percentile was concluded to strike a reasonable balance between covering most visits and limiting the influence of outliers.
  - as of: 2025-05-07
  - quote: "Given these goals are a bit at odds, after analysis, we concluded that the 75th percentile strikes a reasonable balance. By using the 75th percentile, we know that most visits to the site (3 of 4) experienced the target level of performance or better. Additionally, the 75th percentile value is less likely to be affected by outliers."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article 'Defining the Core Web Vitals metrics thresholds' states that the recommended Core Web Vitals thresholds are not segregated by device.
  - as of: 2025-05-07
  - quote: "However, users' expectations of a good or poor experience is not dependent on device, even if the achievability criteria is. For this reason the Core Web Vitals recommended thresholds are not segregated by device and the same threshold is used for both."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** The web.dev article 'Defining the Core Web Vitals metrics thresholds' states that the same threshold is used for mobile and desktop.
  - as of: 2025-05-07
  - quote: "However, users' expectations of a good or poor experience is not dependent on device, even if the achievability criteria is. For this reason the Core Web Vitals recommended thresholds are not segregated by device and the same threshold is used for both."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[documented-position]** Google's documentation page 'Understanding page experience in Google Search results' states that Core Web Vitals are used by Google's ranking systems.
  - as of: 2025-12-10
  - quote: "What aspects of page experience are used in ranking?"
  - quote: "Core Web Vitals are used by our ranking systems."
  - source: https://developers.google.com/search/docs/appearance/page-experience
  - source: https://developers.google.com/search/docs/appearance/page-experience
- **[documented-position]** Google's documentation page "Understanding page experience in Google Search results" states that getting good results in reports like Search Console's Core Web Vitals report or third-party tools does not guarantee that pages will rank at the top of Google Search results.
  - as of: 2025-12-10
  - quote: "Keep in mind that getting good results in reports like Search Console's Core Web Vitals report or third-party tools doesn't guarantee that your pages will rank at the top of Google Search results; there's more to great page experience than Core Web Vitals scores alone."
  - source: https://developers.google.com/search/docs/appearance/page-experience
- **[documented-position]** Google's documentation page "Understanding page experience in Google Search results" states that trying to get a perfect score just for SEO reasons may not be the best use of a site owner's time.
  - as of: 2025-12-10
  - quote: "These scores are meant to help you to improve your site for your users overall, and trying to get a perfect score just for SEO reasons may not be the best use of your time."
  - source: https://developers.google.com/search/docs/appearance/page-experience
- **[documented-position]** Google's documentation page "Understanding page experience in Google Search results" states that page experience aspects beyond Core Web Vitals do not directly help a website rank higher in search results.
  - as of: 2025-12-10
  - quote: "Beyond Core Web Vitals, other page experience aspects don't directly help your website rank higher in search results. However, they can make your website more satisfying to use, which is generally aligned with what our ranking systems seek to reward."
  - source: https://developers.google.com/search/docs/appearance/page-experience

### Measured finding (2)

- **[measured-finding]** The web.dev article "Defining the Core Web Vitals metrics thresholds" states that 23% of sites pass the 200 ms INP good threshold on mobile.
  - as of: 2025-05-07
  - quote: "It should also be noted that the 200 ms "good" threshold is also tougher for these sites, but with 23% of sites still passing this on mobile this still passes our 10% minimum pass rate criteria."
  - source: https://web.dev/articles/defining-core-web-vitals-thresholds
- **[measured-finding]** The Google Ad Manager blog post "The need for mobile speed." states that 53% of visits are likely to be abandoned if pages take longer than 3 seconds to load.
  - as of: 2016-09-08
  - quote: "53% of visits are likely to be abandoned if pages take longer than 3 seconds to load 6"
  - source: https://blog.google/products/admanager/the-need-for-mobile-speed/

### Changed on (2)

- **[changed-on]** A web.dev blog post dated March 12 2024 announced that Interaction to Next Paint had become a stable Core Web Vital metric.
  - as of: 2024-03-12
  - quote: "Today's the day! After years of work, we're finally ready to make Interaction to Next Paint (INP) a stable Core Web Vital metric. This marks a significant step forward in the way we measure interaction responsiveness, addressing many of the shortcomings of First Input Delay (FID) ."
  - quote: "Last updated 2024-03-12 UTC."
  - source: https://web.dev/blog/inp-cwv-launch
  - source: https://web.dev/blog/inp-cwv-launch
- **[changed-on]** A web.dev blog post about the INP launch states that developers had until September 9, 2024 to transition over to INP.
  - as of: 2024-03-12
  - quote: "What this means is that Chrome tools will no longer guarantee FID availability and developers will have until September 9, 2024 to transition over to INP."
  - source: https://web.dev/blog/inp-cwv-launch

### Echoed without a primary source (1)

- **[echoed-claim]** The websitespeedy.com article "Why 53% of Mobile Users Abandon Sites That Take Over 3 Seconds to Load" states that recent research by Google revealed that 53% of mobile users abandon sites that take over 3 seconds to load.
  - as of: 2025-08-21
  - quote: "The recent research by Google revealed that 53% Of Mobile Users Abandon Sites That Take Over 3 Seconds To Load."
  - quote: "TL;DR: A research by Google reveals that 53% of mobile users leave sites that take more than 3 seconds to load. This increases the bounce rate of a site and harms user experience. You can focus and boost your Core Web Vitals and optimize your site for mobile devices, as more traffic is coming from mobile devices nowadays."
  - source: https://websitespeedy.com/blog/why-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/
  - source: https://websitespeedy.com/blog/why-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/
