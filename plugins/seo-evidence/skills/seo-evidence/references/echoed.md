# Commonly repeated ideas

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

142 claims across 33 subjects are established as REPETITIONS: a named publication said it, and the quote proves that it said it. No primary source travelled with the quote.

**Two things this is not.** It is not a list of falsehoods: some of it is probably true. And it is not proof that no primary source exists. These claims were gathered from a bounded set of documents, so a missing source can mean the idea has none, or only that the document carrying it was never read.

**Each idea is being checked on its own**, by searching for the source rather than noting its absence. So far: 4 contradicted by a primary source, 30 backed by one, 15 searched with nothing found, 10 where a real source says something narrower than the retelling. Every entry below carries its result and what was searched; the unchecked ones say so.

Cite an entry by its RESULT. A contradicted idea can be answered flatly, with the quote. An unchecked one is something the field repeats, and nothing more.

## Contradicted by a primary source

The strongest entries here. For each, an operator addresses the idea directly and says the opposite.

- **A meta description has a limit of about 155 characters, and anything longer gets truncated.**
  - "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width." - Google Search Central https://developers.google.com/search/docs/appearance/snippet
  - The operator states there is no limit, and that truncation is a function of the DEVICE rather than a character count. The 155 that the field treats as a rule is a measurement of one device width restated as a specification. Writing to it is not harmful, but it is not what Google documents, and the number has no source at Google.
- **A strong meta description signals relevance to search engines, i.e. it helps ranking.**
  - "Even though we sometimes use the description meta tag for the snippets we show, we still don't use the description meta tag in our ranking." - Google Search Central Blog https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
  - Contradicted by Google directly, and for seventeen years. The claim survives because it is bundled with a true one: a good description plausibly helps click-through, which is not the same as signalling relevance to the ranking system. The compound sentence carries the false half on the back of the plausible half.
- **E-E-A-T is a ranking factor: sites demonstrating strong E-E-A-T signals are rewarded with higher rankings.**
  - "Google's "Creating helpful, reliable, people-first content" documentation states that E-E-A-T itself isn't a specific ranking factor." - Google Search Central https://developers.google.com/search/docs/fundamentals/creating-helpful-content
  - Contradicted twice over: E-E-A-T is not a ranking factor, and the rater guidelines it comes from do not directly influence ranking - both stated by Google, both already in this corpus. A headline calling it 'still the most important ranking factor in 2026' inverts the operator's own position. What survives is weaker and duller: raters use E-E-A-T to assess whether ranking changes are working.
- **Setting sitemap changefreq and priority values carefully influences how search engines crawl a site, so they are worth tuning.**
  - "Google ignores <priority> and <changefreq> values." - Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
  - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.

## changefreq (13)

- **[echoed-claim]** Content Powered quotes John Mueller of Google as saying that priority and change frequency doesn't play that much of a role with Sitemaps anymore.
  - as of: 2026-04-10
  - quote: "We also have direct word on this subject from John Mueller of Google."
  - quote: "Priority and change frequency doesn't play that much of a role with Sitemaps anymore."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **BACKING FOUND** (checked 2026-08-14)
    - The quote is real and traceable, but the nearest available source is trade press transcribing a Google video hangout rather than a Google document, and it is from MAY 2015. Every retelling drops the date, presenting an eleven-year-old remark as current. Google's own documentation now states something stronger and dated: that it ignores both values outright.
    - source: "Priority and change frequency doesn't really play that much of a role with Sitemaps anymore."
      Search Engine Roundtable, reporting a Google video hangout https://www.seroundtable.com/google-priority-change-frequency-xml-sitemap-20273.html
    - searched: web search: John Mueller Google "priority" "change frequency" sitemaps "doesn't play that much of a role" office hours
    - searched: traced to Search Engine Roundtable's contemporaneous report of the video hangout
- **[echoed-claim]** Slickplan's guide to sitemap priority and change frequency tells readers that setting realistic change frequencies is crucial because it avoids confusing search sites that do acknowledge the changefreq tag.
  - as of: 2025-09-11
  - quote: "Setting realistic change frequencies is crucial as it avoids confusing search sites that do acknowledge the changefreq tag, aiding in properly communicating page update routines."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide states that change frequency tells search engines how often a page's content updates, offering a hint for crawling prioritization.
  - as of: 2025-09-11
  - quote: "Change frequency tells search engines how often a page’s content updates, offering a hint for crawling prioritization."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of major news publications.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of weather services.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide assigns the changefreq value 'hourly' to pages of forums.
  - as of: 2025-09-11
  - quote: "2. Hourly These pages update every hour and will also include major news publications as well as weather services and forums."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide claims that large sites tend to have the most to gain from using the priority and changefreq tags.
  - as of: 2025-09-11
  - quote: "Large sites tend to have the most to gain from using these tags as the guidance can nudge and help search sites get pages crawled and indexed more effectively and in line with your intention."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Slickplan's guide claims that the guidance from the priority and changefreq tags can nudge search sites to get pages crawled and indexed more effectively.
  - as of: 2025-09-11
  - quote: "Large sites tend to have the most to gain from using these tags as the guidance can nudge and help search sites get pages crawled and indexed more effectively and in line with your intention."
  - source: https://slickplan.com/blog/xml-sitemap-priority-changefreq
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **[echoed-claim]** Content Powered's article on sitemap priority and changefreq tells readers that setting changefreq too high will confuse search engines.
  - as of: 2026-04-10
  - quote: "Setting it too high will confuse search engines and may result in them searching your site too aggressively, even when there aren't any changes."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - A mechanism claim with no operator behind it. It is also incoherent with the documented position: a value both major engines ignore cannot cause them to crawl harder. The 'dozens of other search engines' framing names nobody, so there is nothing to check.
    - searched: checked the corpus: no engine documents any crawl-rate consequence of changefreq
    - searched: web search: John Mueller Google "priority" "change frequency" sitemaps office hours (returned only guides repeating the same advice)
    - searched: checked https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap for any crawl-rate warning tied to changefreq
- **[echoed-claim]** Content Powered's article on sitemap priority and changefreq tells readers that setting changefreq too high may result in search engines searching the site too aggressively even when there are no changes.
  - as of: 2026-04-10
  - quote: "Setting it too high will confuse search engines and may result in them searching your site too aggressively, even when there aren't any changes."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - A mechanism claim with no operator behind it. It is also incoherent with the documented position: a value both major engines ignore cannot cause them to crawl harder. The 'dozens of other search engines' framing names nobody, so there is nothing to check.
    - searched: checked the corpus: no engine documents any crawl-rate consequence of changefreq
    - searched: web search: John Mueller Google "priority" "change frequency" sitemaps office hours (returned only guides repeating the same advice)
    - searched: checked https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap for any crawl-rate warning tied to changefreq
- **[echoed-claim]** Setting Changefreq values too high could result in dozens of other search engines hammering the site's server.
  - as of: 2026-04-10
  - quote: "Google isn't the only search engine that checks your sitemap, so if you have your Changefreq values set too high, you could have dozens of other search engines hammering your server and slowing it down."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - A mechanism claim with no operator behind it. It is also incoherent with the documented position: a value both major engines ignore cannot cause them to crawl harder. The 'dozens of other search engines' framing names nobody, so there is nothing to check.
    - searched: checked the corpus: no engine documents any crawl-rate consequence of changefreq
    - searched: web search: John Mueller Google "priority" "change frequency" sitemaps office hours (returned only guides repeating the same advice)
    - searched: checked https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap for any crawl-rate warning tied to changefreq
- **[echoed-claim]** Setting Changefreq values too high could result in dozens of other search engines slowing down the site's server.
  - as of: 2026-04-10
  - quote: "Google isn't the only search engine that checks your sitemap, so if you have your Changefreq values set too high, you could have dozens of other search engines hammering your server and slowing it down."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - A mechanism claim with no operator behind it. It is also incoherent with the documented position: a value both major engines ignore cannot cause them to crawl harder. The 'dozens of other search engines' framing names nobody, so there is nothing to check.
    - searched: checked the corpus: no engine documents any crawl-rate consequence of changefreq
    - searched: web search: John Mueller Google "priority" "change frequency" sitemaps office hours (returned only guides repeating the same advice)
    - searched: checked https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap for any crawl-rate warning tied to changefreq
- **[echoed-claim]** Content Powered's article tells readers that changefreq is still something you should tune
  - as of: 2026-04-10
  - quote: "It's still something you should tune, but it isn't going to make or break your website."
  - source: https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Not merely unsourced: the operator documents the opposite, in one sentence, on the page these guides are ostensibly explaining. Bing's blog says the same for Bing. The advice to assign 'hourly' to news pages, to tune values for large sites, or to treat them as a crawl hint is contradicted by both engines that were asked.
    - source: "Google ignores <priority> and <changefreq> values."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    - searched: checked the corpus first: this subject already carries Google's and Bing's documented positions on both tags
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## FAQPage structured data (9)

- **[echoed-claim]** According to an article published at georion.app in 2026, FAQPage structured data is 3.2x more likely to appear in Google AI Overviews.
  - as of: 2026
  - quote: "Pages with FAQ schema are 3.2x more likely to appear in Google AI Overviews and 40% more likely to get cited by ChatGPT according to 2026 analysis."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Every trail ends in another blog. The 3.2x figure is reconstructed differently in different retellings - one gives 13.6% versus 4.2% citation rates, another a 58.3% presence against an 18% baseline - which are not the same measurement, and no version links a dataset, a methodology or a paper. The '40% more likely to get cited by ChatGPT' half of the claim has no measurement attached anywhere.
    - searched: web search: "FAQ schema" "3.2x" more likely AI Overviews study source
    - searched: followed the citing pages: georion.app, schemaninja.com, frase.io, ziptie.dev, amicited.com, pendium.ai
    - searched: web search: Launchcodex study 127,000 AI Overview panels FAQPage schema 58.3%
    - searched: opened https://launchcodex.com/blog/seo-geo-ai/schema-thought-leadership/ looking for the study on the named publisher's own site
- **[echoed-claim]** According to an article published at georion.app in 2026, FAQPage structured data is 40% more likely to get cited by ChatGPT.
  - as of: 2026
  - quote: "Pages with FAQ schema are 3.2x more likely to appear in Google AI Overviews and 40% more likely to get cited by ChatGPT according to 2026 analysis."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Every trail ends in another blog. The 3.2x figure is reconstructed differently in different retellings - one gives 13.6% versus 4.2% citation rates, another a 58.3% presence against an 18% baseline - which are not the same measurement, and no version links a dataset, a methodology or a paper. The '40% more likely to get cited by ChatGPT' half of the claim has no measurement attached anywhere.
    - searched: web search: "FAQ schema" "3.2x" more likely AI Overviews study source
    - searched: followed the citing pages: georion.app, schemaninja.com, frase.io, ziptie.dev, amicited.com, pendium.ai
    - searched: web search: Launchcodex study 127,000 AI Overview panels FAQPage schema 58.3%
    - searched: opened https://launchcodex.com/blog/seo-geo-ai/schema-thought-leadership/ looking for the study on the named publisher's own site
- **[echoed-claim]** An article published at georion.app in 2026 attributes to a Launchcodex June 2026 study of 127,000 Google AI Overview answer panels a finding that FAQPage schema was present on 58.3% of cited sources.
  - as of: 2026
  - quote: "For Google AI Overviews specifically, Launchcodex's June 2026 research analyzed 127,000 AI-generated answer panels and found FAQPage schema present on 58.3% of cited sources."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The named study is not on the named publisher's own site. The Launchcodex page that surfaced contains neither figure, and cites other people's research rather than presenting its own dataset. The study is referenced only by pages that are themselves repeating georion.app.
    - searched: web search: Launchcodex study 127,000 AI Overview panels FAQPage schema 58.3%
    - searched: opened https://launchcodex.com/blog/seo-geo-ai/schema-thought-leadership/ - the only Launchcodex page the search surfaced
    - searched: checked that page for the strings '127,000' and '58.3'
- **[echoed-claim]** FAQPage markup remains valid structured data, according to a June 2026 statement attributed to Google's Search Relations team by an article published at georion.app in 2026.
  - as of: 2026
  - quote: "According to Google's Search Relations team statement in June 2026, "FAQPage markup remains valid structured data that helps us understand page content structure"—a clear signal that the schema still feeds Google's knowledge systems, including AI Overviews."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google, and the advice is sound for a reason the pages repeating it rarely give: the markup is harmless, not helpful. Google says unused structured data has no visible effect. 'Do not remove it' is true; it is being repeated in contexts that imply keeping it does something.
    - source: "Google's August 2023 announcement told site owners there was no need to proactively remove FAQPage structured data, and that structured data which is not being used causes no problems and has no visible effects in Google Search."
      Google Search Central Blog https://developers.google.com/search/blog/2023/08/howto-faq-changes
    - searched: checked the corpus first: Google's August 2023 announcement about the FAQ rich result is already held
    - searched: opened https://developers.google.com/search/blog/2023/08/howto-faq-changes
- **[echoed-claim]** FAQPage markup helps Google understand page content structure, according to a June 2026 statement attributed to Google's Search Relations team by an article published at georion.app in 2026.
  - as of: 2026
  - quote: "According to Google's Search Relations team statement in June 2026, "FAQPage markup remains valid structured data that helps us understand page content structure"—a clear signal that the schema still feeds Google's knowledge systems, including AI Overviews."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google, and the advice is sound for a reason the pages repeating it rarely give: the markup is harmless, not helpful. Google says unused structured data has no visible effect. 'Do not remove it' is true; it is being repeated in contexts that imply keeping it does something.
    - source: "Google's August 2023 announcement told site owners there was no need to proactively remove FAQPage structured data, and that structured data which is not being used causes no problems and has no visible effects in Google Search."
      Google Search Central Blog https://developers.google.com/search/blog/2023/08/howto-faq-changes
    - searched: checked the corpus first: Google's August 2023 announcement about the FAQ rich result is already held
    - searched: opened https://developers.google.com/search/blog/2023/08/howto-faq-changes
- **[echoed-claim]** An article published at georion.app in 2026 attributes to SEMrush tracking of 2.4 million domains a finding about FAQPage structured data.
  - as of: 2026
  - quote: "According to SEMrush's tracking of 2.4 million domains, 67.2% of websites that previously displayed FAQ rich results saw those features disappear within 72 hours of the May 7 rollout."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Another named-brand, named-sample statistic with no publication behind it, from the same page as the 3.2x and Launchcodex claims already traced here. Three unfindable studies on one page is a pattern rather than an accident.
    - searched: web search: SEMrush tracking "2.4 million" domains FAQPage structured data finding
    - searched: no SEMrush publication carrying that sample or that finding surfaced; SEMrush's own documented figures describe a different corpus entirely
    - searched: checked the corpus: no such study is held
- **[echoed-claim]** The finding about FAQPage structured data, attributed to SEMrush's tracking of 2.4 million domains, states that 67.2% of websites that previously displayed FAQ rich results saw those features disappear within 72 hours of the May 7 rollout.
  - as of: 2026
  - quote: "According to SEMrush's tracking of 2.4 million domains, 67.2% of websites that previously displayed FAQ rich results saw those features disappear within 72 hours of the May 7 rollout."
  - source: https://georion.app/blog/faq-schema-for-ai-answers-2026-still-worth-it-after-googles-may-update
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Another named-brand, named-sample statistic with no publication behind it, from the same page as the 3.2x and Launchcodex claims already traced here. Three unfindable studies on one page is a pattern rather than an accident.
    - searched: web search: SEMrush tracking "2.4 million" domains FAQPage structured data finding
    - searched: no SEMrush publication carrying that sample or that finding surfaced; SEMrush's own documented figures describe a different corpus entirely
    - searched: checked the corpus: no such study is held
- **[echoed-claim]** An article published at faqjsonld.com on 2026-04-25 tells readers not to remove FAQPage structured data from their pages.
  - as of: 2026-04-25
  - quote: "Published 2026-04-25"
  - quote: "Should I remove FAQ schema from my pages? No. Google explicitly said in their 2023 deprecation post that you do not need to remove FAQPage structured data — it just will not produce rich snippets on most sites."
  - source: https://faqjsonld.com/blog/google-faq-deprecation-2026/
  - source: https://faqjsonld.com/blog/google-faq-deprecation-2026/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google, and the advice is sound for a reason the pages repeating it rarely give: the markup is harmless, not helpful. Google says unused structured data has no visible effect. 'Do not remove it' is true; it is being repeated in contexts that imply keeping it does something.
    - source: "Google's August 2023 announcement told site owners there was no need to proactively remove FAQPage structured data, and that structured data which is not being used causes no problems and has no visible effects in Google Search."
      Google Search Central Blog https://developers.google.com/search/blog/2023/08/howto-faq-changes
    - searched: checked the corpus first: Google's August 2023 announcement about the FAQ rich result is already held
    - searched: opened https://developers.google.com/search/blog/2023/08/howto-faq-changes
- **[echoed-claim]** The article published at faqjsonld.com on 2026-04-25 cites Google's 2023 deprecation post as having said that site owners do not need to remove FAQPage structured data.
  - as of: 2026-04-25
  - quote: "Published 2026-04-25"
  - quote: "Should I remove FAQ schema from my pages? No. Google explicitly said in their 2023 deprecation post that you do not need to remove FAQPage structured data — it just will not produce rich snippets on most sites."
  - source: https://faqjsonld.com/blog/google-faq-deprecation-2026/
  - source: https://faqjsonld.com/blog/google-faq-deprecation-2026/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google, and the advice is sound for a reason the pages repeating it rarely give: the markup is harmless, not helpful. Google says unused structured data has no visible effect. 'Do not remove it' is true; it is being repeated in contexts that imply keeping it does something.
    - source: "Google's August 2023 announcement told site owners there was no need to proactively remove FAQPage structured data, and that structured data which is not being used causes no problems and has no visible effects in Google Search."
      Google Search Central Blog https://developers.google.com/search/blog/2023/08/howto-faq-changes
    - searched: checked the corpus first: Google's August 2023 announcement about the FAQ rich result is already held
    - searched: opened https://developers.google.com/search/blog/2023/08/howto-faq-changes

