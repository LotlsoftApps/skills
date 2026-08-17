# Common Crawl

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

CCBot checks robots.txt first, honors nofollow and Crawl-delay, supports sitemaps, fetches via HTTP GET, and does not use cookies; sites can block it by naming the CCBot user-agent in robots.txt. Common Crawl documents itself as of 2026 as a 501(c)(3) non-profit providing a free sample of the web, not the entire or a representative web. Its July 2026 crawl was crawled July 7 to July 25 and contained 2.14 billion pages from 40.5 million hosts or 33.2 million registered domains, with 603 million URLs not visited in any prior Common Crawl crawl. GPT-3 used Common Crawl from 41 monthly shards covering 2016 to 2019, 570GB after filtering, at a 60% training-mix weight; a February 2024 review found at least 64% of 47 text-generation LLMs published 2019 to October 2023 used at least one filtered Common Crawl version for pre-training. Common Crawl's June 1, 2026 AI Visibility Audit asserts that if you are not in the crawl, you are not in the model and puts the latest crawl's English share at roughly 41 percent; an August 10, 2026 Search Engine Journal article counted roughly 492,000 sites naming CCBot in robots.txt, about 95 percent of them to block it.

## Claims (35)

### Documented position (19)

- **[documented-position]** Common Crawl's FAQ page describes Common Crawl as a 501(c)(3) non-profit organization.
  - as of: 2026
  - quote: "Common Crawl is a 501(c)(3) non-profit organization dedicated to providing a copy of the Internet to Internet researchers, companies and individuals at no cost for the purpose of research and analysis."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ page describes Common Crawl as dedicated to providing a copy of the Internet to Internet researchers, companies and individuals at no cost for the purpose of research and analysis.
  - as of: 2026
  - quote: "Common Crawl is a 501(c)(3) non-profit organization dedicated to providing a copy of the Internet to Internet researchers, companies and individuals at no cost for the purpose of research and analysis."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that CCBot checks robots.txt first.
  - as of: 2026
  - quote: "CCBot is an automated crawler, checking first the robots.txt, and if crawling a page is allowed, fetches pages using HTTP GET requests."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that if crawling a page is allowed, CCBot fetches pages using HTTP GET requests.
  - as of: 2026
  - quote: "CCBot is an automated crawler, checking first the robots.txt, and if crawling a page is allowed, fetches pages using HTTP GET requests."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that CCBot currently does not use cookies.
  - as of: 2026
  - quote: "Currently, JavaScript is not executed and Cookies are not used."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's dataset is a sample of the web.
  - as of: 2026
  - quote: "Common Crawl's dataset is a sample of the web, and we do not generally archive any entire website but a randomly selected subset of it."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl does not generally archive any entire website, but rather a randomly selected subset of each website.
  - as of: 2026
  - quote: "Common Crawl's dataset is a sample of the web, and we do not generally archive any entire website but a randomly selected subset of it."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that a site can block Common Crawl's crawler by adding a robots.txt rule for the exclusion UserAgent string CCBot.
  - as of: 2026
  - quote: "You configure your robots.txt file which uses the Robots Exclusion Protocol to block the crawler. Our bot's exclusion UserAgent string is: CCBot."
  - quote: "User-agent: CCBot Disallow: /"
  - source: https://commoncrawl.org/faq
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that Common Crawl obeys the Crawl-delay parameter in robots.txt.
  - as of: 2026
  - quote: "We obey the Crawl-delay parameter for robots.txt."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that Common Crawl currently honors the nofollow attribute as it applies to links embedded on a site.
  - as of: 2026
  - quote: "We currently honor the nofollow attribute as it applies to links embedded on your site."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that Common Crawl's crawler supports the Sitemap Protocol.
  - as of: 2026
  - quote: "The crawler supports the Sitemap Protocol and utilizes any Sitemap announced in the robots.txt file."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's FAQ states that Common Crawl's crawler utilizes any Sitemap announced in the robots.txt file.
  - as of: 2026
  - quote: "The crawler supports the Sitemap Protocol and utilizes any Sitemap announced in the robots.txt file."
  - source: https://commoncrawl.org/faq
