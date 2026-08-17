# hreflang

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Google continues to support and use hreflang tags, but as of August 24, 2022 it deprecated the Search Console International Targeting report and no longer supports Search Console country targeting. As of December 22, 2025, Google documentation states that hreflang and the HTML lang attribute are not used to detect page language, the three hreflang implementation methods are equivalent, and hreflang tags are ignored unless two pages point to each other; as of July 10, 2026, Google documentation states that for canonicalization it prefers URLs that are part of hreflang clusters. A 2017 Semrush analysis found 58% of multilingual websites had hreflang conflicts within page source code, and a 2023 Ahrefs analysis found 67% of domains using hreflang tags had at least one issue, including 56.3% with pages missing x-default; that Ahrefs analysis also states setting x-default is not required but recommended as a fallback. As of August 10, 2026, Google's Gary Illyes said hreflang alternates are not indexed in the proper sense but are mapped to the indexed canonical page.

## Claims (26)

### Documented position (12)

- **[documented-position]** Google's documentation 'Tell Google about localized versions of your page' states that Google doesn't use hreflang or the HTML lang attribute to detect the language of a page.
  - as of: 2025-12-22
  - quote: "Google doesn't use hreflang or the HTML lang attribute to detect the language of a page; instead, we use algorithms to determine the language."
  - source: https://developers.google.com/search/docs/specialty/international/localized-versions
- **[documented-position]** Google's documentation 'Tell Google about localized versions of your page' states that Google uses algorithms to determine the language of a page instead of using hreflang or the HTML lang attribute.
  - as of: 2025-12-22
  - quote: "Google doesn't use hreflang or the HTML lang attribute to detect the language of a page; instead, we use algorithms to determine the language."
  - source: https://developers.google.com/search/docs/specialty/international/localized-versions
- **[documented-position]** Google's documentation on localized versions states that the three hreflang methods of indicating language/locale versions are equivalent from Google's perspective.
  - as of: 2025-12-22
  - quote: "The three methods are equivalent from Google's perspective and you can choose the method that's the most convenient for your site. While you can use all three methods at the same time, there's no benefit in Search (in fact, it maybe be much harder to manage three implementations instead of just picking one)."
  - source: https://developers.google.com/search/docs/specialty/international/localized-versions
- **[documented-position]** Google's documentation on localized versions states that using all three hreflang methods at the same time brings no benefit in Search.
  - as of: 2025-12-22
  - quote: "The three methods are equivalent from Google's perspective and you can choose the method that's the most convenient for your site. While you can use all three methods at the same time, there's no benefit in Search (in fact, it maybe be much harder to manage three implementations instead of just picking one)."
  - source: https://developers.google.com/search/docs/specialty/international/localized-versions
- **[documented-position]** Google's documentation on localized versions states that hreflang tags will be ignored if two pages don't both point to each other.
  - as of: 2025-12-22
  - quote: "If two pages don't both point to each other, the tags will be ignored. This is so that someone on another site can't arbitrarily create a tag naming itself as an alternative version of one of your pages."
  - source: https://developers.google.com/search/docs/specialty/international/localized-versions
- **[documented-position]** Google's canonicalization documentation states that rel="canonical" annotations with hreflang, lang, media and type attributes are not used for canonicalization.
  - as of: 2026-07-10
  - quote: "rel="canonical" annotations that suggest alternate versions of a page are ignored; specifically, rel="canonical" annotations with hreflang , lang , media , and type attributes are not used for canonicalization."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **[documented-position]** For canonicalization purposes, Google prefers URLs that are part of hreflang clusters.
  - as of: 2026-07-10
  - quote: "To help with sites' localization efforts, for canonicalization purposes Google prefers URLs that are part of hreflang clusters."
  - source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **[documented-position]** Hreflang's International Targeting report has been deprecated.
  - as of: 2022-08-24
  - quote: "The International Targeting report has been deprecated."
  - quote: "Google will continue to support and use hreflang tags on your pages. However, the ability to target search results to specific countries using Search Console country targeting was determined to have little value for the ecosystem, and is no longer supported."
  - source: https://support.google.com/webmasters/answer/12474899?hl=en
  - source: https://support.google.com/webmasters/answer/12474899?hl=en
- **[documented-position]** Hreflang's targeting of search results to specific countries via Search Console country targeting is no longer supported.
  - as of: 2022-08-24
  - quote: "The International Targeting report has been deprecated."
  - quote: "Google will continue to support and use hreflang tags on your pages. However, the ability to target search results to specific countries using Search Console country targeting was determined to have little value for the ecosystem, and is no longer supported."
  - source: https://support.google.com/webmasters/answer/12474899?hl=en
  - source: https://support.google.com/webmasters/answer/12474899?hl=en
- **[documented-position]** Google's Gary Illyes said hreflang alternates become alternate URLs.
  - as of: 2026-08-10
  - quote: "Google's Gary Illyes said that hreflang alternates, hreflang URLs are not "indexed in the proper sense.""
  - quote: "hreflang alternates become such alternate URLs: they're not in fact indexed in the proper sense. While the specific URL might not be indexed, the URL is mapped to the canonical page that is indexed."
  - source: https://www.seroundtable.com/google-hreflang-urls-not-indexed-41838.html
  - source: https://www.seroundtable.com/google-hreflang-urls-not-indexed-41838.html