## Digital PR (8)

- **[echoed-claim]** The Reporter Outreach digital PR statistics page asserts that digital PR is the lowest-risk approach because editorial decisions sit with the journalist, making campaigns effectively immune to Google algorithm penalties.
  - as of: 2026-08-01
  - quote: "Digital PR is the lowest-risk approach because editorial decisions sit with the journalist — making campaigns effectively immune to Google algorithm penalties. Reporter Outreach"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Two vendor assertions about the vendor's own service, on a page selling it. 'Zero measurable link equity' is the checkable half and nothing measures it. Google's documented position on links makes no distinction by how a link was obtained, only by whether it was manipulated.
    - searched: checked the corpus: no operator documents any position ranking link-building approaches by risk
    - searched: the citing page names no study, sample or measurement for either half
- **[echoed-claim]** The Reporter Outreach digital PR statistics page asserts that 53% of Google penalties involve paid links with keyword-rich anchor text.
  - as of: 2026-08-01
  - quote: "53% of Google penalties involve paid links with keyword-rich anchor text — a risk that disappears when journalists choose their own anchors. Semrush"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - A real study exists - 830+ backlink profiles over two years - but the circulating figure is not what it says. Semrush reports 'over 50%' for money anchors AND sponsored or paid links taken TOGETHER; the retelling reports a precise 53% for a compound category, paid links WITH keyword-rich anchors, that the source does not separate out. The number has become more precise in retelling than in the source, which is backwards. It is also six years old and presented as current.
    - source: "Money anchors and sponsored and paid links in articles and blog posts account for causing over 50% of penalty cases."
      Semrush https://www.prnewswire.com/news-releases/semrush-research-uncovers-that-money-anchors-can-bleed-a-sites-link-juice-dry-301061017.html
    - searched: web search: Semrush study "53%" Google penalties paid links keyword-rich anchor text
    - searched: opened Semrush's own press release at prnewswire.com/news-releases/semrush-research-uncovers-that-money-anchors-can-bleed-a-sites-link-juice-dry-301061017.html
- **[echoed-claim]** The Reporter Outreach digital PR statistics page attributes the 53% figure to "Semrush".
  - as of: 2026-08-01
  - quote: "53% of Google penalties involve paid links with keyword-rich anchor text — a risk that disappears when journalists choose their own anchors. Semrush"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - A real study exists - 830+ backlink profiles over two years - but the circulating figure is not what it says. Semrush reports 'over 50%' for money anchors AND sponsored or paid links taken TOGETHER; the retelling reports a precise 53% for a compound category, paid links WITH keyword-rich anchors, that the source does not separate out. The number has become more precise in retelling than in the source, which is backwards. It is also six years old and presented as current.
    - source: "Money anchors and sponsored and paid links in articles and blog posts account for causing over 50% of penalty cases."
      Semrush https://www.prnewswire.com/news-releases/semrush-research-uncovers-that-money-anchors-can-bleed-a-sites-link-juice-dry-301061017.html
    - searched: web search: Semrush study "53%" Google penalties paid links keyword-rich anchor text
    - searched: opened Semrush's own press release at prnewswire.com/news-releases/semrush-research-uncovers-that-money-anchors-can-bleed-a-sites-link-juice-dry-301061017.html
- **[echoed-claim]** The Reporter Outreach digital PR statistics page asserts that traditional PR delivers zero measurable link equity.
  - as of: 2026-08-01
  - quote: "Traditional PR delivers zero measurable link equity . Campaigns built for search produce backlinks, brand mentions, and traffic at once. Reporter Outreach"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Two vendor assertions about the vendor's own service, on a page selling it. 'Zero measurable link equity' is the checkable half and nothing measures it. Google's documented position on links makes no distinction by how a link was obtained, only by whether it was manipulated.
    - searched: checked the corpus: no operator documents any position ranking link-building approaches by risk
    - searched: the citing page names no study, sample or measurement for either half
- **[echoed-claim]** The Reporter Outreach digital PR statistics page reports that the average campaign earns links from 42 unique referring domains.
  - as of: 2026-08-01
  - quote: "The average campaign earns links from 42 unique referring domains . Top performers earn significantly more. Digitaloft / Reboot Online"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Attributed to 'Digitaloft / Reboot Online', but the trail loops: the pages carrying the figure are the page being traced and aggregators repeating it, and the named agency's own page is gone. Nothing states a methodology or a campaign sample that can be checked.
    - searched: web search: Digitaloft OR "Reboot Online" digital PR campaign average "referring domains" study 42
    - searched: opened https://digitaloft.co.uk/quality-over-quantity-in-digital-pr/ , the only Digitaloft page the search surfaced - it returns HTTP 404
- **[echoed-claim]** The Reporter Outreach digital PR statistics page attributes the 42 unique referring domains figure to "Digitaloft / Reboot Online".
  - as of: 2026-08-01
  - quote: "The average campaign earns links from 42 unique referring domains . Top performers earn significantly more. Digitaloft / Reboot Online"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Attributed to 'Digitaloft / Reboot Online', but the trail loops: the pages carrying the figure are the page being traced and aggregators repeating it, and the named agency's own page is gone. Nothing states a methodology or a campaign sample that can be checked.
    - searched: web search: Digitaloft OR "Reboot Online" digital PR campaign average "referring domains" study 42
    - searched: opened https://digitaloft.co.uk/quality-over-quantity-in-digital-pr/ , the only Digitaloft page the search surfaced - it returns HTTP 404
- **[echoed-claim]** The Reporter Outreach digital PR statistics page restates an Ahrefs figure as "Brand mentions correlate 3x more strongly with AI search visibility (0.664) than backlinks alone (0.218)".
  - as of: 2026-08-01
  - quote: "Brand mentions correlate 3x more strongly with AI search visibility (0.664) than backlinks alone (0.218). Campaigns produce both at once. Ahrefs, 2025"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **BACKING FOUND** (checked 2026-08-14)
    - The figures are real and published by Ahrefs from 75,000 brands: branded web mentions 0.664, backlinks 0.218. What the retelling drops is the author's own caveat, quoted here, and the fact that Ahrefs describes all the studied factors as moderate to very weak on the Spearman scale. The statistic is backed; the causal reading placed on it by the digital PR page is not.
    - source: "While the data shows statistical relationships, I should emphasize that correlation ≠ causation."
      Ahrefs https://ahrefs.com/blog/ai-overview-brand-correlation/
    - searched: web search: Ahrefs study brand mentions correlation "0.664" AI search visibility backlinks
    - searched: opened the publisher's own write-up at https://ahrefs.com/blog/ai-overview-brand-correlation/
- **[echoed-claim]** The Reporter Outreach digital PR statistics page attributes the figure "Brand mentions correlate 3x more strongly with AI search visibility (0.664) than backlinks alone (0.218)" to "Ahrefs, 2025".
  - as of: 2026-08-01
  - quote: "Brand mentions correlate 3x more strongly with AI search visibility (0.664) than backlinks alone (0.218). Campaigns produce both at once. Ahrefs, 2025"
  - source: https://www.reporteroutreach.com/blog/digital-pr-statistics
  - **BACKING FOUND** (checked 2026-08-14)
    - The figures are real and published by Ahrefs from 75,000 brands: branded web mentions 0.664, backlinks 0.218. What the retelling drops is the author's own caveat, quoted here, and the fact that Ahrefs describes all the studied factors as moderate to very weak on the Spearman scale. The statistic is backed; the causal reading placed on it by the digital PR page is not.
    - source: "While the data shows statistical relationships, I should emphasize that correlation ≠ causation."
      Ahrefs https://ahrefs.com/blog/ai-overview-brand-correlation/
    - searched: web search: Ahrefs study brand mentions correlation "0.664" AI search visibility backlinks
    - searched: opened the publisher's own write-up at https://ahrefs.com/blog/ai-overview-brand-correlation/

## generative engine optimization (8)

- **[echoed-claim]** A GEO vendor page asserts that in 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published research titled 'GEO: Generative Engine Optimization'.
  - as of: 2026-08-11
  - quote: "In 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published groundbreaking research titled "GEO: Generative Engine Optimization". The study introduced the GEO-BENCH dataset, a benchmark of 10,000 diverse queries across multiple domains, and systematically tested nine distinct optimization methods to determine which techniques most effectively improved visibility in AI-generated responses."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **BACKING FOUND** (checked 2026-08-14)
    - The paper is real, the authors match, and GEO-bench is described in the abstract. The important finding is about OUR pipeline rather than the idea: arxiv.org/abs/2311.09735 was already a source in the sweep manifest, and this subject already carries four measured-finding claims citing it directly. The vendor page's restatement was recorded as a separate echoed claim anyway, so this echo is a duplicate of evidence the corpus already had, not a gap in what we read. Two details in the retellings remain unestablished by the abstract: '10,000 queries across 8 domains', and '30-40% improvements across the top three techniques' - the abstract says only 'a large-scale benchmark of diverse user queries across multiple domains' and 'up to 40%'.
    - source: "To address this, we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework for optimizing and defining visibility metrics. We facilitate systematic evaluation by introducing GEO-bench, a large-scale benchmark of diverse user queries across multiple domains, along with relevant web sources to answer these queries. Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to 40% in generative engine responses."
      arXiv (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande) https://arxiv.org/abs/2311.09735
    - searched: web search: "GEO: Generative Engine Optimization" Princeton Georgia Tech Allen Institute IIT Delhi paper GEO-BENCH
    - searched: opened https://arxiv.org/abs/2311.09735 and read the abstract and author list
    - searched: checked the corpus itself: the sweep manifest already lists arxiv.org/abs/2311.09735 as source 'geo-paper', and the export already holds 4 measured-finding claims citing it
- **[echoed-claim]** A GEO vendor page asserts that the research titled 'GEO: Generative Engine Optimization' introduced a GEO-BENCH dataset of 10,000 diverse queries across multiple domains.
  - as of: 2026-08-11
  - quote: "In 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published groundbreaking research titled "GEO: Generative Engine Optimization". The study introduced the GEO-BENCH dataset, a benchmark of 10,000 diverse queries across multiple domains, and systematically tested nine distinct optimization methods to determine which techniques most effectively improved visibility in AI-generated responses."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **BACKING FOUND** (checked 2026-08-14)
    - The paper is real, the authors match, and GEO-bench is described in the abstract. The important finding is about OUR pipeline rather than the idea: arxiv.org/abs/2311.09735 was already a source in the sweep manifest, and this subject already carries four measured-finding claims citing it directly. The vendor page's restatement was recorded as a separate echoed claim anyway, so this echo is a duplicate of evidence the corpus already had, not a gap in what we read. Two details in the retellings remain unestablished by the abstract: '10,000 queries across 8 domains', and '30-40% improvements across the top three techniques' - the abstract says only 'a large-scale benchmark of diverse user queries across multiple domains' and 'up to 40%'.
    - source: "To address this, we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework for optimizing and defining visibility metrics. We facilitate systematic evaluation by introducing GEO-bench, a large-scale benchmark of diverse user queries across multiple domains, along with relevant web sources to answer these queries. Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to 40% in generative engine responses."
      arXiv (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande) https://arxiv.org/abs/2311.09735
    - searched: web search: "GEO: Generative Engine Optimization" Princeton Georgia Tech Allen Institute IIT Delhi paper GEO-BENCH
    - searched: opened https://arxiv.org/abs/2311.09735 and read the abstract and author list
    - searched: checked the corpus itself: the sweep manifest already lists arxiv.org/abs/2311.09735 as source 'geo-paper', and the export already holds 4 measured-finding claims citing it
- **[echoed-claim]** A generative engine optimization vendor page asserts that the top three generative engine optimization techniques, Cite Sources, Quotation Addition and Statistics Addition, delivered 30-40% visibility improvements across all content categories.
  - as of: 2026-08-11
  - quote: "The results revealed dramatic performance differences. The top three techniques—Cite Sources, Quotation Addition, and Statistics Addition—delivered 30-40% visibility improvements across all content categories."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **BACKING FOUND** (checked 2026-08-14)
    - The paper is real, the authors match, and GEO-bench is described in the abstract. The important finding is about OUR pipeline rather than the idea: arxiv.org/abs/2311.09735 was already a source in the sweep manifest, and this subject already carries four measured-finding claims citing it directly. The vendor page's restatement was recorded as a separate echoed claim anyway, so this echo is a duplicate of evidence the corpus already had, not a gap in what we read. Two details in the retellings remain unestablished by the abstract: '10,000 queries across 8 domains', and '30-40% improvements across the top three techniques' - the abstract says only 'a large-scale benchmark of diverse user queries across multiple domains' and 'up to 40%'.
    - source: "To address this, we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework for optimizing and defining visibility metrics. We facilitate systematic evaluation by introducing GEO-bench, a large-scale benchmark of diverse user queries across multiple domains, along with relevant web sources to answer these queries. Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to 40% in generative engine responses."
      arXiv (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande) https://arxiv.org/abs/2311.09735
    - searched: web search: "GEO: Generative Engine Optimization" Princeton Georgia Tech Allen Institute IIT Delhi paper GEO-BENCH
    - searched: opened https://arxiv.org/abs/2311.09735 and read the abstract and author list
    - searched: checked the corpus itself: the sweep manifest already lists arxiv.org/abs/2311.09735 as source 'geo-paper', and the export already holds 4 measured-finding claims citing it
- **[echoed-claim]** Search Engine Land asserts that Cyrus Shepard found in a recent study that 92% of sites that experience significant organic growth produce their own proprietary assets.
  - as of: 2026-08-10
  - quote: "Cyrus Shepard found in a recent study that 92% of sites that experience significant organic growth produce their own proprietary assets."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retelling drops the number that makes it mean anything. 57.1% of LOSING sites also have proprietary assets, so the trait is common on both sides and the gap is 36 points, not 92. Quoting the winners' figure alone converts a correlation with a stated baseline into a recipe. The study itself is careful: it reports the traits as additive, from a 13.5% win rate at zero to 69.7% at five.
    - source: "92.9% of winning sites have proprietary assets, while 57.1% of losing sites do."
      Cyrus Shepard / Zyppy, reported by Search Engine Journal https://www.searchenginejournal.com/what-400-sites-reveal-about-organic-traffic-gains/571632/
    - searched: web search: Cyrus Shepard study "92%" of sites significant organic growth proprietary assets
    - searched: traced to the underlying analysis of 400 winning and losing sites over twelve months
- **[echoed-claim]** According to Search Engine Journal's report on generative engine optimization, ChatGPT confirmed at length that an invented file standard called cats.txt could help its author rank.
  - as of: 2026-08-07
  - quote: "I got tired of watching the industry treat “an AI bot fetched it” and “ChatGPT said it helps” as evidence that llms.txt does anything, so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "ChatGPT confirmed, at length, that cats.txt could help me rank. None of which is evidence of anything, which was rather the point."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retelling UNDERSTATES it: the study covered 137,210 domains rather than 100,000, and its finding is sharper than 'no citation advantage' - 97% of these files are never fetched at all, and most of the traffic that does arrive is SEO audit tools. A rare case of a repeated claim being weaker than its source.
    - source: "Of roughly 38,000 domains with a valid llms.txt, 97% received zero requests for it in May 2026; of the files that were requested, AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
      Ahrefs https://ahrefs.com/blog/llmstxt-study/
    - searched: web search: Ahrefs llms.txt 100,000 domains study findings
    - searched: opened Ahrefs' own write-up at https://ahrefs.com/blog/llmstxt-study/
- **[echoed-claim]** According to Search Engine Journal's report on generative engine optimization, the author of cats.txt stated that ChatGPT's confirmation is not evidence of anything.
  - as of: 2026-08-07
  - quote: "I got tired of watching the industry treat “an AI bot fetched it” and “ChatGPT said it helps” as evidence that llms.txt does anything, so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "ChatGPT confirmed, at length, that cats.txt could help me rank. None of which is evidence of anything, which was rather the point."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retelling UNDERSTATES it: the study covered 137,210 domains rather than 100,000, and its finding is sharper than 'no citation advantage' - 97% of these files are never fetched at all, and most of the traffic that does arrive is SEO audit tools. A rare case of a repeated claim being weaker than its source.
    - source: "Of roughly 38,000 domains with a valid llms.txt, 97% received zero requests for it in May 2026; of the files that were requested, AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
      Ahrefs https://ahrefs.com/blog/llmstxt-study/
    - searched: web search: Ahrefs llms.txt 100,000 domains study findings
    - searched: opened Ahrefs' own write-up at https://ahrefs.com/blog/llmstxt-study/
- **[echoed-claim]** Search Engine Journal states in one article that Ahrefs ran the numbers on llms.txt across 100,000 domains.
  - as of: 2026-08-07
  - quote: "Ahrefs ran the numbers across 100,000 domains and found that the file is, in practice, largely ignored by the crawlers it is meant to court, a finding since echoed by other large studies showing no measurable citation advantage for sites that add one."
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retelling UNDERSTATES it: the study covered 137,210 domains rather than 100,000, and its finding is sharper than 'no citation advantage' - 97% of these files are never fetched at all, and most of the traffic that does arrive is SEO audit tools. A rare case of a repeated claim being weaker than its source.
    - source: "Of roughly 38,000 domains with a valid llms.txt, 97% received zero requests for it in May 2026; of the files that were requested, AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
      Ahrefs https://ahrefs.com/blog/llmstxt-study/
    - searched: web search: Ahrefs llms.txt 100,000 domains study findings
    - searched: opened Ahrefs' own write-up at https://ahrefs.com/blog/llmstxt-study/