- **[documented-position]** Common Crawl's announcement of The AI Visibility Audit says the guide explains how to run a repeatable audit.
  - as of: 2026-06-01
  - quote: "It explains how AI systems actually discover content, why training-data inclusion behaves like a ranking factor, and how to run a repeatable, five-check audit using only free tools in about 90 minutes."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[documented-position]** Common Crawl's announcement of The AI Visibility Audit says the guide explains how to run a five-check audit.
  - as of: 2026-06-01
  - quote: "It explains how AI systems actually discover content, why training-data inclusion behaves like a ranking factor, and how to run a repeatable, five-check audit using only free tools in about 90 minutes."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[documented-position]** Common Crawl's announcement of The AI Visibility Audit says the guide explains how to run the audit using only free tools.
  - as of: 2026-06-01
  - quote: "It explains how AI systems actually discover content, why training-data inclusion behaves like a ranking factor, and how to run a repeatable, five-check audit using only free tools in about 90 minutes."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[documented-position]** Common Crawl's announcement of The AI Visibility Audit says the guide explains how to run the audit in about 90 minutes.
  - as of: 2026-06-01
  - quote: "It explains how AI systems actually discover content, why training-data inclusion behaves like a ranking factor, and how to run a repeatable, five-check audit using only free tools in about 90 minutes."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[documented-position]** Common Crawl's announcement of The AI Visibility Audit asserts that if you are not in the crawl, you are not in the model.
  - as of: 2026-06-01
  - quote: "The old world was index and rank. The new world is train and retrieve. If you are not in the crawl, you are not in the model."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[documented-position]** Common Crawl does not contain the entire web.
  - as of: 2024-02
  - quote: "Common Crawl does not contain the “entire web,” nor a representative sample of it. Despite its size, there are important limitations on how much of the web is covered."
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
- **[documented-position]** Common Crawl does not contain a representative sample of the web.
  - as of: 2024-02
  - quote: "Common Crawl does not contain the “entire web,” nor a representative sample of it. Despite its size, there are important limitations on how much of the web is covered."
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf

### Measured finding (13)

- **[measured-finding]** Common Crawl's announcement of The AI Visibility Audit puts the English share of Common Crawl's latest crawl at roughly 41 percent.
  - as of: 2026-06-01
  - quote: "The guide walks through how CCBot crawls the open web and publishes the archive that helps train modern LLMs, how harmonic centrality in the Common Crawl Web Graph sets crawl priority, why CDN and WAF defaults now silently block AI crawlers and training data crawlers, and why AI still leans toward English, with the English share of the latest crawl at roughly 41 percent."
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit
- **[measured-finding]** Common Crawl's July 2026 crawl archive contains 2.14 billion web pages.
  - as of: 2026-07-28
  - quote: "The data was crawled between July 7th and July 25th, and contains 2.14 billion web pages (or 364.01 TiB of uncompressed content)."
  - source: https://commoncrawl.org/blog/july-2026-crawl-archive-now-available
- **[measured-finding]** Common Crawl's July 2026 crawl archive was crawled between July 7th and July 25th.
  - as of: 2026-07-28
  - quote: "The data was crawled between July 7th and July 25th, and contains 2.14 billion web pages (or 364.01 TiB of uncompressed content)."
  - source: https://commoncrawl.org/blog/july-2026-crawl-archive-now-available
- **[measured-finding]** Common Crawl reports that page captures in its July 2026 crawl come from 40.5 million hosts or 33.2 million registered domains.
  - as of: 2026-07-28
  - quote: "Page captures are from 40.5 million hosts or 33.2 million registered domains and include 603 million new URLs, not visited in any of our prior crawls."
  - source: https://commoncrawl.org/blog/july-2026-crawl-archive-now-available
- **[measured-finding]** Common Crawl reports that page captures in its July 2026 crawl include 603 million new URLs not visited in any prior Common Crawl crawl.
  - as of: 2026-07-28
  - quote: "Page captures are from 40.5 million hosts or 33.2 million registered domains and include 603 million new URLs, not visited in any of our prior crawls."
  - source: https://commoncrawl.org/blog/july-2026-crawl-archive-now-available
- **[measured-finding]** A February 2024 Mozilla Foundation report by Stefan Baack reviewed 47 text-generation LLMs published between 2019 and October 2023 for their pre-training use of Common Crawl.
  - as of: 2024-02
  - quote: "Training Data for the Price of a Sandwich1 Common Crawl’s Impact on Generative AI February 2024 By Stefan Baack Mozilla Insights"
  - quote: "A review of 47 LLMs for text generation published between 2019 and October 2023 shows that at least 64% of these models (30) used at least one filtered version of Common Crawl for their pre-training (Figure 1)."
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
- **[measured-finding]** The February 2024 Mozilla Foundation report by Stefan Baack found that at least 64% (30 models) of the 47 text-generation LLMs reviewed in the February 2024 Mozilla Foundation report by Stefan Baack used at least one filtered version of Common Crawl for pre-training.
  - as of: 2024-02
  - quote: "Training Data for the Price of a Sandwich1 Common Crawl’s Impact on Generative AI February 2024 By Stefan Baack Mozilla Insights"
  - quote: "A review of 47 LLMs for text generation published between 2019 and October 2023 shows that at least 64% of these models (30) used at least one filtered version of Common Crawl for their pre-training (Figure 1)."
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
- **[measured-finding]** A February 2024 Mozilla Foundation report states that Common Crawl made up more than 80% of the tokens in OpenAI's GPT-3.
  - as of: 2024-02
  - quote: "For example, Common Crawl made up more than 80% of the tokens in OpenAI’s GPT-3 (Brown et al. 2020)."
  - source: https://assets.mofoprod.net/network/documents/Common_Crawl_Mozilla_Foundation_2024.pdf