- **[documented-position]** According to John Mueller, hreflang is one of the most complex aspects of SEO (if not the most complex one).
  - as of: 2018-02-19
  - quote: "TBH hreflang is one of the most complex aspects of SEO (if not the most complex one). Feels as easy as a meta-tag, but it gets really hard quickly. — John ☆.o(≧▽≦)o.☆ (@JohnMu) February 19, 2018"
  - source: https://www.seroundtable.com/google-hreflang-complex-seo-25261.html
- **[documented-position]** According to John Mueller, hreflang feels as easy as a meta-tag.
  - as of: 2018-02-19
  - quote: "TBH hreflang is one of the most complex aspects of SEO (if not the most complex one). Feels as easy as a meta-tag, but it gets really hard quickly. — John ☆.o(≧▽≦)o.☆ (@JohnMu) February 19, 2018"
  - source: https://www.seroundtable.com/google-hreflang-complex-seo-25261.html

### Measured finding (11)

- **[measured-finding]** A Semrush study reports that it analyzed 20,000 websites that have multiple language versions using the SEMrush Site Audit tool.
  - as of: 2017-02-15
  - quote: "We analyzed 20,000 websites that have multiple language versions using the SEMrush Site Audit tool - a powerful site auditor that checks websites according to approximately 50 parameters."
  - source: https://www.semrush.com/blog/the-most-common-hreflang-mistakes-infographic/
- **[measured-finding]** 58% of multilingual websites have hreflang conflicts within a page source code.
  - as of: 2017-02-15
  - quote: "We detected these issues on 58% of all analyzed websites."
  - quote: "58% of multilingual websites have hreflang conflicts within a page source code"
  - source: https://www.semrush.com/blog/the-most-common-hreflang-mistakes-infographic/
  - source: https://www.semrush.com/blog/the-most-common-hreflang-mistakes-infographic/
- **[measured-finding]** A Semrush study reports that issues with hreflang values appear on 15% of multilingual websites.
  - as of: 2017-02-15
  - quote: "Issues with hreflang values appear on 15% of multilingual websites"
  - source: https://www.semrush.com/blog/the-most-common-hreflang-mistakes-infographic/
- **[measured-finding]** An Ahrefs study looked at issues on 374,756 different domains that used hreflang tags.
  - as of: 2023-08-10
  - quote: "In total, we looked at issues on 374,756 different domains that used hreflang tags. Our findings show that 67% of them have at least one issue."
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study found that 67% of the 374,756 different domains that used hreflang tags have at least one issue.
  - as of: 2023-08-10
  - quote: "In total, we looked at issues on 374,756 different domains that used hreflang tags. Our findings show that 67% of them have at least one issue."
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of domains using hreflang reports that 56.3% have pages missing x-default.
  - as of: 2023-08-10
  - quote: "56.3% have pages missing x-default"
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of domains using hreflang reports that 15.3% have pages missing reciprocal tags.
  - as of: 2023-08-10
  - quote: "15.3% have pages missing reciprocal tags"
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of hreflang issues states that setting an x-default is not required.
  - as of: 2023-08-10
  - quote: "Setting an x-default is not required. But it is recommended if you need a fallback page for users whose language settings don’t match any of your localized versions."
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of hreflang issues states that setting an x-default is recommended as a fallback page for users whose language settings do not match any localized version.
  - as of: 2023-08-10
  - quote: "Setting an x-default is not required. But it is recommended if you need a fallback page for users whose language settings don’t match any of your localized versions."
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of hreflang issues states that self-referencing hreflang tags are more like a best practice.
  - as of: 2023-08-10
  - quote: "Self-referencing hreflang tags are included in the guidelines . But they’re really more like a best practice and not actually required ."
  - source: https://ahrefs.com/blog/hreflang-study
- **[measured-finding]** An Ahrefs study of hreflang issues states that self-referencing hreflang tags are not actually required.
  - as of: 2023-08-10
  - quote: "Self-referencing hreflang tags are included in the guidelines . But they’re really more like a best practice and not actually required ."
  - source: https://ahrefs.com/blog/hreflang-study

### Practical effect (2)

- **[practical-effect]** Google's Gary Illyes said hreflang alternates are not in fact indexed in the proper sense.
  - as of: 2026-08-10
  - quote: "Google's Gary Illyes said that hreflang alternates, hreflang URLs are not "indexed in the proper sense.""
  - quote: "hreflang alternates become such alternate URLs: they're not in fact indexed in the proper sense. While the specific URL might not be indexed, the URL is mapped to the canonical page that is indexed."
  - source: https://www.seroundtable.com/google-hreflang-urls-not-indexed-41838.html
  - source: https://www.seroundtable.com/google-hreflang-urls-not-indexed-41838.html
- **[practical-effect]** According to John Mueller, hreflang gets really hard quickly.
  - as of: 2018-02-19
  - quote: "TBH hreflang is one of the most complex aspects of SEO (if not the most complex one). Feels as easy as a meta-tag, but it gets really hard quickly. — John ☆.o(≧▽≦)o.☆ (@JohnMu) February 19, 2018"
  - source: https://www.seroundtable.com/google-hreflang-complex-seo-25261.html

### Echoed without a primary source (1)

- **[echoed-claim]** An SEO 101 page published by gracker.ai states that a study by Ahrefs revealed that 67% of websites have issues with their hreflang implementation.
  - as of: 2026-08-11
  - quote: "Did you know that a study by Ahrefs revealed that 67% of websites have issues with their hreflang implementation?"
  - source: https://gracker.ai/seo-101/hreflang-implementation-challenges-solutions