- **[echoed-claim]** Search Engine Journal states in another article that Ahrefs analyzed logs from 137,000 domains.
  - as of: 2026-08-07
  - quote: "Ahrefs ran the numbers across 100,000 domains and found that the file is, in practice, largely ignored by the crawlers it is meant to court, a finding since echoed by other large studies showing no measurable citation advantage for sites that add one."
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retelling UNDERSTATES it: the study covered 137,210 domains rather than 100,000, and its finding is sharper than 'no citation advantage' - 97% of these files are never fetched at all, and most of the traffic that does arrive is SEO audit tools. A rare case of a repeated claim being weaker than its source.
    - source: "Of roughly 38,000 domains with a valid llms.txt, 97% received zero requests for it in May 2026; of the files that were requested, AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
      Ahrefs https://ahrefs.com/blog/llmstxt-study/
    - searched: web search: Ahrefs llms.txt 100,000 domains study findings
    - searched: opened Ahrefs' own write-up at https://ahrefs.com/blog/llmstxt-study/

## Google-Extended (7)

- **[echoed-claim]** A page on amicited.com asserts that many publishers mistakenly believe blocking Google-Extended will prevent their content from appearing in AI Overviews.
  - as of: 2026-01-03
  - quote: "Many publishers mistakenly believe that blocking Google-Extended will prevent their content from appearing in AI Overviews, but this is fundamentally incorrect."
  - source: https://www.amicited.com/blog/google-extended-what-it-does-should-you-block-it/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and by a document already in this corpus - the echo is a duplicate of evidence we held, not a gap. AI Overviews are served from the ordinary Search index, so a control that does not affect inclusion in Search cannot remove a page from them. The related claim that you would have to block Googlebot itself, and would then stop ranking, follows from the same document.
    - source: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    - searched: checked the corpus first: this subject already carries Google's crawler documentation on what Google-Extended controls
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[echoed-claim]** A page on digitalapplied.com asserts that the distinction between Google-Extended and AI Overviews trips up most publishers.
  - as of: 2026-06-06
  - quote: "Blocking Google-Extended is therefore insufficient to remove you from AI Overviews, a distinction that trips up most publishers."
  - source: https://www.digitalapplied.com/blog/google-search-console-ai-performance-block-ai-responses-2026-decision
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and by a document already in this corpus - the echo is a duplicate of evidence we held, not a gap. AI Overviews are served from the ordinary Search index, so a control that does not affect inclusion in Search cannot remove a page from them. The related claim that you would have to block Googlebot itself, and would then stop ranking, follows from the same document.
    - source: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    - searched: checked the corpus first: this subject already carries Google's crawler documentation on what Google-Extended controls
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[echoed-claim]** A page on playwire.com asserts that some publishers report that blocking Google-Extended may affect their appearance in Google's "Grounding with Google Search" feature for Gemini.
  - as of: 2025-12-08
  - quote: "There's a catch here. Some publishers report that blocking Google-Extended may affect their appearance in Google's "Grounding with Google Search" feature for Gemini. This could potentially impact citations to your pages in AI-generated responses."
  - source: https://www.playwire.com/blog/how-to-block-ai-bots-with-robotstxt-the-complete-publishers-guide
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Google's documentation does name grounding among what Google-Extended governs, so the direction is right. What cannot be checked is the claim as written: 'some publishers report' names no publisher and no measurement, so there is nothing to verify beyond the documentation that was already in the corpus.
    - source: "Google-Extended is a standalone product token that web publishers can use to manage whether content Google crawls from their sites may be used for training future generations of Gemini models that power Gemini Apps and Vertex AI API for Gemini and for grounding (providing content from the Google Search index to the model at prompt time to improve factuality and relevancy) in Gemini Apps and Grounding with Google Search on Vertex AI."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    - searched: checked the corpus: Google's crawler documentation names grounding as one of the uses Google-Extended controls
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[echoed-claim]** A guide on zerokit.dev states that for Google-Extended, opting out of AI Overviews entirely is a different and more complex conversation.
  - as of: 2026-04-09
  - quote: "Blocking Google-Extended may reduce how well Gemini understands your content for grounding purposes, but it won't necessarily remove you from AI Overviews. If you want to opt out of AI Overviews entirely, that's a different (and more complex) conversation involving the nosnippet meta tag."
  - source: https://zerokit.dev/guides/block-google-extended.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google's own AI-features page, which this corpus already holds under the nosnippet subject. Another duplicate rather than an unbacked idea. Note the trade-off the guides state less clearly: these controls limit snippets in ordinary Search too, so opting out of AI features costs the regular result snippet as well.
    - source: "Google's "AI features and your website" documentation names nosnippet, data-nosnippet, max-snippet and noindex as the controls for limiting the information shown from a site in AI features."
      Google Search Central https://developers.google.com/search/docs/appearance/ai-features
    - searched: checked the corpus first: the nosnippet subject already carries Google's AI-features documentation
    - searched: opened https://developers.google.com/search/docs/appearance/ai-features
- **[echoed-claim]** A guide on zerokit.dev states that for Google-Extended, opting out of AI Overviews entirely involves the nosnippet meta tag.
  - as of: 2026-04-09
  - quote: "Blocking Google-Extended may reduce how well Gemini understands your content for grounding purposes, but it won't necessarily remove you from AI Overviews. If you want to opt out of AI Overviews entirely, that's a different (and more complex) conversation involving the nosnippet meta tag."
  - source: https://zerokit.dev/guides/block-google-extended.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google's own AI-features page, which this corpus already holds under the nosnippet subject. Another duplicate rather than an unbacked idea. Note the trade-off the guides state less clearly: these controls limit snippets in ordinary Search too, so opting out of AI features costs the regular result snippet as well.
    - source: "Google's "AI features and your website" documentation names nosnippet, data-nosnippet, max-snippet and noindex as the controls for limiting the information shown from a site in AI features."
      Google Search Central https://developers.google.com/search/docs/appearance/ai-features
    - searched: checked the corpus first: the nosnippet subject already carries Google's AI-features documentation
    - searched: opened https://developers.google.com/search/docs/appearance/ai-features
- **[echoed-claim]** A page on intrepidonline.com states that to remove content from AI Overviews, a site owner needs to block Googlebot itself and not just Google-Extended.
  - as of: 2024-06-20
  - quote: "Answer: To put it bluntly, there is no easy way to do this without harming your site. To remove your content from AI Overviews, you need to block Googlebot itself (not just Google-Extended), which would result in your site no longer ranking and losing all of your organic traffic from Google."
  - source: https://www.intrepidonline.com/blog/seo/sge-google-block-not-block/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and by a document already in this corpus - the echo is a duplicate of evidence we held, not a gap. AI Overviews are served from the ordinary Search index, so a control that does not affect inclusion in Search cannot remove a page from them. The related claim that you would have to block Googlebot itself, and would then stop ranking, follows from the same document.
    - source: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    - searched: checked the corpus first: this subject already carries Google's crawler documentation on what Google-Extended controls
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- **[echoed-claim]** A page on intrepidonline.com states that blocking Googlebot itself and not just Google-Extended would result in the site no longer ranking.
  - as of: 2024-06-20
  - quote: "Answer: To put it bluntly, there is no easy way to do this without harming your site. To remove your content from AI Overviews, you need to block Googlebot itself (not just Google-Extended), which would result in your site no longer ranking and losing all of your organic traffic from Google."
  - source: https://www.intrepidonline.com/blog/seo/sge-google-block-not-block/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and by a document already in this corpus - the echo is a duplicate of evidence we held, not a gap. AI Overviews are served from the ordinary Search index, so a control that does not affect inclusion in Search cannot remove a page from them. The related claim that you would have to block Googlebot itself, and would then stop ranking, follows from the same document.
    - source: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    - searched: checked the corpus first: this subject already carries Google's crawler documentation on what Google-Extended controls
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers

## Search Console generative AI report (7)

- **[echoed-claim]** An article published at neilpatel.com states that data in the Search Console generative AI report begins from May 18, 2026.
  - as of: 2026
  - quote: "Data begins from May 18, 2026; there is no historical backfill."
  - quote: "The report currently has no historical data before May 18, 2026, which means the earlier you establish your first benchmarks, the more useful comparative data you will have going forward."
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The direction is right - Google documents a limited rollout - but the specifics are not in anything first-party we hold or could find: not the 18 May 2026 start, not the absence of backfill, and not the claim that the limited group is British. Those may well be correct observations by people who have the report; they are not established, and they are the kind of detail that hardens into fact through repetition.
    - source: "Google's June 2026 announcement states that the generative AI performance reports will be made widely available after the testing and feedback period."
      Google Search Central https://developers.google.com/search/blog/2026/06
    - searched: checked the corpus: Google's June 2026 announcement is held, and states the reports will be made widely available after a testing and feedback period
    - searched: compared that against the specific date and the UK-only detail in the secondary articles
- **[echoed-claim]** An article published at neilpatel.com states that there is no historical backfill for the data in the Search Console generative AI report.
  - as of: 2026
  - quote: "Data begins from May 18, 2026; there is no historical backfill."
  - quote: "The report currently has no historical data before May 18, 2026, which means the earlier you establish your first benchmarks, the more useful comparative data you will have going forward."
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The direction is right - Google documents a limited rollout - but the specifics are not in anything first-party we hold or could find: not the 18 May 2026 start, not the absence of backfill, and not the claim that the limited group is British. Those may well be correct observations by people who have the report; they are not established, and they are the kind of detail that hardens into fact through repetition.
    - source: "Google's June 2026 announcement states that the generative AI performance reports will be made widely available after the testing and feedback period."
      Google Search Central https://developers.google.com/search/blog/2026/06
    - searched: checked the corpus: Google's June 2026 announcement is held, and states the reports will be made widely available after a testing and feedback period
    - searched: compared that against the specific date and the UK-only detail in the secondary articles
- **[echoed-claim]** An article published at neilpatel.com states that the Search Console generative AI report tracks impressions only, with no click data, no CTR, no average position and no query-level breakdown.
  - as of: 2026
  - quote: "The most significant limitation of the current report is that it tracks impressions only. There is no click data, no CTR, no average position, and no query-level breakdown."
  - quote: "Click data is not included in the current version, which is the most significant limitation."
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - source: https://neilpatel.com/blog/gsc-ai-search-data-generative-ai-report/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google's own help page, which this corpus already held - another echo that duplicates evidence rather than lacking it. The secondary articles are accurate on this point.
    - source: "Google's Search Console Help page for the generative AI performance report states that the report includes impressions for the generative AI experience, and defines impressions in the report as how many times links to a site were shown."
      Google Search Console Help https://support.google.com/webmasters/answer/16984139
    - searched: checked the corpus first: this subject already carries Google's Search Console Help page for the generative AI performance report
    - searched: read the first-party claims recording what the report includes and how it defines an impression
- **[echoed-claim]** An article published at weblumino.com states that the Search Console generative AI reporting includes impressions, pages, countries, devices and dates.
  - as of: 2026
  - quote: "The reporting includes impressions, pages, countries, devices, and dates, but does not include click data. Google won’t be telling us how many searchers click from AI responses in Google Search to sites."
  - source: https://weblumino.com/introducing-search-generative-ai-performance-reports-in-search-console-2026/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google's own help page, which this corpus already held - another echo that duplicates evidence rather than lacking it. The secondary articles are accurate on this point.
    - source: "Google's Search Console Help page for the generative AI performance report states that the report includes impressions for the generative AI experience, and defines impressions in the report as how many times links to a site were shown."
      Google Search Console Help https://support.google.com/webmasters/answer/16984139
    - searched: checked the corpus first: this subject already carries Google's Search Console Help page for the generative AI performance report
    - searched: read the first-party claims recording what the report includes and how it defines an impression
- **[echoed-claim]** An article published at weblumino.com states that the Search Console generative AI reporting does not include click data.
  - as of: 2026
  - quote: "The reporting includes impressions, pages, countries, devices, and dates, but does not include click data. Google won’t be telling us how many searchers click from AI responses in Google Search to sites."
  - source: https://weblumino.com/introducing-search-generative-ai-performance-reports-in-search-console-2026/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google's own help page, which this corpus already held - another echo that duplicates evidence rather than lacking it. The secondary articles are accurate on this point.
    - source: "Google's Search Console Help page for the generative AI performance report states that the report includes impressions for the generative AI experience, and defines impressions in the report as how many times links to a site were shown."
      Google Search Console Help https://support.google.com/webmasters/answer/16984139
    - searched: checked the corpus first: this subject already carries Google's Search Console Help page for the generative AI performance report
    - searched: read the first-party claims recording what the report includes and how it defines an impression
- **[echoed-claim]** An article published at weblumino.com states that Google's generative AI report is currently limited to a subset of UK site owners.
  - as of: 2026
  - quote: "It’s also worth noting the competitive context: Bing Webmaster Tools has already released its AI performance report. Neither Google’s nor Bing’s reports have click data, but at least Bing’s report is global, while Google’s report is currently a subset of UK site owners."
  - source: https://weblumino.com/introducing-search-generative-ai-performance-reports-in-search-console-2026/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The direction is right - Google documents a limited rollout - but the specifics are not in anything first-party we hold or could find: not the 18 May 2026 start, not the absence of backfill, and not the claim that the limited group is British. Those may well be correct observations by people who have the report; they are not established, and they are the kind of detail that hardens into fact through repetition.
    - source: "Google's June 2026 announcement states that the generative AI performance reports will be made widely available after the testing and feedback period."
      Google Search Central https://developers.google.com/search/blog/2026/06
    - searched: checked the corpus: Google's June 2026 announcement is held, and states the reports will be made widely available after a testing and feedback period
    - searched: compared that against the specific date and the UK-only detail in the secondary articles
- **[echoed-claim]** An article published at weblumino.com states that Bing Webmaster Tools' AI performance report is global.
  - as of: 2026
  - quote: "It’s also worth noting the competitive context: Bing Webmaster Tools has already released its AI performance report. Neither Google’s nor Bing’s reports have click data, but at least Bing’s report is global, while Google’s report is currently a subset of UK site owners."
  - source: https://weblumino.com/introducing-search-generative-ai-performance-reports-in-search-console-2026/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The direction is right - Google documents a limited rollout - but the specifics are not in anything first-party we hold or could find: not the 18 May 2026 start, not the absence of backfill, and not the claim that the limited group is British. Those may well be correct observations by people who have the report; they are not established, and they are the kind of detail that hardens into fact through repetition.
    - source: "Google's June 2026 announcement states that the generative AI performance reports will be made widely available after the testing and feedback period."
      Google Search Central https://developers.google.com/search/blog/2026/06
    - searched: checked the corpus: Google's June 2026 announcement is held, and states the reports will be made widely available after a testing and feedback period
    - searched: compared that against the specific date and the UK-only detail in the secondary articles

## unlinked brand mentions (7)

- **[echoed-claim]** Search Engine Journal's article on brand mentions reports that Google's John Mueller said he does not think Google uses brand mentions at all for things like PageRank or understanding the link graph of a website.
  - as of: 2021-12-21
  - quote: "Mueller explained: “From my point of view, I don’t think we use those at all for things like PageRank or understanding the link graph of a website. And just a plain mention is sometimes kind of tricky to figure out anyway.”"
  - source: https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with the same caveat as other Mueller material: the nearest source is trade press quoting a spoken answer, not a Google document. Note what is being repeated here - this is the field repeating a DEBUNKING, which the sweep labelled an echo like any other. The claim that no papers or patents support brand mentions is a negative that the article asserts and does not evidence, and it is not established by Mueller's statement.
    - source: "From my point of view, I don't think we use those at all for things like PageRank or understanding the link graph of a website."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
    - searched: web search: John Mueller Google brand mentions "don't use" unlinked mentions ranking statement
    - searched: traced to Search Engine Journal's report carrying the quote directly
- **[echoed-claim]** Search Engine Journal's article on brand mentions states that there were no research papers or patents to support the idea of brand mentions.
  - as of: 2021-12-21
  - quote: "The idea of “brand mentions” has bounced around for over ten years. There were no research papers or patents to support it. “Brand mentions” is literally an idea that someone invented out of thin air."
  - source: https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with the same caveat as other Mueller material: the nearest source is trade press quoting a spoken answer, not a Google document. Note what is being repeated here - this is the field repeating a DEBUNKING, which the sweep labelled an echo like any other. The claim that no papers or patents support brand mentions is a negative that the article asserts and does not evidence, and it is not established by Mueller's statement.
    - source: "From my point of view, I don't think we use those at all for things like PageRank or understanding the link graph of a website."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
    - searched: web search: John Mueller Google brand mentions "don't use" unlinked mentions ranking statement
    - searched: traced to Search Engine Journal's report carrying the quote directly
- **[echoed-claim]** Search Engine Journal's article on brand mentions states that the idea of brand mentions is an idea someone invented out of thin air.
  - as of: 2021-12-21
  - quote: "The idea of “brand mentions” has bounced around for over ten years. There were no research papers or patents to support it. “Brand mentions” is literally an idea that someone invented out of thin air."
  - source: https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with the same caveat as other Mueller material: the nearest source is trade press quoting a spoken answer, not a Google document. Note what is being repeated here - this is the field repeating a DEBUNKING, which the sweep labelled an echo like any other. The claim that no papers or patents support brand mentions is a negative that the article asserts and does not evidence, and it is not established by Mueller's statement.
    - source: "From my point of view, I don't think we use those at all for things like PageRank or understanding the link graph of a website."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
    - searched: web search: John Mueller Google brand mentions "don't use" unlinked mentions ranking statement
    - searched: traced to Search Engine Journal's report carrying the quote directly
