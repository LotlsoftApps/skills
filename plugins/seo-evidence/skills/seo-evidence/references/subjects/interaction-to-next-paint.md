# Interaction to Next Paint (INP)

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Interaction to Next Paint became a stable Core Web Vital on March 12, 2024, replacing First Input Delay; Chrome deprecated support for First Input Delay and gave developers until September 9, 2024 to transition. As of September 2, 2025, web.dev states that an INP at or below 200 milliseconds means good responsiveness, above 500 milliseconds means poor responsiveness, and above 200 milliseconds and at or below 500 milliseconds means needs improvement, measured at the 75th percentile of field page loads segmented across mobile and desktop. INP calculation ignores one highest interaction for every 50 interactions, and the final value is the longest interaction observed after ignoring outliers; hovering, zooming, and scrolling are not observed, and a page can return no INP value. A seobeni.com article dated June 4, 2026 asserts that Core Web Vitals act as a tiebreaker between pages otherwise equal in relevance and authority, not a multiplier that overrides content quality.

## Claims (23)

### Documented position (18)

- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that INP is a stable Core Web Vital metric.
  - as of: 2025-09-02
  - quote: "Interaction to Next Paint (INP) is a stable Core Web Vital metric that assesses responsiveness using data from the Event Timing API."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that INP assesses responsiveness using data from the Event Timing API.
  - as of: 2025-09-02
  - quote: "Interaction to Next Paint (INP) is a stable Core Web Vital metric that assesses responsiveness using data from the Event Timing API."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that an INP below or at 200 milliseconds means a page has good responsiveness.
  - as of: 2025-09-02
  - quote: "An INP below or at 200 milliseconds means a page has good responsiveness."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that an INP above 500 milliseconds means a page has poor responsiveness.
  - as of: 2025-09-02
  - quote: "An INP above 500 milliseconds means a page has poor responsiveness."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article 'Interaction to Next Paint (INP)' states that an INP above 200 milliseconds and below or at 500 milliseconds means a page's responsiveness needs improvement.
  - as of: 2025-09-02
  - quote: "An INP above 200 milliseconds and below or at 500 milliseconds means a page's responsiveness needs improvement."
  - source: https://web.dev/articles/inp
- **[documented-position]** Interaction to Next Paint (INP) has a documented position that its good threshold is measured at the 75th percentile of page loads recorded in the field, segmented across mobile and desktop devices.
  - as of: 2025-09-02
  - quote: "To ensure you're delivering user experiences with good responsiveness, a good threshold to measure is the 75th percentile of page loads recorded in the field, segmented across mobile and desktop devices:"
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that INP calculation ignores one highest interaction for every 50 interactions.
  - as of: 2025-09-02
  - quote: "To give a better measure of the actual responsiveness for pages with a high number of interactions, we ignore one highest interaction for every 50 interactions."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that the final INP value for a page is the longest interaction observed.
  - as of: 2025-09-02
  - quote: "The final INP value is the longest interaction observed, ignoring outliers."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that the final INP value for a page ignores outliers.
  - as of: 2025-09-02
  - quote: "The final INP value is the longest interaction observed, ignoring outliers."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that hovering, zooming, and scrolling are not observed for the purposes of INP.
  - as of: 2025-09-02
  - quote: "Users may also interact with the page in other ways, like hovering, zooming, or scrolling. These interactions are not observed for the purposes of INP."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that measuring INP in JavaScript requires taking the 98th percentile across all interactions on page unload.
  - as of: 2025-09-02
  - quote: "To measure INP in JavaScript, you need to measure event timings for all interactions, and then take the 98th percentile across all these interactions on page unload."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that event entries below 104 milliseconds don't report by default using performance observers.
  - as of: 2025-09-02
  - quote: "event entries below 104 milliseconds don't report by default using performance observers."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that First Input Delay only measured the input delay of the first interaction on a page.
  - as of: 2025-09-02
  - quote: "While both are responsiveness metrics, FID only measured the input delay of the first interaction on a page."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article 'Interaction to Next Paint (INP)' states that it is possible for a page to return no INP value.
  - as of: 2025-09-02
  - quote: "It's possible for a page to return no INP value."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that the Event Timing API does not report event entries for interactions occurring within iframes.
  - as of: 2025-09-02
  - quote: "The API does not report event entries for interactions that occur within iframes but the metric does as they are part of the user experience of the page."
  - source: https://web.dev/articles/inp