- **[measured-finding]** The GPT-3 paper states that the CommonCrawl data used to train GPT-3 was downloaded from 41 shards of monthly CommonCrawl covering 2016 to 2019.
  - as of: 2020-05-28
  - quote: "The CommonCrawl data was downloaded from 41 shards of monthly CommonCrawl covering 2016 to 2019, constituting 45TB of compressed plaintext before filtering and 570GB after filtering, roughly equivalent to 400 billion byte-pair-encoded tokens."
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
- **[measured-finding]** The GPT-3 paper states that the CommonCrawl data used to train GPT-3 amounted to 45TB of compressed plaintext before filtering.
  - as of: 2020-05-28
  - quote: "The CommonCrawl data was downloaded from 41 shards of monthly CommonCrawl covering 2016 to 2019, constituting 45TB of compressed plaintext before filtering and 570GB after filtering, roughly equivalent to 400 billion byte-pair-encoded tokens."
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
- **[measured-finding]** The GPT-3 paper states that the CommonCrawl data used to train GPT-3 amounted to 570GB after filtering.
  - as of: 2020-05-28
  - quote: "The CommonCrawl data was downloaded from 41 shards of monthly CommonCrawl covering 2016 to 2019, constituting 45TB of compressed plaintext before filtering and 570GB after filtering, roughly equivalent to 400 billion byte-pair-encoded tokens."
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
- **[measured-finding]** The GPT-3 paper's table of datasets used to train GPT-3 gives filtered Common Crawl a weight in the training mix of 60%.
  - as of: 2020-05-28
  - quote: "Common Crawl (filtered) 410 billion 60% 0.44"
  - quote: "Table 2.2: Datasets used to train GPT-3. “Weight in training mix” refers to the fraction of examples during training that are drawn from a given dataset, which we intentionally do not make proportional to the size of the dataset."
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
- **[measured-finding]** For filtered Common Crawl, weight in training mix means the fraction of training examples drawn from Common Crawl rather than Common Crawl's share of the corpus.
  - as of: 2020-05-28
  - quote: "Common Crawl (filtered) 410 billion 60% 0.44"
  - quote: "Table 2.2: Datasets used to train GPT-3. “Weight in training mix” refers to the fraction of examples during training that are drawn from a given dataset, which we intentionally do not make proportional to the size of the dataset."
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165
  - source: https://ar5iv.labs.arxiv.org/html/2005.14165

### Changed on (1)

- **[changed-on]** Common Crawl published a document called The AI Visibility Audit.
  - as of: 2026-06-01
  - quote: "Introducing the AI Visibility Audit June 1, 2026"
  - quote: "Today Common Crawl is publishing The AI Visibility Audit, a free field guide built for the SEOs and GEOs who are already doing this work and want a concrete framework rather than theory."
  - source: https://commoncrawl.org/blog
  - source: https://commoncrawl.org/blog/introducing-the-ai-visibility-audit

### Echoed without a primary source (2)

- **[echoed-claim]** A Search Engine Journal article dated August 10, 2026 states that roughly 492,000 sites name Common Crawl's CCBot in robots.txt.
  - as of: 2026-08-10
  - quote: "August 10, 2026"
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
- **[echoed-claim]** A Search Engine Journal article dated August 10, 2026 states that about 95% of the mentions of Common Crawl's CCBot in robots.txt exist to block it.
  - as of: 2026-08-10
  - quote: "August 10, 2026"
  - quote: "Chris Green posted HTTP Archive numbers on LinkedIn recently. Roughly 492,000 sites name CCBot in robots.txt, and about 95% of those mentions exist to block it."
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
  - source: https://www.searchenginejournal.com/common-crawl-published-a-manual-for-being-visible-to-ai-i-automated-it/584466/