- **[echoed-claim]** Search Engine Journal's article on brand mentions states that the idea of brand mentions took off in 2012 when a patent surfaced that seemed to confirm it.
  - as of: 2021-12-21
  - quote: "However the “brand mention” idea took off in 2012 when a patent surfaced that seemed to confirm the idea of brand mentions."
  - source: https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with the same caveat as other Mueller material: the nearest source is trade press quoting a spoken answer, not a Google document. Note what is being repeated here - this is the field repeating a DEBUNKING, which the sweep labelled an echo like any other. The claim that no papers or patents support brand mentions is a negative that the article asserts and does not evidence, and it is not established by Mueller's statement.
    - source: "From my point of view, I don't think we use those at all for things like PageRank or understanding the link graph of a website."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-seo-brand-mentions/430848/
    - searched: web search: John Mueller Google brand mentions "don't use" unlinked mentions ranking statement
    - searched: traced to Search Engine Journal's report carrying the quote directly
- **[echoed-claim]** Regarding unlinked brand mentions, Search Engine Land's article on the traditional link building model states that a typical link building pricing sheet today shows flat rates of $400 to $500 per backlink.
  - as of: 2026-08-10
  - quote: "If you look at a typical pricing sheet today, you'll find flat rates of $400 to $500 per backlink, or rigid monthly retainers starting at $5,000."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Trade-press opinion rather than a checkable assertion. There is no operator statement about purchased mentions to find, and the pricing figures come from an article describing a market rather than from a published price list. Not unbacked so much as unfalsifiable as written.
    - searched: checked the corpus: no operator documents any position on purchased mentions
    - searched: web search alongside the Mueller trace returned only opinion pieces and agency pages
- **[echoed-claim]** Regarding unlinked brand mentions, Search Engine Land's article on the traditional link building model states that a typical link building pricing sheet today shows rigid monthly retainers starting at $5,000.
  - as of: 2026-08-10
  - quote: "If you look at a typical pricing sheet today, you'll find flat rates of $400 to $500 per backlink, or rigid monthly retainers starting at $5,000."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Trade-press opinion rather than a checkable assertion. There is no operator statement about purchased mentions to find, and the pricing figures come from an article describing a market rather than from a published price list. Not unbacked so much as unfalsifiable as written.
    - searched: checked the corpus: no operator documents any position on purchased mentions
    - searched: web search alongside the Mueller trace returned only opinion pieces and agency pages
- **[echoed-claim]** Search Engine Land's article on the traditional link building model states that buying fake brand mentions isn't a modern AEO/GEO strategy.
  - as of: 2026-08-10
  - quote: "Buying fake brand mentions isn't a modern AEO/GEO strategy."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Trade-press opinion rather than a checkable assertion. There is no operator statement about purchased mentions to find, and the pricing figures come from an article describing a market rather than from a published price list. Not unbacked so much as unfalsifiable as written.
    - searched: checked the corpus: no operator documents any position on purchased mentions
    - searched: web search alongside the Mueller trace returned only opinion pieces and agency pages

## canonical tag (6)

- **[echoed-claim]** An SEO guide published at greadme.com states that Google ignores user-declared canonical tags roughly 40% of the time when conflicting signals point to a different URL.
  - as of: 2026
  - quote: "Critically, Google treats canonicals as a hint, not a directive — and ignores yours about 40% of the time when other signals disagree."
  - quote: "It's a hint, not a rule. Google's John Mueller has stated Google ignores user-declared canonicals roughly 40% of the time when conflicting signals (sitemap, internal links, redirects) point to a different URL."
  - source: https://www.greadme.com/blog/seo/how-to-use-canonical-tags-properly-complete-guide
  - source: https://www.greadme.com/blog/seo/how-to-use-canonical-tags-properly-complete-guide
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The figure is attributed to a named person, which makes it feel checkable, and no statement by him carrying it can be found. Worth recording that the search engine's own summary answered by restating the claim, sourced from the very pages under trace - which is what an unbacked statistic looks like once it is repeated enough to become the answer.
    - searched: web search: John Mueller Google ignores canonical "40%" of the time user-declared canonical
    - searched: the results were the pages being traced (greadme.com, clickrank.ai) plus blogs restating them; no Google source and no Mueller quote carrying the figure
    - searched: checked the corpus: Google's canonicalization documentation gives no such percentage
- **[echoed-claim]** An SEO guide published at greadme.com attributes that roughly 40% figure for Google ignoring user-declared canonical tags to Google's John Mueller.
  - as of: 2026
  - quote: "Critically, Google treats canonicals as a hint, not a directive — and ignores yours about 40% of the time when other signals disagree."
  - quote: "It's a hint, not a rule. Google's John Mueller has stated Google ignores user-declared canonicals roughly 40% of the time when conflicting signals (sitemap, internal links, redirects) point to a different URL."
  - source: https://www.greadme.com/blog/seo/how-to-use-canonical-tags-properly-complete-guide
  - source: https://www.greadme.com/blog/seo/how-to-use-canonical-tags-properly-complete-guide
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The figure is attributed to a named person, which makes it feel checkable, and no statement by him carrying it can be found. Worth recording that the search engine's own summary answered by restating the claim, sourced from the very pages under trace - which is what an unbacked statistic looks like once it is repeated enough to become the answer.
    - searched: web search: John Mueller Google ignores canonical "40%" of the time user-declared canonical
    - searched: the results were the pages being traced (greadme.com, clickrank.ai) plus blogs restating them; no Google source and no Mueller quote carrying the figure
    - searched: checked the corpus: Google's canonicalization documentation gives no such percentage
- **[echoed-claim]** An SEO guide published at clickrank.ai describes canonical tags as a "strong hint" rather than a directive.
  - as of: 2026
  - quote: "Google’s John Mueller explains that canonical tags are a “strong hint” rather than a directive."
  - source: https://www.clickrank.ai/canonical-tags/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, by a document already in this corpus. The qualitative claim is Google's own position almost word for word; it is only the 40% attached to it that has no source. A true statement and an invented statistic travelling together is the pattern to watch for here.
    - source: "You can indicate your preference to Google using these techniques, but Google may choose a different page as canonical than you do, for various reasons. That is, indicating a canonical preference is a hint, not a rule."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/canonicalization
    - searched: checked the corpus first: this subject already carries Google's canonicalization documentation
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/canonicalization
- **[echoed-claim]** An SEO guide published at clickrank.ai attributes the "strong hint" characterisation of canonical tags to Google's John Mueller.
  - as of: 2026
  - quote: "Google’s John Mueller explains that canonical tags are a “strong hint” rather than a directive."
  - source: https://www.clickrank.ai/canonical-tags/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, by a document already in this corpus. The qualitative claim is Google's own position almost word for word; it is only the 40% attached to it that has no source. A true statement and an invented statistic travelling together is the pattern to watch for here.
    - source: "You can indicate your preference to Google using these techniques, but Google may choose a different page as canonical than you do, for various reasons. That is, indicating a canonical preference is a hint, not a rule."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/canonicalization
    - searched: checked the corpus first: this subject already carries Google's canonicalization documentation
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/canonicalization
- **[echoed-claim]** An SEO guide published at thestacc.com states that Google can and does ignore canonical tags when other signals contradict them.
  - as of: 2026
  - quote: "The critical detail: canonical tags are hints, not directives. Google can and does ignore canonical tags when other signals contradict them. If your canonical says "index page A" but your sitemap, internal links, and redirects all point to page B, Google will likely choose page B."
  - source: https://thestacc.com/blog/canonical-tags-guide/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, by a document already in this corpus. The qualitative claim is Google's own position almost word for word; it is only the 40% attached to it that has no source. A true statement and an invented statistic travelling together is the pattern to watch for here.
    - source: "You can indicate your preference to Google using these techniques, but Google may choose a different page as canonical than you do, for various reasons. That is, indicating a canonical preference is a hint, not a rule."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/canonicalization
    - searched: checked the corpus first: this subject already carries Google's canonicalization documentation
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/canonicalization
- **[echoed-claim]** An SEO guide published at thestacc.com states that if a canonical points to page A while the sitemap, internal links and redirects point to page B, Google will likely choose page B.
  - as of: 2026
  - quote: "The critical detail: canonical tags are hints, not directives. Google can and does ignore canonical tags when other signals contradict them. If your canonical says "index page A" but your sitemap, internal links, and redirects all point to page B, Google will likely choose page B."
  - source: https://thestacc.com/blog/canonical-tags-guide/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, by a document already in this corpus. The qualitative claim is Google's own position almost word for word; it is only the 40% attached to it that has no source. A true statement and an invented statistic travelling together is the pattern to watch for here.
    - source: "You can indicate your preference to Google using these techniques, but Google may choose a different page as canonical than you do, for various reasons. That is, indicating a canonical preference is a hint, not a rule."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/canonicalization
    - searched: checked the corpus first: this subject already carries Google's canonicalization documentation
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/canonicalization

## Chrome UX Report (CrUX) (6)

- **[echoed-claim]** A corewebvitals.io article states, regarding Chrome UX Report (CrUX), that the belief that a site must wait 28 days after deploying a fix to see whether it worked is wrong.
  - as of: 2026-07-14
  - quote: "The CrUX data is two days old, not 28. Here is what the 28-day rolling window actually means."
  - quote: "I hear it all the time: "We deployed the fix, now we have to wait 28 days to see if it worked." This is wrong. The data is not 28 days old. It is about two days old."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by the operator's own API documentation, already in this corpus. This is a case of the field repeating a CORRECTION rather than a myth - the article is debunking the 28-day-wait belief, and the sweep labelled it an echo like any other because the quote captured carried no primary source. The correction is right.
    - source: "The CrUX API documentation states that the CrUX API is approximately two days behind today's date because it waits for completed data, and that CrUX data is updated daily around 04:00 UTC."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus first: this subject already carries the CrUX API documentation
    - searched: opened https://developer.chrome.com/docs/crux/api
- **[echoed-claim]** A corewebvitals.io article states that Chrome UX Report (CrUX) data is about two days old rather than 28 days old.
  - as of: 2026-07-14
  - quote: "The CrUX data is two days old, not 28. Here is what the 28-day rolling window actually means."
  - quote: "I hear it all the time: "We deployed the fix, now we have to wait 28 days to see if it worked." This is wrong. The data is not 28 days old. It is about two days old."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by the operator's own API documentation, already in this corpus. This is a case of the field repeating a CORRECTION rather than a myth - the article is debunking the 28-day-wait belief, and the sweep labelled it an echo like any other because the quote captured carried no primary source. The correction is right.
    - source: "The CrUX API documentation states that the CrUX API is approximately two days behind today's date because it waits for completed data, and that CrUX data is updated daily around 04:00 UTC."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus first: this subject already carries the CrUX API documentation
    - searched: opened https://developer.chrome.com/docs/crux/api
- **[echoed-claim]** A corewebvitals.io article states that several popular guides, including Vercel's, incorrectly describe the CrUX figure as an average.
  - as of: 2026-07-14
  - quote: "One thing many people get wrong: this is a 75th percentile, not an average. Several popular guides (including Vercel's) incorrectly call it an average."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the substance. The corpus-tracked origin and pass-rate figures - 18.56 million origins, a 55.8% pass rate - come from the CrUX dataset reports rather than from the API page, and are dated mid-2026; they move every month, so they are the part of this that expires first.
    - source: "The CrUX API documentation states that the percentile values returned by the CrUX API are synthetically derived, and do not imply that any user actually experienced that exact value."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus: the CrUX API documentation is held and describes the percentile values it returns
    - searched: opened https://developer.chrome.com/docs/crux/api
- **[echoed-claim]** A corewebvitals.io article states that the CrUX figure is a 75th percentile.
  - as of: 2026-07-14
  - quote: "One thing many people get wrong: this is a 75th percentile, not an average. Several popular guides (including Vercel's) incorrectly call it an average."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the substance. The corpus-tracked origin and pass-rate figures - 18.56 million origins, a 55.8% pass rate - come from the CrUX dataset reports rather than from the API page, and are dated mid-2026; they move every month, so they are the part of this that expires first.
    - source: "The CrUX API documentation states that the percentile values returned by the CrUX API are synthetically derived, and do not imply that any user actually experienced that exact value."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus: the CrUX API documentation is held and describes the percentile values it returns
    - searched: opened https://developer.chrome.com/docs/crux/api
- **[echoed-claim]** A corewebvitals.io article states that CrUX currently tracks 18.56 million origins.
  - as of: 2026-07-14
  - quote: "CrUX currently tracks 18.56 million origins with a 55.8% Core Web Vitals pass rate."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the substance. The corpus-tracked origin and pass-rate figures - 18.56 million origins, a 55.8% pass rate - come from the CrUX dataset reports rather than from the API page, and are dated mid-2026; they move every month, so they are the part of this that expires first.
    - source: "The CrUX API documentation states that the percentile values returned by the CrUX API are synthetically derived, and do not imply that any user actually experienced that exact value."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus: the CrUX API documentation is held and describes the percentile values it returns
    - searched: opened https://developer.chrome.com/docs/crux/api
- **[echoed-claim]** A corewebvitals.io article states that CrUX has a 55.8% Core Web Vitals pass rate.
  - as of: 2026-07-14
  - quote: "CrUX currently tracks 18.56 million origins with a 55.8% Core Web Vitals pass rate."
  - source: https://www.corewebvitals.io/pagespeed/the-crux-28-day-delay-myth
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the substance. The corpus-tracked origin and pass-rate figures - 18.56 million origins, a 55.8% pass rate - come from the CrUX dataset reports rather than from the API page, and are dated mid-2026; they move every month, so they are the part of this that expires first.
    - source: "The CrUX API documentation states that the percentile values returned by the CrUX API are synthetically derived, and do not imply that any user actually experienced that exact value."
      Chrome for Developers https://developer.chrome.com/docs/crux/api
    - searched: checked the corpus: the CrUX API documentation is held and describes the percentile values it returns
    - searched: opened https://developer.chrome.com/docs/crux/api

## E-E-A-T (6)

- **[echoed-claim]** An article published on srutatech.com is headlined "Why E-E-A-T is Still the Most Important Ranking Factor in 2026".
  - as of: 2026-02-10
  - quote: "Why E-E-A-T is Still the Most Important Ranking Factor in 2026"
  - source: https://srutatech.com/2026/02/10/why-e-e-a-t-is-still-the-most-important-ranking-factor-in-2026/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Contradicted twice over: E-E-A-T is not a ranking factor, and the rater guidelines it comes from do not directly influence ranking - both stated by Google, both already in this corpus. A headline calling it 'still the most important ranking factor in 2026' inverts the operator's own position. What survives is weaker and duller: raters use E-E-A-T to assess whether ranking changes are working.
    - source: "Google's "Creating helpful, reliable, people-first content" documentation states that E-E-A-T itself isn't a specific ranking factor."
      Google Search Central https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: checked the corpus first: this subject already carries Google's helpful-content documentation and the 2022 blog post announcing E-E-A-T
    - searched: opened https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: opened https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t
- **[echoed-claim]** An article published on srutatech.com states that businesses which demonstrate strong E-E-A-T signals are rewarded with higher search rankings.
  - as of: 2026-02-10
  - quote: "Therefore, businesses that demonstrate strong E-E-A-T signals are rewarded with higher search rankings."
  - source: https://srutatech.com/2026/02/10/why-e-e-a-t-is-still-the-most-important-ranking-factor-in-2026/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Contradicted twice over: E-E-A-T is not a ranking factor, and the rater guidelines it comes from do not directly influence ranking - both stated by Google, both already in this corpus. A headline calling it 'still the most important ranking factor in 2026' inverts the operator's own position. What survives is weaker and duller: raters use E-E-A-T to assess whether ranking changes are working.
    - source: "Google's "Creating helpful, reliable, people-first content" documentation states that E-E-A-T itself isn't a specific ranking factor."
      Google Search Central https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: checked the corpus first: this subject already carries Google's helpful-content documentation and the 2022 blog post announcing E-E-A-T
    - searched: opened https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: opened https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t
- **[echoed-claim]** An article published on ziptie.dev states that in traditional SEO, E-E-A-T improves ranking position.
  - as of: 2026-03-06
  - quote: "In traditional SEO, E-E-A-T improves ranking position."
  - quote: "E-E-A-T for AI Search: How to Build Authority That Gets Cited by AI Engines - ZipTie.dev"
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Contradicted twice over: E-E-A-T is not a ranking factor, and the rater guidelines it comes from do not directly influence ranking - both stated by Google, both already in this corpus. A headline calling it 'still the most important ranking factor in 2026' inverts the operator's own position. What survives is weaker and duller: raters use E-E-A-T to assess whether ranking changes are working.
    - source: "Google's "Creating helpful, reliable, people-first content" documentation states that E-E-A-T itself isn't a specific ranking factor."
      Google Search Central https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: checked the corpus first: this subject already carries Google's helpful-content documentation and the 2022 blog post announcing E-E-A-T
    - searched: opened https://developers.google.com/search/docs/fundamentals/creating-helpful-content
    - searched: opened https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t
- **[echoed-claim]** An article published on ziptie.dev states that 96% of AI Overview citations come from sources with strong E-E-A-T signals.
  - as of: 2026-03-06
  - quote: "96% of AI Overview citations come from sources with strong E-E-A-T signals, based on Wellows' analysis of 2,400 citations."
  - quote: "E-E-A-T for AI Search: How to Build Authority That Gets Cited by AI Engines - ZipTie.dev"
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The best finding in this batch. The named publisher does carry the 96% and 2.3x figures, with no methodology, no date range and no dataset - and the '2,400' on that page is 2,400 REDDIT COMMENTS analysed for sentiment, not 2,400 AI Overview citations. Somewhere in the retelling a social-media sample was relabelled as a citation sample, and the relabelled version is what the field now repeats. The page also attributes its own numbers onward to 'AI Mode Boost, 2025', so even the named source is not the origin.
    - searched: web search: Wellows analysis 2,400 AI Overview citations "96%" E-E-A-T signals study
    - searched: opened the named publisher's own page at https://wellows.com/blog/google-ai-overviews-ranking-factors/
    - searched: checked that page for the 2,400 sample, the 96% figure, a methodology, a date range and a dataset link