- **[documented-position]** The web.dev article "Interaction to Next Paint (INP)" states that the INP metric reports event entries for interactions occurring within iframes.
  - as of: 2025-09-02
  - quote: "The API does not report event entries for interactions that occur within iframes but the metric does as they are part of the user experience of the page."
  - source: https://web.dev/articles/inp
- **[documented-position]** A web.dev blog post announced that Interaction to Next Paint is now a stable Core Web Vital metric.
  - as of: 2024-03-12
  - quote: "Interaction to Next Paint is now a stable Core Web Vital metric, replacing First Input Delay."
  - source: https://web.dev/blog/inp-cwv-launch
- **[documented-position]** A web.dev blog post announced that Interaction to Next Paint is replacing First Input Delay.
  - as of: 2024-03-12
  - quote: "Interaction to Next Paint is now a stable Core Web Vital metric, replacing First Input Delay."
  - source: https://web.dev/blog/inp-cwv-launch

### Measured finding (1)

- **[measured-finding]** The web.dev article "Interaction to Next Paint (INP)" states that Chrome usage data shows 90% of a user's time on a page is spent after it loads.
  - as of: 2025-09-02
  - quote: "Chrome usage data shows that 90% of a user's time on a page is spent after it loads"
  - source: https://web.dev/articles/inp

### Changed on (2)

- **[changed-on]** A web.dev blog post stated that developers would have until September 9, 2024 to transition over to INP.
  - as of: 2024-03-12
  - quote: "Now that INP has replaced FID as a Core Web Vital metric, Chrome is officially deprecating support for FID. What this means is that Chrome tools will no longer guarantee FID availability and developers will have until September 9, 2024 to transition over to INP."
  - source: https://web.dev/blog/inp-cwv-launch
- **[changed-on]** A web.dev blog post stated that Chrome was officially deprecating support for First Input Delay.
  - as of: 2024-03-12
  - quote: "Now that INP has replaced FID as a Core Web Vital metric, Chrome is officially deprecating support for FID. What this means is that Chrome tools will no longer guarantee FID availability and developers will have until September 9, 2024 to transition over to INP."
  - source: https://web.dev/blog/inp-cwv-launch

### Echoed without a primary source (2)

- **[echoed-claim]** The seobeni.com article asserts, regarding Interaction to Next Paint (INP), that Core Web Vitals act as a tiebreaker between pages that are otherwise equal in relevance and authority.
  - as of: 2026-06-04
  - quote: "Core Web Vitals are a confirmed Google ranking signal that measure three dimensions of page experience: loading speed (LCP), interactivity (INP), and visual stability (CLS). They act as a tiebreaker between pages that are otherwise equal in relevance and authority — not a multiplier that overrides content quality."
  - source: https://seobeni.com/blog/core-web-vitals-rankings/
- **[echoed-claim]** The seobeni.com article asserts, regarding Interaction to Next Paint (INP), that Core Web Vitals are not a multiplier that overrides content quality.
  - as of: 2026-06-04
  - quote: "Core Web Vitals are a confirmed Google ranking signal that measure three dimensions of page experience: loading speed (LCP), interactivity (INP), and visual stability (CLS). They act as a tiebreaker between pages that are otherwise equal in relevance and authority — not a multiplier that overrides content quality."
  - source: https://seobeni.com/blog/core-web-vitals-rankings/