- **[echoed-claim]** An article published on ziptie.dev attributes the 96% figure for AI Overview citations from sources with strong E-E-A-T signals to Wellows' analysis of 2,400 citations.
  - as of: 2026-03-06
  - quote: "96% of AI Overview citations come from sources with strong E-E-A-T signals, based on Wellows' analysis of 2,400 citations."
  - quote: "E-E-A-T for AI Search: How to Build Authority That Gets Cited by AI Engines - ZipTie.dev"
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The best finding in this batch. The named publisher does carry the 96% and 2.3x figures, with no methodology, no date range and no dataset - and the '2,400' on that page is 2,400 REDDIT COMMENTS analysed for sentiment, not 2,400 AI Overview citations. Somewhere in the retelling a social-media sample was relabelled as a citation sample, and the relabelled version is what the field now repeats. The page also attributes its own numbers onward to 'AI Mode Boost, 2025', so even the named source is not the origin.
    - searched: web search: Wellows analysis 2,400 AI Overview citations "96%" E-E-A-T signals study
    - searched: opened the named publisher's own page at https://wellows.com/blog/google-ai-overviews-ranking-factors/
    - searched: checked that page for the 2,400 sample, the 96% figure, a methodology, a date range and a dataset link
- **[echoed-claim]** An article published on ziptie.dev states that pages ranking #6-#10 with strong E-E-A-T are cited 2.3x more frequently than #1-ranked pages with weak E-E-A-T.
  - as of: 2026-03-06
  - quote: "The implication is stark: pages ranking #6-#10 with strong E-E-A-T are cited 2.3x more frequently than #1-ranked pages with weak E-E-A-T."
  - quote: "E-E-A-T for AI Search: How to Build Authority That Gets Cited by AI Engines - ZipTie.dev"
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - source: https://ziptie.dev/blog/eeat-for-ai-search/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The best finding in this batch. The named publisher does carry the 96% and 2.3x figures, with no methodology, no date range and no dataset - and the '2,400' on that page is 2,400 REDDIT COMMENTS analysed for sentiment, not 2,400 AI Overview citations. Somewhere in the retelling a social-media sample was relabelled as a citation sample, and the relabelled version is what the field now repeats. The page also attributes its own numbers onward to 'AI Mode Boost, 2025', so even the named source is not the origin.
    - searched: web search: Wellows analysis 2,400 AI Overview citations "96%" E-E-A-T signals study
    - searched: opened the named publisher's own page at https://wellows.com/blog/google-ai-overviews-ranking-factors/
    - searched: checked that page for the 2,400 sample, the 96% figure, a methodology, a date range and a dataset link

## meta description (6)

- **[echoed-claim]** Yoast's guide to creating a good meta description states that the limit to what can be seen in Google's search results is around 155 characters.
  - as of: 2025-06-23
  - quote: "Google says you can make your meta descriptions as long as you want, but there is a limit to what we can see in the SERPs — and that's around 155 characters; anything longer will get truncated."
  - source: https://yoast.com/meta-descriptions/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - The operator states there is no limit, and that truncation is a function of the DEVICE rather than a character count. The 155 that the field treats as a rule is a measurement of one device width restated as a specification. Writing to it is not harmful, but it is not what Google documents, and the number has no source at Google.
    - source: "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width."
      Google Search Central https://developers.google.com/search/docs/appearance/snippet
    - searched: checked the corpus first: this subject already carries Google's own snippet documentation
    - searched: opened https://developers.google.com/search/docs/appearance/snippet
- **[echoed-claim]** Yoast's guide to creating a good meta description states that anything longer will get truncated.
  - as of: 2025-06-23
  - quote: "Google says you can make your meta descriptions as long as you want, but there is a limit to what we can see in the SERPs — and that's around 155 characters; anything longer will get truncated."
  - source: https://yoast.com/meta-descriptions/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - The operator states there is no limit, and that truncation is a function of the DEVICE rather than a character count. The 155 that the field treats as a rule is a measurement of one device width restated as a specification. Writing to it is not harmful, but it is not what Google documents, and the number has no source at Google.
    - source: "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width."
      Google Search Central https://developers.google.com/search/docs/appearance/snippet
    - searched: checked the corpus first: this subject already carries Google's own snippet documentation
    - searched: opened https://developers.google.com/search/docs/appearance/snippet
- **[echoed-claim]** A meta description gives you roughly 155 characters to describe what your page is about.
  - as of: 2025-06-23
  - quote: "The meta description is an HTML tag you can set for a post or page of your website. In it, you can use roughly 155 characters to describe what your page is about."
  - source: https://yoast.com/meta-descriptions/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - The operator states there is no limit, and that truncation is a function of the DEVICE rather than a character count. The 155 that the field treats as a rule is a measurement of one device width restated as a specification. Writing to it is not harmful, but it is not what Google documents, and the number has no source at Google.
    - source: "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width."
      Google Search Central https://developers.google.com/search/docs/appearance/snippet
    - searched: checked the corpus first: this subject already carries Google's own snippet documentation
    - searched: opened https://developers.google.com/search/docs/appearance/snippet
- **[echoed-claim]** Yoast's guide to creating a good meta description asserts that a strong meta description boosts click-through rate.
  - as of: 2025-06-23
  - quote: "A strong meta description boosts CTR and signals relevance to search engines."
  - source: https://yoast.com/meta-descriptions/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Contradicted by Google directly, and for seventeen years. The claim survives because it is bundled with a true one: a good description plausibly helps click-through, which is not the same as signalling relevance to the ranking system. The compound sentence carries the false half on the back of the plausible half.
    - source: "Even though we sometimes use the description meta tag for the snippets we show, we still don't use the description meta tag in our ranking."
      Google Search Central Blog https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
    - searched: web search: Google 2009 "meta description" not used ranking Search Central blog official statement
    - searched: opened https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
- **[echoed-claim]** Yoast's guide to creating a good meta description asserts that a strong meta description signals relevance to search engines.
  - as of: 2025-06-23
  - quote: "A strong meta description boosts CTR and signals relevance to search engines."
  - source: https://yoast.com/meta-descriptions/
  - **A PRIMARY SOURCE SAYS THE OPPOSITE** (checked 2026-08-14)
    - Contradicted by Google directly, and for seventeen years. The claim survives because it is bundled with a true one: a good description plausibly helps click-through, which is not the same as signalling relevance to the ranking system. The compound sentence carries the false half on the back of the plausible half.
    - source: "Even though we sometimes use the description meta tag for the snippets we show, we still don't use the description meta tag in our ranking."
      Google Search Central Blog https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
    - searched: web search: Google 2009 "meta description" not used ranking Search Central blog official statement
    - searched: opened https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
- **[echoed-claim]** Search Engine Journal's ranking-factors article on meta descriptions states that Google has not used the meta description as a search ranking signal since sometime between 1999 and 2003-04.
  - as of: 2022-02-09
  - quote: "Google does not use the meta description as a search ranking signal and hasn't since sometime between 1999 and 2003-04."
  - source: https://www.searchenginejournal.com/ranking-factors/meta-descriptions/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by the primary post, which is chiefly about the keywords meta tag but states the description position in the same breath. Worth keeping next to the contradicted claim above: the field simultaneously repeats that meta descriptions do not affect ranking and that they signal relevance.
    - source: "Even though we sometimes use the description meta tag for the snippets we show, we still don't use the description meta tag in our ranking."
      Google Search Central Blog https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
    - searched: web search: Google 2009 "meta description" not used ranking Search Central blog official statement
    - searched: opened the primary announcement at https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag

## AI Overviews (5)

- **[echoed-claim]** A vendor page asserts in the present tense that AI Overviews now reduce clicks to websites by 34.5%.
  - as of: 2026-08-11
  - quote: "The data paints a stark picture: AI Overviews now reduce clicks to websites by 34.5%, with 60% of searches resulting in zero clicks."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Half backed, half floating. The 34.5% is a real Ahrefs measurement of a specific comparison - top-ranking page, with an AI Overview versus without - and the vendor page restates it in the present tense as a general effect on all clicks, which is a wider claim than the study makes. The 60% zero-click figure is not in anything held here and is not attributed on the page repeating it.
    - source: "Ahrefs measured a 34.5% lower average clickthrough rate for the top-ranking page when an AI Overview was present."
      Ahrefs https://ahrefs.com/blog/ai-overviews-reduce-clicks/
    - searched: checked the corpus first: this subject already carries the measured studies, including Ahrefs' 34.5% and Pew's 8%-versus-15% comparison
    - searched: checked whether any held source states the 60% zero-click figure
- **[echoed-claim]** A vendor page asserts in the present tense that, with AI Overviews, 60% of searches result in zero clicks.
  - as of: 2026-08-11
  - quote: "The data paints a stark picture: AI Overviews now reduce clicks to websites by 34.5%, with 60% of searches resulting in zero clicks."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Half backed, half floating. The 34.5% is a real Ahrefs measurement of a specific comparison - top-ranking page, with an AI Overview versus without - and the vendor page restates it in the present tense as a general effect on all clicks, which is a wider claim than the study makes. The 60% zero-click figure is not in anything held here and is not attributed on the page repeating it.
    - source: "Ahrefs measured a 34.5% lower average clickthrough rate for the top-ranking page when an AI Overview was present."
      Ahrefs https://ahrefs.com/blog/ai-overviews-reduce-clicks/
    - searched: checked the corpus first: this subject already carries the measured studies, including Ahrefs' 34.5% and Pew's 8%-versus-15% comparison
    - searched: checked whether any held source states the 60% zero-click figure
- **[echoed-claim]** According to a vendor page, Google's AI Overviews had over 1.5 billion users per month in Q1 2025.
  - as of: 2026-08-11
  - quote: "More critically, Google's AI Overviews had over 1.5 billion users per month in Q1 2025, representing 26.6% of all internet users globally."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by the company itself. The '26.6% of all internet users globally' half of the retelling is a derived statistic - someone divided 1.5 billion by a global internet population - and is not something Alphabet said. By July 2025 the same company reported 2 billion, so the figure is also stale wherever it is quoted in the present tense.
    - source: "AI Overviews is going very well with over 1.5 billion users per month."
      Alphabet (CEO remarks, Q1 2025 earnings) https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2025/
    - searched: web search: Google AI Overviews "1.5 billion" users per month Pichai earnings call Q1 2025
    - searched: traced to Alphabet's own Q1 2025 earnings remarks published on blog.google
- **[echoed-claim]** According to a vendor page, Google's AI Overviews' user count in Q1 2025 represented 26.6% of all internet users globally.
  - as of: 2026-08-11
  - quote: "More critically, Google's AI Overviews had over 1.5 billion users per month in Q1 2025, representing 26.6% of all internet users globally."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by the company itself. The '26.6% of all internet users globally' half of the retelling is a derived statistic - someone divided 1.5 billion by a global internet population - and is not something Alphabet said. By July 2025 the same company reported 2 billion, so the figure is also stale wherever it is quoted in the present tense.
    - source: "AI Overviews is going very well with over 1.5 billion users per month."
      Alphabet (CEO remarks, Q1 2025 earnings) https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2025/
    - searched: web search: Google AI Overviews "1.5 billion" users per month Pichai earnings call Q1 2025
    - searched: traced to Alphabet's own Q1 2025 earnings remarks published on blog.google
- **[echoed-claim]** A vendor page asserts that 70% of sources cited in AI Overviews come from Google's top 10 organic results.
  - as of: 2026-08-11
  - quote: "Meanwhile, 70% of sources cited in AI Overviews come from Google's top 10 organic results, highlighting the symbiotic yet fundamentally different relationship between traditional and AI search."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - An unattributed round number about a much-studied question. Published overlap estimates vary widely with method and sample, which is why the ones held here are quoted with their sample; a bare 70% with no source cannot be placed among them.
    - searched: checked the corpus: the AI Overviews subject holds several citation-overlap studies, none reporting a 70% figure
    - searched: the vendor page attributes it to nobody, so there is no named study, author or sample to search for

## site reputation abuse (5)

- **[echoed-claim]** Google has indicated plans for algorithmic updates to automate the detection and demotion of site reputation abuse in the future.
  - as of: 2024-12-05
  - quote: "While enforcement currently relies on manual actions, Google has indicated plans for algorithmic updates to automate the detection and demotion of site reputation abuse in the future."
  - source: https://www.searchenginejournal.com/google-strengthens-policy-against-site-reputation-abuse/533018/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retold date is defensible rather than wrong: the POLICY began 5 May 2024 and the manual actions began 6 May, which is the distinction SearchLiaison drew at the time. The retelling calls 6 May 'the exact date Google started punishing websites', which is right about enforcement and wrong about the policy. A rare case where the repeated version is more precise than a casual reading of the policy page.
    - source: "It'll be starting later today. While the policy began yesterday, the enforcement is really kicking off today."
      Search Engine Roundtable, quoting Google SearchLiaison https://www.seroundtable.com/google-enforcing-site-reputation-abuse-policy-37346.html
    - searched: web search: Google site reputation abuse policy enforcement begins "May 5, 2024" manual actions announcement
    - searched: checked the corpus: Google's November 2024 policy update post is already held
    - searched: traced the date distinction to Search Engine Roundtable's contemporaneous report of Google SearchLiaison
- **[echoed-claim]** Enforcement of site reputation abuse currently relies on manual actions.
  - as of: 2024-12-05
  - quote: "While enforcement currently relies on manual actions, Google has indicated plans for algorithmic updates to automate the detection and demotion of site reputation abuse in the future."
  - source: https://www.searchenginejournal.com/google-strengthens-policy-against-site-reputation-abuse/533018/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retold date is defensible rather than wrong: the POLICY began 5 May 2024 and the manual actions began 6 May, which is the distinction SearchLiaison drew at the time. The retelling calls 6 May 'the exact date Google started punishing websites', which is right about enforcement and wrong about the policy. A rare case where the repeated version is more precise than a casual reading of the policy page.
    - source: "It'll be starting later today. While the policy began yesterday, the enforcement is really kicking off today."
      Search Engine Roundtable, quoting Google SearchLiaison https://www.seroundtable.com/google-enforcing-site-reputation-abuse-policy-37346.html
    - searched: web search: Google site reputation abuse policy enforcement begins "May 5, 2024" manual actions announcement
    - searched: checked the corpus: Google's November 2024 policy update post is already held
    - searched: traced the date distinction to Search Engine Roundtable's contemporaneous report of Google SearchLiaison
- **[echoed-claim]** khalidseo.com states that a website can lose 50 to 100 percent of its traffic in just one day if it is caught breaking Google's site reputation abuse rule.
  - as of: 2026-04-09
  - quote: "50 to 100 percent: The amount of traffic (visitors) a website can lose in just one day if they get caught. Some sites saw their daily visitors drop to almost zero!"
  - source: https://khalidseo.com/google-site-reputation-abuse-guide/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Named sites were demoted heavily and that is well reported, but a 50-to-100-percent range stated as a rule has no measurement behind it. The range is also wide enough to be unfalsifiable: any observed drop lands inside it. The related advice about white-label partnerships needing editorial review is opinion, and Google's own position is narrower - third-party content alone is not a violation.
    - searched: checked the corpus: Google's spam policy pages and the November 2024 update describe manual actions and remedies, and quantify no traffic outcome
    - searched: web search alongside the enforcement-date trace surfaced only agency posts and case studies with no shared methodology
- **[echoed-claim]** khalidseo.com states that May 6, 2024 is the exact date Google started punishing websites for the site reputation abuse rule.
  - as of: 2026-04-09
  - quote: "May 6, 2024: The exact date Google started punishing websites for this rule."
  - source: https://khalidseo.com/google-site-reputation-abuse-guide/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the retold date is defensible rather than wrong: the POLICY began 5 May 2024 and the manual actions began 6 May, which is the distinction SearchLiaison drew at the time. The retelling calls 6 May 'the exact date Google started punishing websites', which is right about enforcement and wrong about the policy. A rare case where the repeated version is more precise than a casual reading of the policy page.
    - source: "It'll be starting later today. While the policy began yesterday, the enforcement is really kicking off today."
      Search Engine Roundtable, quoting Google SearchLiaison https://www.seroundtable.com/google-enforcing-site-reputation-abuse-policy-37346.html
    - searched: web search: Google site reputation abuse policy enforcement begins "May 5, 2024" manual actions announcement
    - searched: checked the corpus: Google's November 2024 policy update post is already held
    - searched: traced the date distinction to Search Engine Roundtable's contemporaneous report of Google SearchLiaison
- **[echoed-claim]** khalidseo.com states that even white-label partnerships require strict, hands-on editorial review to stay within Google's site reputation abuse policy.
  - as of: 2026-04-09
  - quote: "The Google Search Quality Team no longer accepts excuses. Even white-label partnerships require strict, hands-on editorial review."
  - source: https://khalidseo.com/google-site-reputation-abuse-guide/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Named sites were demoted heavily and that is well reported, but a 50-to-100-percent range stated as a rule has no measurement behind it. The range is also wide enough to be unfalsifiable: any observed drop lands inside it. The related advice about white-label partnerships needing editorial review is opinion, and Google's own position is narrower - third-party content alone is not a violation.
    - searched: checked the corpus: Google's spam policy pages and the November 2024 update describe manual actions and remedies, and quantify no traffic outcome
    - searched: web search alongside the enforcement-date trace surfaced only agency posts and case studies with no shared methodology

## Backlinks (4)

- **[echoed-claim]** Search Engine Roundtable's report contains the backlinks quote "We need very few links to rank pages... Over the years we've made links less important".
  - as of: 2024-04-22
  - quote: "Gary reportedly said, "We need very few links to rank pages... Over the years we've made links less important." I am quoting Patrick Stox who is quoting what he heard Gary say on stage at the event."
  - source: https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed at the end of a three-hop chain - a conference remark, relayed on social media, reported by trade press - and the speaker confirmed it, replying 'I shouldn't have said that'. Worth noting that this sweep's own record of the claim already named every hop, which is more careful than most of the pages repeating it, and is why the chain could be checked at all.
    - source: "We need very few links to rank pages... Over the years we've made links less important."
      Search Engine Roundtable, via Patrick Stox, quoting Gary Illyes at SERP Conf https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
    - searched: web search: Gary Illyes "we need very few links to rank pages" Patrick Stox conference quote source
    - searched: traced the chain: Search Engine Roundtable reporting Patrick Stox's post reporting a remark at SERP Conf, Bulgaria, April 2024, with Illyes replying to it himself
- **[echoed-claim]** Search Engine Roundtable's report states that the backlinks quote was Barry Schwartz quoting Patrick Stox.
  - as of: 2024-04-22
  - quote: "Gary reportedly said, "We need very few links to rank pages... Over the years we've made links less important." I am quoting Patrick Stox who is quoting what he heard Gary say on stage at the event."
  - source: https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed at the end of a three-hop chain - a conference remark, relayed on social media, reported by trade press - and the speaker confirmed it, replying 'I shouldn't have said that'. Worth noting that this sweep's own record of the claim already named every hop, which is more careful than most of the pages repeating it, and is why the chain could be checked at all.
    - source: "We need very few links to rank pages... Over the years we've made links less important."
      Search Engine Roundtable, via Patrick Stox, quoting Gary Illyes at SERP Conf https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
    - searched: web search: Gary Illyes "we need very few links to rank pages" Patrick Stox conference quote source
    - searched: traced the chain: Search Engine Roundtable reporting Patrick Stox's post reporting a remark at SERP Conf, Bulgaria, April 2024, with Illyes replying to it himself
- **[echoed-claim]** Search Engine Roundtable's report states that the backlinks quote was Patrick Stox quoting what Stox heard Gary Illyes say on stage.
  - as of: 2024-04-22
  - quote: "Gary reportedly said, "We need very few links to rank pages... Over the years we've made links less important." I am quoting Patrick Stox who is quoting what he heard Gary say on stage at the event."
  - source: https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed at the end of a three-hop chain - a conference remark, relayed on social media, reported by trade press - and the speaker confirmed it, replying 'I shouldn't have said that'. Worth noting that this sweep's own record of the claim already named every hop, which is more careful than most of the pages repeating it, and is why the chain could be checked at all.
    - source: "We need very few links to rank pages... Over the years we've made links less important."
      Search Engine Roundtable, via Patrick Stox, quoting Gary Illyes at SERP Conf https://www.seroundtable.com/google-very-few-links-needed-rank-pages-37267.html
    - searched: web search: Gary Illyes "we need very few links to rank pages" Patrick Stox conference quote source
    - searched: traced the chain: Search Engine Roundtable reporting Patrick Stox's post reporting a remark at SERP Conf, Bulgaria, April 2024, with Illyes replying to it himself
- **[echoed-claim]** A Search Engine Land article on link building states that typical link building pricing sheets show flat rates of $400 to $500 per backlink or rigid monthly retainers starting at $5,000, based on the author's own audits of vendor proposals rather than a stated sample.
  - as of: 2026-08-10
  - quote: "Over the years, I’ve personally tested dozens of link building services and audited countless vendor proposals. If you look at a typical pricing sheet today, you’ll find flat rates of $400 to $500 per backlink, or rigid monthly retainers starting at $5,000."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Trade-press description of a market rather than a checkable figure. There may well be price sheets that say this; none is published or named, so the range cannot be verified or refuted. Unfalsifiable as written rather than unbacked.
    - searched: checked the corpus: no published price list is held, and no operator has a position on this
    - searched: the citing article describes a market from experience and names no survey, sample or published sheet

## Bing Webmaster Tools (4)

- **[echoed-claim]** The Bing Webmaster blog's March 2025 post on Search Performance builds its worked example around an explicitly fictional eco-friendly e-commerce business.
  - as of: 2025-03-18
  - quote: "Imagine an eco-friendly e-commerce business selling reusable bags, biodegradable cleaning supplies, and sustainable home goods is facing a significant challenge. Like many companies , this fictional business is focused on growing their online store and several local outlets and needs to increase market reach and attract more environmentally conscious customers."
  - source: https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-with-Bing-Webmaster-Tools
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The most quietly dangerous shape on this page. The source is real, first-party and correctly cited - and the numbers in it are FICTION BY CONSTRUCTION, invented to illustrate how a report works. Nothing was measured. A figure like this needs no misquotation to become false; it only needs to be repeated outside the paragraph that says it is made up.
    - source: "The Bing Webmaster blog's March 2025 post on Search Performance builds its worked example around an explicitly fictional eco-friendly store."
      Bing Webmaster blog https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-
    - searched: checked the corpus first: the Bing Webmaster blog post these figures come from is already held
    - searched: read the post's own framing of the example
- **[echoed-claim]** The Bing Webmaster blog's March 2025 post states that an Earth Day promotion increased clicks by 25%.
  - as of: 2025-03-18
  - quote: "For instance, their Earth Day promotion not only increased clicks by 25% and impressions by 20%, but also significantly boosted customer engagement on social media, leading to a 30% rise in brand mentions."
  - source: https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-with-Bing-Webmaster-Tools
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The most quietly dangerous shape on this page. The source is real, first-party and correctly cited - and the numbers in it are FICTION BY CONSTRUCTION, invented to illustrate how a report works. Nothing was measured. A figure like this needs no misquotation to become false; it only needs to be repeated outside the paragraph that says it is made up.
    - source: "The Bing Webmaster blog's March 2025 post on Search Performance builds its worked example around an explicitly fictional eco-friendly store."
      Bing Webmaster blog https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-
    - searched: checked the corpus first: the Bing Webmaster blog post these figures come from is already held
    - searched: read the post's own framing of the example
- **[echoed-claim]** The Bing Webmaster blog's March 2025 post states that an Earth Day promotion increased impressions by 20%.
  - as of: 2025-03-18
  - quote: "For instance, their Earth Day promotion not only increased clicks by 25% and impressions by 20%, but also significantly boosted customer engagement on social media, leading to a 30% rise in brand mentions."
  - source: https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-with-Bing-Webmaster-Tools
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The most quietly dangerous shape on this page. The source is real, first-party and correctly cited - and the numbers in it are FICTION BY CONSTRUCTION, invented to illustrate how a report works. Nothing was measured. A figure like this needs no misquotation to become false; it only needs to be repeated outside the paragraph that says it is made up.
    - source: "The Bing Webmaster blog's March 2025 post on Search Performance builds its worked example around an explicitly fictional eco-friendly store."
      Bing Webmaster blog https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-
    - searched: checked the corpus first: the Bing Webmaster blog post these figures come from is already held
    - searched: read the post's own framing of the example
- **[echoed-claim]** The Bing Webmaster blog's March 2025 post states that an Earth Day promotion led to a 30% rise in brand mentions.
  - as of: 2025-03-18
  - quote: "For instance, their Earth Day promotion not only increased clicks by 25% and impressions by 20%, but also significantly boosted customer engagement on social media, leading to a 30% rise in brand mentions."
  - source: https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-with-Bing-Webmaster-Tools
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The most quietly dangerous shape on this page. The source is real, first-party and correctly cited - and the numbers in it are FICTION BY CONSTRUCTION, invented to illustrate how a report works. Nothing was measured. A figure like this needs no misquotation to become false; it only needs to be repeated outside the paragraph that says it is made up.
    - source: "The Bing Webmaster blog's March 2025 post on Search Performance builds its worked example around an explicitly fictional eco-friendly store."
      Bing Webmaster blog https://blogs.bing.com/webmaster/March-2025/Supercharge-Your-Search-Performance-
    - searched: checked the corpus first: the Bing Webmaster blog post these figures come from is already held
    - searched: read the post's own framing of the example

## core update (4)

- **[echoed-claim]** Search Engine Journal published an article about the March 2024 core update headlined "Google March 2024 Core Update: Reducing 'Unhelpful' Content By 40%".
  - as of: 2024-03-05
  - quote: "Google March 2024 Core Update: Reducing "Unhelpful" Content By 40%"
  - quote: "The update aims to reduce low-quality, unoriginal content in search results by 40%."
  - source: https://www.searchenginejournal.com/google-march-2024-core-update/510243/
  - source: https://www.searchenginejournal.com/google-march-2024-core-update/510243/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by Google twice: a 40% expectation, then a 45% claim on 26 April 2024. Worth noting that both figures are Google measuring its own update against its own definition of low quality, which nobody outside Google can reproduce. That does not make it wrong; it makes it a documented position rather than a measured finding, and it is repeated as the latter.
    - source: "Google had expected the March 2024 core update to produce a 40% improvement in low-quality, unoriginal content in search results, and its updated announcement stated that searchers would see 45% less low-quality, unoriginal content."
      Google https://blog.google/products-and-platforms/products/search/google-search-update-march
    - searched: checked the corpus first: Google's own March 2024 announcement and its April 2024 update are both held
    - searched: opened https://blog.google/products-and-platforms/products/search/google-search-update-march
- **[echoed-claim]** Amsive's published winners-and-losers analysis of Google's March 2026 core update was produced by analysing SISTRIX Visibility Index data.
  - as of: 2026-04-30
  - quote: "By analyzing SISTRIX Visibility Index data, we can see the immediate absolute and percentage changes in organic visibility across the largest movers of the update."
  - quote: "Google March 2026 Core Update: Winners, Losers & Analysis | Amsive"
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and unusually well documented for this page: a named index, a stated sample, a stated method and stated dates, published by the people who did the work. The caveat travels with it in our record too - SISTRIX measures keyword-level visibility, not traffic - which is the distinction most coverage of core updates drops. Read as a description of what moved, it holds; read as a cause, nobody outside Google can establish that.
    - source: "Amsive analysed over 2,000 domains using SISTRIX Visibility Index data, tagged with Google Product Taxonomy via the DataForSEO API, comparing visibility on March 27 at rollout start against April 8 at rollout completion."
      Amsive https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
    - searched: web search: Amsive March 2026 Google core update winners losers SISTRIX visibility analysis
    - searched: opened the publisher's own analysis at https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
- **[echoed-claim]** Amsive's winners-and-losers analysis of Google's March 2026 core update states as a caveat that SISTRIX measures keyword-level visibility, not raw organic traffic.
  - as of: 2026-04-30
  - quote: "A few caveats up front: SISTRIX measures keyword-level visibility, not raw organic traffic."
  - quote: "Google March 2026 Core Update: Winners, Losers & Analysis | Amsive"
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and unusually well documented for this page: a named index, a stated sample, a stated method and stated dates, published by the people who did the work. The caveat travels with it in our record too - SISTRIX measures keyword-level visibility, not traffic - which is the distinction most coverage of core updates drops. Read as a description of what moved, it holds; read as a cause, nobody outside Google can establish that.
    - source: "Amsive analysed over 2,000 domains using SISTRIX Visibility Index data, tagged with Google Product Taxonomy via the DataForSEO API, comparing visibility on March 27 at rollout start against April 8 at rollout completion."
      Amsive https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
    - searched: web search: Amsive March 2026 Google core update winners losers SISTRIX visibility analysis
    - searched: opened the publisher's own analysis at https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
- **[echoed-claim]** Amsive's analysis of Google's March 2026 core update states that Google appears to be dialing back the visibility of platforms that aggregate, host, or syndicate other people's content while elevating the sites that originally created it.
  - as of: 2026-04-30
  - quote: "with the March 2026 Core Update, Google appears to be dialing back the visibility of platforms that aggregate, host, or syndicate other people's content , while elevating the sites that originally created it"
  - quote: "Google March 2026 Core Update: Winners, Losers & Analysis | Amsive"
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - source: https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and unusually well documented for this page: a named index, a stated sample, a stated method and stated dates, published by the people who did the work. The caveat travels with it in our record too - SISTRIX measures keyword-level visibility, not traffic - which is the distinction most coverage of core updates drops. Read as a description of what moved, it holds; read as a cause, nobody outside Google can establish that.
    - source: "Amsive analysed over 2,000 domains using SISTRIX Visibility Index data, tagged with Google Product Taxonomy via the DataForSEO API, comparing visibility on March 27 at rollout start against April 8 at rollout completion."
      Amsive https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/
    - searched: web search: Amsive March 2026 Google core update winners losers SISTRIX visibility analysis
    - searched: opened the publisher's own analysis at https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/

## AI-generated content (3)

- **[echoed-claim]** The Europol report line says AI-generated content may account for as much as 90 percent of online content by 2026.
  - as of: 2022-09-18
  - quote: "Experts: 90% of Online Content Will Be AI-Generated by 2026"
  - quote: "“Don’t believe everything you see on the Internet” has been pretty standard advice for quite some time now. And according to a new report from European law enforcement group Europol, we have all the reason in the world to step up that vigilance."
  - quote: "“Experts estimate that as much as 90 percent of online content may be synthetically generated by 2026,” the report warned, adding that synthetic media “refers to media generated or manipulated using artificial intelligence.”"
  - source: https://futurism.com/the-byte/experts-90-online-content-ai-generated
  - source: https://futurism.com/the-byte/experts-90-online-content-ai-generated
  - source: https://futurism.com/the-byte/experts-90-online-content-ai-generated
  - **BACKING FOUND** (checked 2026-08-14)
    - The source is real and says it, so the attribution is sound - but what it is has been lost in transit. This is a FORECAST from a 2022 strategic-foresight exercise about synthetic media, hedged with 'may be', not a measurement of anything. It is repeated in the present tense as an established figure. It is also now testable: the target year has arrived, and nobody repeating it appears to have checked.
    - source: "As much as 90 percent of online content may be synthetically generated by 2026."
      Europol Innovation Lab https://www.europol.europa.eu/cms/sites/default/files/documents/Europol_Innovation_Lab_Facing_Reality_Law_Enforcement_And_The_Challenge_Of_Deepfakes.pdf
    - searched: web search: Europol report "90 percent" of online content AI-generated by 2026 original source
    - searched: traced to the Europol Innovation Lab report 'Facing Reality? Law enforcement and the challenge of deepfakes'
- **[echoed-claim]** The thestacc.com article "AI Content Statistics 2026: 74% of New Pages Use AI (50+ Stats)" restates the Ahrefs 74.2% figure about AI-generated content as a 2026 statistic.
  - as of: 2026-07-09
  - quote: "AI Content Statistics 2026: 74% of New Pages Use AI (50+ Stats)"
  - quote: "74.2% of newly created web pages now contain AI-generated content. That number comes from an Ahrefs study of 900,000 pages published in April 2025. Only 2.5% are pure AI. The rest are human-AI blends."
  - source: https://thestacc.com/blog/ai-content-statistics/
  - source: https://thestacc.com/blog/ai-content-statistics/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with a sample and a method, which is more than most figures on this page manage. The precision to watch is what 74.2% MEANS: it is pages containing ANY AI-generated text, and the same study puts pure-AI pages at 2.5%. Headlines that render it as '74% of new pages are AI-written' are describing the 2.5% number using the 74.2% one.
    - source: "900,000 English-language web pages, each from a unique domain discovered by our crawler in April 2025: 2.5% were categorized as pure AI, 25.8% as pure human, and 71.7% as a mix of the two."
      Ahrefs https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated
    - searched: web search: Ahrefs study "74.2%" new pages AI generated content April 2025
    - searched: traced to Ahrefs' own write-up of its bot_or_not detector run over 900,000 newly discovered pages
- **[echoed-claim]** The Ahrefs 74.2% figure about AI-generated content is from April 2025 data.
  - as of: 2026-07-09
  - quote: "AI Content Statistics 2026: 74% of New Pages Use AI (50+ Stats)"
  - quote: "74.2% of newly created web pages now contain AI-generated content. That number comes from an Ahrefs study of 900,000 pages published in April 2025. Only 2.5% are pure AI. The rest are human-AI blends."
  - source: https://thestacc.com/blog/ai-content-statistics/
  - source: https://thestacc.com/blog/ai-content-statistics/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with a sample and a method, which is more than most figures on this page manage. The precision to watch is what 74.2% MEANS: it is pages containing ANY AI-generated text, and the same study puts pure-AI pages at 2.5%. Headlines that render it as '74% of new pages are AI-written' are describing the 2.5% number using the 74.2% one.
    - source: "900,000 English-language web pages, each from a unique domain discovered by our crawler in April 2025: 2.5% were categorized as pure AI, 25.8% as pure human, and 71.7% as a mix of the two."
      Ahrefs https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated
    - searched: web search: Ahrefs study "74.2%" new pages AI generated content April 2025
    - searched: traced to Ahrefs' own write-up of its bot_or_not detector run over 900,000 newly discovered pages

## IndexNow (3)

- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help drive more relevant traffic to your site.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed in the narrow sense that the operator of the protocol says it, on its own page - which makes it a documented position rather than a repetition, and this looks like a mislabelling on our side rather than an echo in the field. Worth separating what the operator DOCUMENTS from what it CLAIMS FOR ITSELF: 'unprecedented control' is marketing, and nothing here measures how quickly anything is actually discovered.
    - source: "IndexNow is a free, open-source protocol empowering website owners with unprecedented control over how quickly their content is discovered and displayed in search results."
      Bing Webmaster Tools https://www.bing.com/webmasters/url-submission-api
    - searched: checked the corpus first: these claims cite Bing's own 'Why IndexNow' page, which is already held here
    - searched: opened https://www.bing.com/indexnow/getstarted
- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help improve search engine rankings.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed in the narrow sense that the operator of the protocol says it, on its own page - which makes it a documented position rather than a repetition, and this looks like a mislabelling on our side rather than an echo in the field. Worth separating what the operator DOCUMENTS from what it CLAIMS FOR ITSELF: 'unprecedented control' is marketing, and nothing here measures how quickly anything is actually discovered.
    - source: "IndexNow is a free, open-source protocol empowering website owners with unprecedented control over how quickly their content is discovered and displayed in search results."
      Bing Webmaster Tools https://www.bing.com/webmasters/url-submission-api
    - searched: checked the corpus first: these claims cite Bing's own 'Why IndexNow' page, which is already held here
    - searched: opened https://www.bing.com/indexnow/getstarted
- **[echoed-claim]** Bing Webmaster Tools' "Why IndexNow" page asserts that syncing content through timely updates or removals from search engine listings can help lower crawl costs.
  - as of: 2026-08-11
  - quote: "Syncing your content through timely updates or removals from search engine listings can help drive more relevant traffic to your site, improve search engine rankings, and lower crawl costs."
  - source: https://www.bing.com/webmasters/url-submission-api
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed in the narrow sense that the operator of the protocol says it, on its own page - which makes it a documented position rather than a repetition, and this looks like a mislabelling on our side rather than an echo in the field. Worth separating what the operator DOCUMENTS from what it CLAIMS FOR ITSELF: 'unprecedented control' is marketing, and nothing here measures how quickly anything is actually discovered.
    - source: "IndexNow is a free, open-source protocol empowering website owners with unprecedented control over how quickly their content is discovered and displayed in search results."
      Bing Webmaster Tools https://www.bing.com/webmasters/url-submission-api
    - searched: checked the corpus first: these claims cite Bing's own 'Why IndexNow' page, which is already held here
    - searched: opened https://www.bing.com/indexnow/getstarted

## JavaScript rendering (3)

- **[echoed-claim]** Vercel's blog post on how Google handles JavaScript lists 'Google can't render client-side JavaScript' as one of a number of old beliefs.
  - as of: 2024-07-31
  - quote: "We've noticed that a number of old beliefs have stuck around and kept the community unsure about best practices for application SEO:"
  - quote: ""Google can't render client-side JavaScript.""
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed: Googlebot does render JavaScript, so the old belief is genuinely obsolete for GOOGLE. The trap is generalising the correction, because the same corpus holds Vercel's measurement that the ChatGPT and Claude crawlers do not execute JavaScript at all. 'Crawlers render JS now' is true of one crawler and false of the ones people are currently worried about.
    - source: "Google Search Central's JavaScript SEO basics documentation states that all pages with a 200 HTTP status code are sent to rendering, and that Googlebot queues them, where a page may stay on the rendering queue for a few seconds or longer."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
    - searched: checked the corpus first: Google's JavaScript SEO documentation and Vercel's measurement study are both already held
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **[echoed-claim]** The old beliefs listed in Vercel's blog post on how Google handles JavaScript have stuck around.
  - as of: 2024-07-31
  - quote: "We've noticed that a number of old beliefs have stuck around and kept the community unsure about best practices for application SEO:"
  - quote: ""Google can't render client-side JavaScript.""
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed: Googlebot does render JavaScript, so the old belief is genuinely obsolete for GOOGLE. The trap is generalising the correction, because the same corpus holds Vercel's measurement that the ChatGPT and Claude crawlers do not execute JavaScript at all. 'Crawlers render JS now' is true of one crawler and false of the ones people are currently worried about.
    - source: "Google Search Central's JavaScript SEO basics documentation states that all pages with a 200 HTTP status code are sent to rendering, and that Googlebot queues them, where a page may stay on the rendering queue for a few seconds or longer."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
    - searched: checked the corpus first: Google's JavaScript SEO documentation and Vercel's measurement study are both already held
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **[echoed-claim]** The old beliefs listed in Vercel's blog post on how Google handles JavaScript have kept the community unsure about best practices for application SEO.
  - as of: 2024-07-31
  - quote: "We've noticed that a number of old beliefs have stuck around and kept the community unsure about best practices for application SEO:"
  - quote: ""Google can't render client-side JavaScript.""
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - source: https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed: Googlebot does render JavaScript, so the old belief is genuinely obsolete for GOOGLE. The trap is generalising the correction, because the same corpus holds Vercel's measurement that the ChatGPT and Claude crawlers do not execute JavaScript at all. 'Crawlers render JS now' is true of one crawler and false of the ones people are currently worried about.
    - source: "Google Search Central's JavaScript SEO basics documentation states that all pages with a 200 HTTP status code are sent to rendering, and that Googlebot queues them, where a page may stay on the rendering queue for a few seconds or longer."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
    - searched: checked the corpus first: Google's JavaScript SEO documentation and Vercel's measurement study are both already held
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

## Largest Contentful Paint (3)

- **[echoed-claim]** NitroPack's guide to fixing Largest Contentful Paint asserts that three years after the introduction of Core Web Vitals, 33.3% of websites globally still struggle to pass LCP.
  - as of: 2023-10-26
  - quote: "Three years after the introduction of Core Web Vitals, a staggering 33.3% of websites globally still struggle to pass the notoriously challenging metric – Largest Contentful Paint (LCP)."
  - source: https://nitropack.io/blog/fix-largest-contentful-paint/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - An unattributed and suspiciously round one-third, published by a company selling a fix for the exact problem it quantifies. The number is checkable in principle - CrUX and HTTP Archive both publish pass rates, and this corpus holds a 55.8% overall Core Web Vitals pass rate from CrUX - but nothing connects the vendor's figure to either, and no date or population is given.
    - searched: web search: NitroPack "33.3%" sites pass Core Web Vitals three years after introduction LCP
    - searched: the only page carrying the figure is the vendor's own blog post, which cites nothing
    - searched: checked the corpus: CrUX's own dataset figures are held here and report a different measure entirely
- **[echoed-claim]** Parachute Design's guide to Largest Contentful Paint asserts that a strong LCP score reduces bounce on landing pages.
  - as of: 2026-04-17
  - quote: "A strong LCP score reduces bounce on landing pages and supports higher conversion rates."
  - source: https://parachutedesign.ca/blog/largest-contentful-paint/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Plausible, widely believed, and unsourced as written. Real studies of speed and conversion exist, which is why this passes unchallenged; the guide cites none of them, so there is nothing here to check. The documented material stops at what a good score IS.
    - searched: checked the corpus: web.dev documents the 2.5 second threshold and what LCP measures, and asserts no conversion outcome
    - searched: the citing guide names no study, sample or client data
- **[echoed-claim]** Parachute Design's guide to Largest Contentful Paint asserts that a strong LCP score supports higher conversion rates.
  - as of: 2026-04-17
  - quote: "A strong LCP score reduces bounce on landing pages and supports higher conversion rates."
  - source: https://parachutedesign.ca/blog/largest-contentful-paint/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - Plausible, widely believed, and unsourced as written. Real studies of speed and conversion exist, which is why this passes unchallenged; the guide cites none of them, so there is nothing here to check. The documented material stops at what a good score IS.
    - searched: checked the corpus: web.dev documents the 2.5 second threshold and what LCP measures, and asserts no conversion outcome
    - searched: the citing guide names no study, sample or client data

## llms.txt (3)

- **[echoed-claim]** Search Engine Journal asserts that large studies show no measurable citation advantage for sites that add an llms.txt file.
  - as of: 2026-08-07
  - quote: "a finding since echoed by other large studies showing no measurable citation advantage for sites that add one"
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the field repeating a DEBUNKING again rather than a myth. The experiment is a clean piece of reasoning: it does not argue llms.txt fails, it shows that the EVIDENCE offered for it would equally prove an invented standard, which is a different and stronger point. It sits alongside Google's own documented position, already held here, that Search ignores such files.
    - source: "The cats.txt file passed all four proofs people cite for llms.txt: it was crawled by AI bots, Google indexed it, and LLMs returned details about a cat that exists nowhere but the file."
      Search Engine Journal https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
    - searched: web search: Search Engine Journal cats.txt experiment llms.txt no citation advantage study
    - searched: traced the cats.txt experiment to its originating write-up and the SEJ article carrying it
    - searched: checked the corpus: Google's own AI-optimization guidance stating Search ignores these files is already held
- **[echoed-claim]** Search Engine Journal's account reported that cats.txt passed all four proofs commonly cited for llms.txt.
  - as of: 2026-08-07
  - quote: "Then, I checked it against the exact four "proofs" people cite for llms.txt. It passed all four."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the field repeating a DEBUNKING again rather than a myth. The experiment is a clean piece of reasoning: it does not argue llms.txt fails, it shows that the EVIDENCE offered for it would equally prove an invented standard, which is a different and stronger point. It sits alongside Google's own documented position, already held here, that Search ignores such files.
    - source: "The cats.txt file passed all four proofs people cite for llms.txt: it was crawled by AI bots, Google indexed it, and LLMs returned details about a cat that exists nowhere but the file."
      Search Engine Journal https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
    - searched: web search: Search Engine Journal cats.txt experiment llms.txt no citation advantage study
    - searched: traced the cats.txt experiment to its originating write-up and the SEJ article carrying it
    - searched: checked the corpus: Google's own AI-optimization guidance stating Search ignores these files is already held
- **[echoed-claim]** Search Engine Journal published the argument that a crawler fetching llms.txt tells you nothing about whether the contents of llms.txt are read, weighted, trusted or acted upon.
  - as of: 2026-08-07
  - quote: "A crawler fetching a file tells you nothing about whether the contents are read, weighted, trusted, or acted upon. Fetching things is the entire job description of a crawler."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and the field repeating a DEBUNKING again rather than a myth. The experiment is a clean piece of reasoning: it does not argue llms.txt fails, it shows that the EVIDENCE offered for it would equally prove an invented standard, which is a different and stronger point. It sits alongside Google's own documented position, already held here, that Search ignores such files.
    - source: "The cats.txt file passed all four proofs people cite for llms.txt: it was crawled by AI bots, Google indexed it, and LLMs returned details about a cat that exists nowhere but the file."
      Search Engine Journal https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
    - searched: web search: Search Engine Journal cats.txt experiment llms.txt no citation advantage study
    - searched: traced the cats.txt experiment to its originating write-up and the SEJ article carrying it
    - searched: checked the corpus: Google's own AI-optimization guidance stating Search ignores these files is already held

## robots.txt (3)

- **[echoed-claim]** Roughly 492,000 sites name CCBot in robots.txt.
  - as of: 2026-08-10
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Unusual case: the underlying dataset is PUBLIC and the figure is reproducible in principle, because HTTP Archive can be queried by anyone. What is missing is the query, the snapshot date and the definition of a 'site', so the number cannot be checked as written, only re-derived by someone willing to redo the work. Attributed and plausible, not verified. The same article notes a CCBot block in 2026 is as likely to be a platform default as a decision, which the bare percentage hides.
    - source: "Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
      Search Engine Journal, attributing HTTP Archive figures to a named analyst https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
    - searched: web search: "492,000" sites CCBot robots.txt Common Crawl blocking study 2026
    - searched: followed the citing article to its attribution: HTTP Archive figures posted to LinkedIn by a named analyst
    - searched: looked for a published query, dataset snapshot or date behind the figure
- **[echoed-claim]** About 95% of the mentions of CCBot in robots.txt exist to block CCBot.
  - as of: 2026-08-10
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Unusual case: the underlying dataset is PUBLIC and the figure is reproducible in principle, because HTTP Archive can be queried by anyone. What is missing is the query, the snapshot date and the definition of a 'site', so the number cannot be checked as written, only re-derived by someone willing to redo the work. Attributed and plausible, not verified. The same article notes a CCBot block in 2026 is as likely to be a platform default as a decision, which the bare percentage hides.
    - source: "Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
      Search Engine Journal, attributing HTTP Archive figures to a named analyst https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
    - searched: web search: "492,000" sites CCBot robots.txt Common Crawl blocking study 2026
    - searched: followed the citing article to its attribution: HTTP Archive figures posted to LinkedIn by a named analyst
    - searched: looked for a published query, dataset snapshot or date behind the figure
- **[echoed-claim]** Search Engine Journal reports that BuzzStream measured the practice of blocking training crawlers using robots.txt at 75% of the top U.S. and UK publishers.
  - as of: 2026-08-10
  - quote: "The BBC robots.txt blocks 13 of the 14 AI crawlers the checker tracks, and other top news sites have been blocking training crawlers on purpose since 2023. BuzzStream measured it at 75% of the top U.S. and UK publishers."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - The study is real and its sample is stated, which is what makes the drift visible. 75% is CCBot's blocking rate among 100 TOP NEWS SITES, not the share of sites in general that block training crawlers. News publishers are the population most likely to block, so generalising their rate to the web is the error the retelling makes.
    - source: "BuzzStream analysed the robots.txt files of 100 top news sites across the US and UK: 79% block at least one training bot, and among training bots Common Crawl's CCBot was the most frequently blocked at 75%."
      BuzzStream https://www.buzzstream.com/blog/publishers-block-ai-study/
    - searched: web search: BuzzStream study "75%" of sites blocking AI training crawlers robots.txt
    - searched: opened the publisher's own study page at https://www.buzzstream.com/blog/publishers-block-ai-study/

## alt text (2)

- **[echoed-claim]** Search Engine Journal's ranking factors entry states that alt text is a confirmed ranking factor for image search only.
  - as of: 2023-11-22
  - quote: "Alt text is a confirmed ranking factor for image search only. You should craft descriptive, non-spammy alt text to help your images appear in Google Image Search results."
  - quote: "Alt text is definitely not a ranking factor in Google Search. Google has clarified that alt text acts like normal page text in overall search."
  - source: https://www.searchenginejournal.com/ranking-factors/alt-text/
  - source: https://www.searchenginejournal.com/ranking-factors/alt-text/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the image-search half by Google's own documentation, which this corpus already held. The 'definitely not a ranking factor in Search' half is a negative that Google does not state in those words; it is the ranking-factor column's editorial judgement, and it is repeated as though Google said it.
    - source: "Google's image SEO best practices documentation states that alt text is the most important attribute when it comes to providing more metadata for an image, and that Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image."
      Google Search Central https://developers.google.com/search/docs/appearance/google-images
    - searched: checked the corpus first: Google's image SEO documentation and a Mueller statement are already held under this subject
    - searched: opened https://developers.google.com/search/docs/appearance/google-images
- **[echoed-claim]** Search Engine Journal's ranking factors entry states that alt text is definitely not a ranking factor in Google Search.
  - as of: 2023-11-22
  - quote: "Alt text is a confirmed ranking factor for image search only. You should craft descriptive, non-spammy alt text to help your images appear in Google Image Search results."
  - quote: "Alt text is definitely not a ranking factor in Google Search. Google has clarified that alt text acts like normal page text in overall search."
  - source: https://www.searchenginejournal.com/ranking-factors/alt-text/
  - source: https://www.searchenginejournal.com/ranking-factors/alt-text/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed on the image-search half by Google's own documentation, which this corpus already held. The 'definitely not a ranking factor in Search' half is a negative that Google does not state in those words; it is the ranking-factor column's editorial judgement, and it is repeated as though Google said it.
    - source: "Google's image SEO best practices documentation states that alt text is the most important attribute when it comes to providing more metadata for an image, and that Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image."
      Google Search Central https://developers.google.com/search/docs/appearance/google-images
    - searched: checked the corpus first: Google's image SEO documentation and a Mueller statement are already held under this subject
    - searched: opened https://developers.google.com/search/docs/appearance/google-images

## Common Crawl (2)

- **[echoed-claim]** A Search Engine Journal article dated August 10, 2026 states that roughly 492,000 sites name Common Crawl's CCBot in robots.txt.
  - as of: 2026-08-10
  - quote: "August 10, 2026"
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Unusual case: the underlying dataset is PUBLIC and the figure is reproducible in principle, because HTTP Archive can be queried by anyone. What is missing is the query, the snapshot date and the definition of a 'site', so the number cannot be checked as written, only re-derived by someone willing to redo the work. Attributed and plausible, not verified. The same article notes a CCBot block in 2026 is as likely to be a platform default as a decision, which the bare percentage hides.
    - source: "Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
      Search Engine Journal, attributing HTTP Archive figures to a named analyst https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
    - searched: web search: "492,000" sites CCBot robots.txt Common Crawl blocking study 2026
    - searched: followed the citing article to its attribution: HTTP Archive figures posted to LinkedIn by a named analyst
    - searched: looked for a published query, dataset snapshot or date behind the figure
- **[echoed-claim]** A Search Engine Journal article dated August 10, 2026 states that about 95% of the mentions of Common Crawl's CCBot in robots.txt exist to block it.
  - as of: 2026-08-10
  - quote: "August 10, 2026"
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Unusual case: the underlying dataset is PUBLIC and the figure is reproducible in principle, because HTTP Archive can be queried by anyone. What is missing is the query, the snapshot date and the definition of a 'site', so the number cannot be checked as written, only re-derived by someone willing to redo the work. Attributed and plausible, not verified. The same article notes a CCBot block in 2026 is as likely to be a platform default as a decision, which the bare percentage hides.
    - source: "Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
      Search Engine Journal, attributing HTTP Archive figures to a named analyst https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
    - searched: web search: "492,000" sites CCBot robots.txt Common Crawl blocking study 2026
    - searched: followed the citing article to its attribution: HTTP Archive figures posted to LinkedIn by a named analyst
    - searched: looked for a published query, dataset snapshot or date behind the figure

## crawl budget (2)

- **[echoed-claim]** Backlinko defines crawl budget as the number of pages Googlebot crawls and indexes on a website within a given timeframe.
  - as of: 2026-06-23
  - quote: "Crawl Budget is the number of pages Googlebot crawls and indexes on a website within a given timeframe."
  - source: https://backlinko.com/hub/seo/crawl-budget
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by who the guidance is FOR: Google scopes its crawl budget guide to sites of a million or more pages changing weekly, which is the same statement as 'not a limiting factor for most sites' read from the other side. The Backlinko definition repeated alongside it - pages crawled AND indexed in a timeframe - blurs crawling with indexing, which Google's own robots.txt documentation is careful to separate.
    - source: "Google's current crawl budget guide is aimed at large sites with 1 million or more unique pages whose content changes about once a week."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
    - searched: checked the corpus first: Google's crawl budget guidance is already held under this subject
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- **[echoed-claim]** TwoSquares states that crawl budget is not a limiting factor for the majority of websites.
  - as of: 2026-01-26
  - quote: "The uncomfortable truth: most sites do not have a crawl budget problem"
  - quote: "under ~50,000 URLs"
  - quote: "Crawl budget is not a limiting factor."
  - source: https://twosquares.co.uk/blog/crawl-budgets
  - source: https://twosquares.co.uk/blog/crawl-budgets
  - source: https://twosquares.co.uk/blog/crawl-budgets
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed by who the guidance is FOR: Google scopes its crawl budget guide to sites of a million or more pages changing weekly, which is the same statement as 'not a limiting factor for most sites' read from the other side. The Backlinko definition repeated alongside it - pages crawled AND indexed in a timeframe - blurs crawling with indexing, which Google's own robots.txt documentation is careful to separate.
    - source: "Google's current crawl budget guide is aimed at large sites with 1 million or more unique pages whose content changes about once a week."
      Google Search Central https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
    - searched: checked the corpus first: Google's crawl budget guidance is already held under this subject
    - searched: opened https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget

## Expired domain abuse (2)

- **[echoed-claim]** Regarding expired domain abuse, a CompanionLink blog post dated July 17, 2026 asserts that aged and expired domains remain one of the most reliable head-starts in SEO.
  - as of: 2026-07-17
  - quote: "Posted on July 17, 2026 by Colleen Borator"
  - quote: "Aged and expired domains remain one of the most reliable head-starts in SEO: a name with genuine history — real backlinks, years of standing, a clean record — can hand a new project the authority that would otherwise take a year to build."
  - source: https://www.companionlink.com/blog/2026/07/best-sites-to-buy-aged-expired-domains-for-seo-in-2026-marketplaces-auctions-tools/
  - source: https://www.companionlink.com/blog/2026/07/best-sites-to-buy-aged-expired-domains-for-seo-in-2026-marketplaces-auctions-tools/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Google documents the ABUSE, not the benefit, and the two get conflated. What the operator establishes is that repurposing a domain to manipulate rankings is a spam violation; it says nothing about whether age itself helps. The advantage claim is asserted across the domain-broker industry, which sells the asset in question, and no measurement of it could be found. Sold as inherited authority, treated by the policy as inherited risk.
    - source: "Google's spam policies define expired domain abuse as purchasing and repurposing a domain primarily to manipulate search rankings by hosting content that provides little to no value to users."
      Google Search Central https://developers.google.com/search/docs/essentials/spam-policies
    - searched: web search: Google expired domain abuse policy aged domains authority ranking benefit documentation
    - searched: checked the corpus: Google's spam policy defining expired domain abuse is already held
    - searched: looked for any measurement of a ranking advantage from domain age or acquired backlinks
- **[echoed-claim]** Regarding expired domain abuse, a CompanionLink blog post dated July 17, 2026 asserts that a name with genuine history can hand a new project the authority that would otherwise take a year to build.
  - as of: 2026-07-17
  - quote: "Posted on July 17, 2026 by Colleen Borator"
  - quote: "Aged and expired domains remain one of the most reliable head-starts in SEO: a name with genuine history — real backlinks, years of standing, a clean record — can hand a new project the authority that would otherwise take a year to build."
  - source: https://www.companionlink.com/blog/2026/07/best-sites-to-buy-aged-expired-domains-for-seo-in-2026-marketplaces-auctions-tools/
  - source: https://www.companionlink.com/blog/2026/07/best-sites-to-buy-aged-expired-domains-for-seo-in-2026-marketplaces-auctions-tools/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Google documents the ABUSE, not the benefit, and the two get conflated. What the operator establishes is that repurposing a domain to manipulate rankings is a spam violation; it says nothing about whether age itself helps. The advantage claim is asserted across the domain-broker industry, which sells the asset in question, and no measurement of it could be found. Sold as inherited authority, treated by the policy as inherited risk.
    - source: "Google's spam policies define expired domain abuse as purchasing and repurposing a domain primarily to manipulate search rankings by hosting content that provides little to no value to users."
      Google Search Central https://developers.google.com/search/docs/essentials/spam-policies
    - searched: web search: Google expired domain abuse policy aged domains authority ranking benefit documentation
    - searched: checked the corpus: Google's spam policy defining expired domain abuse is already held
    - searched: looked for any measurement of a ranking advantage from domain age or acquired backlinks

## Interaction to Next Paint (INP) (2)

- **[echoed-claim]** The seobeni.com article asserts, regarding Interaction to Next Paint (INP), that Core Web Vitals act as a tiebreaker between pages that are otherwise equal in relevance and authority.
  - as of: 2026-06-04
  - quote: "Core Web Vitals are a confirmed Google ranking signal that measure three dimensions of page experience: loading speed (LCP), interactivity (INP), and visual stability (CLS). They act as a tiebreaker between pages that are otherwise equal in relevance and authority — not a multiplier that overrides content quality."
  - source: https://seobeni.com/blog/core-web-vitals-rankings/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Both halves of the repeated claim come from Google, and they come from DIFFERENT MOMENTS. 'Tiebreaker' is Google's own early framing, from a Search Off the Record episode; Google then corrected it, saying page experience is more than a tiebreaker while still not replacing relevance. The retelling keeps the retracted half and the surviving half in one sentence. The half that is right - relevance is not overridden - is doing the work of making the retracted half sound current.
    - source: "It is a ranking factor, and it's more than a tie-breaker, but it also doesn't replace relevance."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-core-web-vitals-ranking-factor/415533/
    - searched: web search: Google Core Web Vitals "tiebreaker" page experience similar results Mueller Splitt statement
    - searched: traced both halves: the tiebreaker framing to a Google Search Off the Record episode, and Google's later correction of it
    - searched: checked the corpus: web.dev's page-experience material is held and frames the thresholds, not the weighting
- **[echoed-claim]** The seobeni.com article asserts, regarding Interaction to Next Paint (INP), that Core Web Vitals are not a multiplier that overrides content quality.
  - as of: 2026-06-04
  - quote: "Core Web Vitals are a confirmed Google ranking signal that measure three dimensions of page experience: loading speed (LCP), interactivity (INP), and visual stability (CLS). They act as a tiebreaker between pages that are otherwise equal in relevance and authority — not a multiplier that overrides content quality."
  - source: https://seobeni.com/blog/core-web-vitals-rankings/
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - Both halves of the repeated claim come from Google, and they come from DIFFERENT MOMENTS. 'Tiebreaker' is Google's own early framing, from a Search Off the Record episode; Google then corrected it, saying page experience is more than a tiebreaker while still not replacing relevance. The retelling keeps the retracted half and the surviving half in one sentence. The half that is right - relevance is not overridden - is doing the work of making the retracted half sound current.
    - source: "It is a ranking factor, and it's more than a tie-breaker, but it also doesn't replace relevance."
      Search Engine Journal, quoting Google's John Mueller https://www.searchenginejournal.com/google-core-web-vitals-ranking-factor/415533/
    - searched: web search: Google Core Web Vitals "tiebreaker" page experience similar results Mueller Splitt statement
    - searched: traced both halves: the tiebreaker framing to a Google Search Off the Record episode, and Google's later correction of it
    - searched: checked the corpus: web.dev's page-experience material is held and frames the thresholds, not the weighting

## noindex (2)

- **[echoed-claim]** Search Engine Roundtable reports that with a noindex and follow directive Google initially keeps the page in its index.
  - as of: 2017-12-28
  - quote: "So it's kind of tricky with noindex. Which which I think is something somewhat of a misconception in general with a the SEO community. In that with a noindex and follow it's still the case that we see the noindex. Snd in the first step we say okay you don't want this page shown in the search results. We'll still keep it in our index, we just won't show it and then we can follow those links."
  - source: https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - A real Google statement sits underneath, and it says something the retelling loses. The behaviour is TRANSITIONAL: links on a long-term noindexed page eventually stop being followed, and crawling of that page slows. Reported as a stable arrangement, it invites treating noindex-follow as a durable way to pass link signals, which is the opposite of what Mueller described.
    - source: "Long term noindex, follow commands will eventually equate to a noindex, nofollow directive as well."
      Search Engine Roundtable, quoting Google's John Mueller https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
    - searched: web search: Google noindex follow directive page kept in index initially links followed
    - searched: checked the corpus: Google's own noindex documentation is held and describes what happens when Googlebot extracts the tag
    - searched: traced the trade-press reporting to John Mueller's answers on long-term noindex behaviour
- **[echoed-claim]** Search Engine Roundtable reports that with a noindex and follow directive Google follows the links on the page.
  - as of: 2017-12-28
  - quote: "So it's kind of tricky with noindex. Which which I think is something somewhat of a misconception in general with a the SEO community. In that with a noindex and follow it's still the case that we see the noindex. Snd in the first step we say okay you don't want this page shown in the search results. We'll still keep it in our index, we just won't show it and then we can follow those links."
  - source: https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
  - **A REAL SOURCE SAYS SOMETHING NARROWER** (checked 2026-08-14)
    - A real Google statement sits underneath, and it says something the retelling loses. The behaviour is TRANSITIONAL: links on a long-term noindexed page eventually stop being followed, and crawling of that page slows. Reported as a stable arrangement, it invites treating noindex-follow as a durable way to pass link signals, which is the opposite of what Mueller described.
    - source: "Long term noindex, follow commands will eventually equate to a noindex, nofollow directive as well."
      Search Engine Roundtable, quoting Google's John Mueller https://www.seroundtable.com/google-long-term-noindex-follow-24990.html
    - searched: web search: Google noindex follow directive page kept in index initially links followed
    - searched: checked the corpus: Google's own noindex documentation is held and describes what happens when Googlebot extracts the tag
    - searched: traced the trade-press reporting to John Mueller's answers on long-term noindex behaviour

## schema.org structured data (2)

- **[echoed-claim]** Sixth City Marketing's page of schema markup statistics states that schema.org structured data produces rich results that users click 58% of the time, compared to 41% for non-rich results.
  - as of: 2026-06-22
  - quote: "Users click on rich results 58% of the time compared to 41% for non-rich results"
  - source: https://www.sixthcitymarketing.com/2023/12/20/schema-markup-statistics-facts/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The trail ends at a vendor, Schema App, with no reachable methodology or publication. The figure also drifts by retelling - 40% here, 30% elsewhere, 10-30% in others - which is the signal that no single measurement is underneath any of them. The page being traced is itself a statistics roundup, a format that exists to collect other people's numbers and rarely checks them.
    - searched: web search: "schema markup" "40%" higher click-through rate statistic original study source
    - searched: followed the citing pages: sixthcitymarketing.com, bluetonemedia.com, clickrank.ai, 2pointagency.com, digitalrootsmedia.com
    - searched: looked for a Schema App publication carrying the figure with a methodology
- **[echoed-claim]** Sixth City Marketing's page of schema markup statistics states that pages with schema.org structured data received a 40% higher click-through rate than pages without schema.org structured data.
  - as of: 2026-06-22
  - quote: "Pages with schema received a 40% higher click-through rate than pages without"
  - source: https://www.sixthcitymarketing.com/2023/12/20/schema-markup-statistics-facts/
  - **SEARCHED, NOTHING FOUND** (checked 2026-08-14)
    - The trail ends at a vendor, Schema App, with no reachable methodology or publication. The figure also drifts by retelling - 40% here, 30% elsewhere, 10-30% in others - which is the signal that no single measurement is underneath any of them. The page being traced is itself a statistics roundup, a format that exists to collect other people's numbers and rarely checks them.
    - searched: web search: "schema markup" "40%" higher click-through rate statistic original study source
    - searched: followed the citing pages: sixthcitymarketing.com, bluetonemedia.com, clickrank.ai, 2pointagency.com, digitalrootsmedia.com
    - searched: looked for a Schema App publication carrying the figure with a methodology

## sitemap lastmod (2)

- **[echoed-claim]** Search Engine Roundtable reported on 16 July 2026 that Gary Illyes of Google said on Bluesky that a site is better off not using a lastmod date in its XML sitemap if those dates are wrong.
  - as of: 2026-07-16
  - quote: "Gary Illyes from Google said that you are better off not using a lastmod date in your XML Sitemap if those dates are wrong. He said on Bluesky , "probably better off without the lastmods. at least you save a few bytes.""
  - quote: "Jul 16, 2026"
  - source: https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
  - source: https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and recent enough to still be current, which is rare here. The nearest source is trade press quoting a social post rather than a Google document, but the position matches Google's own sitemap documentation: lastmod is used if it is consistently and verifiably accurate, which is the same binary in fewer words. Answered a practitioner whose CMS bug had poisoned a client's dates.
    - source: "probably better off without the lastmods"
      Search Engine Roundtable, quoting Google's Gary Illyes on Bluesky https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
    - searched: web search: Gary Illyes Bluesky sitemap lastmod "better off not using" 2026
    - searched: traced to Search Engine Roundtable's contemporaneous report of the Bluesky exchange
- **[echoed-claim]** Search Engine Journal reported that Google treats the sitemap lastmod signal as binary, meaning the signal is either trusted or not.
  - as of: 2024-06-11
  - quote: "Google treats lastmod as binary - trusted or not."
  - quote: "Incorrect lastmod dates risk the signal being ignored completely."
  - quote: "June 11, 2024"
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
  - source: https://www.searchenginejournal.com/googles-gary-illyes-lastmod-signal-is-binary/519239/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and recent enough to still be current, which is rare here. The nearest source is trade press quoting a social post rather than a Google document, but the position matches Google's own sitemap documentation: lastmod is used if it is consistently and verifiably accurate, which is the same binary in fewer words. Answered a practitioner whose CMS bug had poisoned a client's dates.
    - source: "probably better off without the lastmods"
      Search Engine Roundtable, quoting Google's Gary Illyes on Bluesky https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
    - searched: web search: Gary Illyes Bluesky sitemap lastmod "better off not using" 2026
    - searched: traced to Search Engine Roundtable's contemporaneous report of the Bluesky exchange

## Core Web Vitals (1)

- **[echoed-claim]** The websitespeedy.com article "Why 53% of Mobile Users Abandon Sites That Take Over 3 Seconds to Load" states that recent research by Google revealed that 53% of mobile users abandon sites that take over 3 seconds to load.
  - as of: 2025-08-21
  - quote: "The recent research by Google revealed that 53% Of Mobile Users Abandon Sites That Take Over 3 Seconds To Load."
  - quote: "TL;DR: A research by Google reveals that 53% of mobile users leave sites that take more than 3 seconds to load. This increases the bounce rate of a site and harms user experience. You can focus and boost your Core Web Vitals and optimize your site for mobile devices, as more traffic is coming from mobile devices nowadays."
  - source: https://websitespeedy.com/blog/why-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/
  - source: https://websitespeedy.com/blog/why-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, and TEN YEARS OLD. It is quoted everywhere in the present tense with 'recent research' framing, as the article carrying it here does. It measured mobile ad-supported pages in a 2016 sample, on 2016 networks and devices. The number is not invented; the currency is.
    - source: "53% of mobile website visitors will leave if a webpage doesn't load within three seconds."
      Google / SOASTA, 'The Need for Mobile Speed' (2016), as reported contemporaneously https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/
    - searched: web search: "53%" mobile users abandon sites take longer than 3 seconds original Google SOASTA DoubleClick 2016 study
    - searched: traced to Google's 'The Need for Mobile Speed' research with SOASTA, September 2016

## hreflang (1)

- **[echoed-claim]** An SEO 101 page published by gracker.ai states that a study by Ahrefs revealed that 67% of websites have issues with their hreflang implementation.
  - as of: 2026-08-11
  - quote: "Did you know that a study by Ahrefs revealed that 67% of websites have issues with their hreflang implementation?"
  - source: https://gracker.ai/seo-101/hreflang-implementation-challenges-solutions
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed with a stated sample - 374,756 domains - which is what makes it checkable at all. Worth noting the softening the retelling performs: the study counts domains with AT LEAST ONE issue, including missing x-default annotations, which is a much lower bar than 'has a broken hreflang setup'.
    - source: "Ahrefs examined hreflang issues on 374,756 different domains that used hreflang tags and found that 67% of them have at least one issue."
      Ahrefs https://ahrefs.com/blog/hreflang-study
    - searched: web search: Ahrefs study "67%" of websites hreflang issues international SEO
    - searched: traced to the publisher's own write-up at https://ahrefs.com/blog/hreflang-study

## nosnippet (1)

- **[echoed-claim]** nosnippet echoes Search Engine Journal's report of a NewzDash figure that nearly 1 in 6 U.S. trending news queries place Top Stories inside AI Overviews.
  - as of: 2026-08-01
  - quote: "John Shehata, CEO and founder of NewzDash and GDdash, put a number on it : “Nearly 1 in 6 U.S. trending news queries now place Top Stories inside AI Overviews.” The 15.5% rate applies to tracked results where Google displayed Top Stories, not to all queries NewzDash tracked. The UK figure is 17.46%."
  - quote: "NewzDash hasn't published sample sizes or collection dates alongside the figures."
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
  - source: https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/
  - **BACKING FOUND** (checked 2026-08-14)
    - Backed, with a named tracker and a stated population: US and UK TRENDING NEWS queries, not searches in general. The rate also varies enormously by category - entertainment above 30% - so the single 'one in six' figure is an average across a spread wide enough that the average describes few actual queries.
    - source: "NewzDash's tracking logged Top Stories inside the AI Overview on 15.5% of US trending news queries and 17.46% in the UK, and found the two placements mutually exclusive."
      NewzDash https://www.newzdash.com/guide/top-stories-ai-overviews-data-strategy-and-impact-blocking-google-ai
    - searched: web search: NewzDash "1 in 6" trending news queries Top Stories inside AI Overviews study
    - searched: traced to NewzDash's own published analysis rather than the article reporting it
