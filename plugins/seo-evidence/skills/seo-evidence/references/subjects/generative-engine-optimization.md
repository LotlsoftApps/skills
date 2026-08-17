# generative engine optimization

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

As of 2026-07-10, Google Search Central's AI optimization guide states that from Google Search's perspective optimizing for generative AI search is still SEO, that many suggested AEO/GEO hacks are not effective or supported by how Google Search actually works, and that machine readable files, AI text files, Markdown, special schema.org markup, and chunking are not needed; it also says llms.txt neither harms nor helps Google Search visibility or rankings, and that no third party tool has access to Google's internal ranking or AI systems. As of 2026-05-20, Google's Lighthouse 13.3 added an Agentic Browsing llms.txt audit while Chrome for Developers' Lighthouse documentation describes the file as an optional emerging convention for LLMs and AI agents, a split that can lead to conflicting instructions with Google's Search docs. Measured findings from 2026 include Ahrefs finding that 97% of llms.txt files across 137,000 domains got zero requests, with the stated caveat that every figure is a ceiling because it measured requests rather than whether bots acted on what they fetched, and SE Ranking finding no connection between having llms.txt and AI citation frequency. The 2024 paper introducing Generative Engine Optimization reports visibility gains up to 40% in generative engine responses but also reports that efficacy varies across domains.

## Claims (54)

### Documented position (19)

- **[documented-position]** Google Search Central's AI optimization guide states that, from Google Search's perspective, optimizing for generative AI search is optimizing for the search experience.
  - as of: 2026-07-10
  - quote: "From Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that, from Google Search's perspective, optimizing for generative AI search is therefore still SEO.
  - as of: 2026-07-10
  - quote: "From Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that many of the 'hacks' suggested under the labels Answer Engine Optimization and Generative Engine Optimization are not effective.
  - as of: 2026-07-10
  - quote: "While terms like Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO) are common online, many suggested "hacks" aren't effective or supported by how Google Search actually works."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that many of the 'hacks' suggested under the labels Answer Engine Optimization and Generative Engine Optimization are not supported by how Google Search actually works.
  - as of: 2026-07-10
  - quote: "While terms like Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO) are common online, many suggested "hacks" aren't effective or supported by how Google Search actually works."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that creating and maintaining LLMS.txt files will neither harm nor help a site's visibility or rankings in Google Search, because Google Search ignores them.
  - as of: 2026-07-10
  - quote: "It's completely fine if you decide to create and maintain LLMS.txt files (or other similar files) for other services or systems that use these files. Doing so will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that no new machine readable files, AI text files, markup or Markdown are needed to appear in Google Search including its generative AI capabilities.
  - as of: 2026-07-10
  - quote: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that Google Search itself does not use machine readable files, AI text files, markup or Markdown.
  - as of: 2026-07-10
  - quote: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that structured data is not required for generative AI search.
  - as of: 2026-07-10
  - quote: "Overfocusing on structured data: Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that there is no special schema.org markup that needs to be added.
  - as of: 2026-07-10
  - quote: "Overfocusing on structured data: Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that there is no requirement to break content into tiny pieces for AI to better understand it.
  - as of: 2026-07-10
  - quote: ""Chunking" content: There's no requirement to break your content into tiny pieces for AI to better understand it. Google systems are able to understand the nuance of multiple topics on a page and show the relevant piece to users."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that no third-party tool has access to Google's internal ranking or AI systems.
  - as of: 2026-07-10
  - quote: "Be wary of third-party tools that promise ranking success or claim to use "internal" Google metrics. No third-party tool has access to our internal ranking or AI systems."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that writing in a specific way just for generative AI search is not necessary.
  - as of: 2026-07-10
  - quote: "Rewriting content just for AI systems: You don't need to write in a specific way just for generative AI search. AI systems can understand synonyms and general meanings of what someone is seeking, in order to connect them with content that might not use the same precise words."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that AI systems can understand synonyms and general meanings.
  - as of: 2026-07-10
  - quote: "Rewriting content just for AI systems: You don't need to write in a specific way just for generative AI search. AI systems can understand synonyms and general meanings of what someone is seeking, in order to connect them with content that might not use the same precise words."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that creating separate content for every possible variation of how people might search is done primarily to manipulate rankings or generative AI responses in Google Search.
  - as of: 2026-07-10
  - quote: "While it might be tempting to create separate content for every possible variation of how people might search (for example, by focusing on other queries that people have asked, or fan-out queries), doing so primarily to manipulate rankings or generative AI responses in Google Search violates Google's scaled content abuse spam policy."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's AI optimization guide states that seeking inauthentic 'mentions' across the web is not as helpful as it might seem.
  - as of: 2026-07-10
  - quote: "However, seeking inauthentic "mentions" across the web isn't as helpful as it might seem. Our core ranking systems focus on high-quality content while other systems block spam; our generative AI features depend on both."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** For generative engine optimization, Chrome for Developers' Lighthouse documentation describes llms.txt as an emerging convention.
  - as of: 2026-05-05
  - quote: "The llms.txt file is an emerging convention used to provide a machine-readable summary of a website's content, specifically designed for LLMs and AI agents."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** For generative engine optimization, Chrome for Developers' Lighthouse documentation describes llms.txt as specifically designed for LLMs and AI agents.
  - as of: 2026-05-05
  - quote: "The llms.txt file is an emerging convention used to provide a machine-readable summary of a website's content, specifically designed for LLMs and AI agents."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Chrome for Developers' Lighthouse documentation states that, for generative engine optimization, the audit is marked Not Applicable if the llms.txt file is not provided by the server.
  - as of: 2026-05-05
  - quote: "Lighthouse flags the pages if a server error occurs when attempting to retrieve the llms.txt file. If the file is not provided by the server (resulting in a 404), the audit is marked as Not Applicable (N/A), as providing the file is optional at the moment."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Search Engine Journal's report on generative engine optimization says cats.txt is an invented file standard.
  - as of: 2026-08-07
  - quote: "so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "Then, I checked it against the exact four “proofs” people cite for llms.txt. It passed all four. It was crawled by the AI bots. Google indexed it. LLMs returned details about a cat that exists nowhere but the file."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/

### Measured finding (18)

- **[measured-finding]** The academic paper that introduced the term Generative Engine Optimization reports that GEO can boost visibility by up to 40% in generative engine responses.
  - as of: 2024-06-28
  - quote: "To address this, we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework for optimizing and defining visibility metrics. We facilitate systematic evaluation by introducing GEO-bench, a large-scale benchmark of diverse user queries across multiple domains, along with relevant web sources to answer these queries. Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to $40\%$ in generative engine responses."
  - source: https://arxiv.org/abs/2311.09735
- **[measured-finding]** The academic paper that introduced the term Generative Engine Optimization reports that GEO's visibility boost was evaluated on a benchmark of diverse user queries called GEO-bench.
  - as of: 2024-06-28
  - quote: "To address this, we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework for optimizing and defining visibility metrics. We facilitate systematic evaluation by introducing GEO-bench, a large-scale benchmark of diverse user queries across multiple domains, along with relevant web sources to answer these queries. Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to $40\%$ in generative engine responses."
  - source: https://arxiv.org/abs/2311.09735
- **[measured-finding]** The paper that introduced Generative Engine Optimization reports that the efficacy of GEO strategies varies across domains.
  - as of: 2024-06-28
  - quote: "Moreover, we show the efficacy of these strategies varies across domains, underscoring the need for domain-specific optimization methods."
  - source: https://arxiv.org/abs/2311.09735
- **[measured-finding]** The paper that introduced Generative Engine Optimization underscores the need for domain-specific optimization methods.
  - as of: 2024-06-28
  - quote: "Moreover, we show the efficacy of these strategies varies across domains, underscoring the need for domain-specific optimization methods."
  - source: https://arxiv.org/abs/2311.09735
- **[measured-finding]** Search Engine Journal reports that Ahrefs analyzed logs from 137,000 domains.
  - as of: 2026-06-16
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that Ahrefs found that 97% of llms.txt files got zero requests.
  - as of: 2026-06-16
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports a stated caveat on the Ahrefs llms.txt analysis for generative engine optimization.
  - as of: 2026-06-16
  - quote: "Every figure in this report is a ceiling. Ahrefs measured requests, not whether bots acted on what they fetched."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** The stated caveat on the Ahrefs llms.txt analysis for generative engine optimization says every figure in the report is a ceiling.
  - as of: 2026-06-16
  - quote: "Every figure in this report is a ceiling. Ahrefs measured requests, not whether bots acted on what they fetched."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** The reason every figure in the Ahrefs llms.txt analysis for generative engine optimization is a ceiling is that Ahrefs measured requests rather than whether bots acted on what they fetched.
  - as of: 2026-06-16
  - quote: "Every figure in this report is a ceiling. Ahrefs measured requests, not whether bots acted on what they fetched."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** According to the Ahrefs llms.txt analysis on generative engine optimization, around 28% of the 137,000 domains publish an llms.txt file.
  - as of: 2026-06-16
  - quote: "The analysis used Ahrefs data to identify user agents fetching files. Around 28% of 137,000 domains publish an llms.txt file, but since Ahrefs’ customers are more technical, the actual adoption on the broader web is likely lower."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** According to the Ahrefs llms.txt analysis on generative engine optimization, the actual adoption of llms.txt on the broader web is likely lower than 28% because Ahrefs' customers are more technical.
  - as of: 2026-06-16
  - quote: "The analysis used Ahrefs data to identify user agents fetching files. Around 28% of 137,000 domains publish an llms.txt file, but since Ahrefs’ customers are more technical, the actual adoption on the broader web is likely lower."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** In the Ahrefs llms.txt analysis of generative engine optimization, AI retrieval bots linked to ChatGPT and Perplexity made up 1% of the requests to llms.txt files that received any requests.
  - as of: 2026-06-16
  - quote: "Of files with requests, 96% came from bots, mostly non-AI. AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that SE Ranking's earlier analysis examined 300,000 domains.
  - as of: 2026-06-16
  - quote: "SE Ranking’s earlier analysis of 300,000 domains showed no connection between having llms.txt and AI citation frequency."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that SE Ranking's earlier analysis found no connection between having llms.txt and AI citation frequency.
  - as of: 2026-06-16
  - quote: "SE Ranking’s earlier analysis of 300,000 domains showed no connection between having llms.txt and AI citation frequency."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal's report on generative engine optimization says cats.txt passed all four of the 'proofs' people cite for llms.txt.
  - as of: 2026-08-07
  - quote: "so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "Then, I checked it against the exact four “proofs” people cite for llms.txt. It passed all four. It was crawled by the AI bots. Google indexed it. LLMs returned details about a cat that exists nowhere but the file."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[measured-finding]** Search Engine Journal's report on generative engine optimization says cats.txt was crawled by the AI bots.
  - as of: 2026-08-07
  - quote: "so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "Then, I checked it against the exact four “proofs” people cite for llms.txt. It passed all four. It was crawled by the AI bots. Google indexed it. LLMs returned details about a cat that exists nowhere but the file."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[measured-finding]** Search Engine Journal's report on generative engine optimization says Google indexed cats.txt.
  - as of: 2026-08-07
  - quote: "so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "Then, I checked it against the exact four “proofs” people cite for llms.txt. It passed all four. It was crawled by the AI bots. Google indexed it. LLMs returned details about a cat that exists nowhere but the file."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[measured-finding]** Search Engine Journal's report on generative engine optimization says LLMs returned details about a cat that exists nowhere but cats.txt.
  - as of: 2026-08-07
  - quote: "so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "Then, I checked it against the exact four “proofs” people cite for llms.txt. It passed all four. It was crawled by the AI bots. Google indexed it. LLMs returned details about a cat that exists nowhere but the file."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/

### Practical effect (3)

- **[practical-effect]** Search Engine Journal reports that, in generative engine optimization, the split in Google's guidance on llms.txt can lead to conflicting instructions when comparing Lighthouse or Lighthouse's llms.txt documentation with Google's Search docs.
  - as of: 2026-05-20
  - quote: "Guidance is split between different Google developer sites, which can lead to conflicting instructions when comparing Lighthouse or its llms.txt documentation with Google’s Search docs."
  - source: https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/
- **[practical-effect]** Search Engine Land asserts that agencies which previously sold backlinks are now pitching "AI mention building" and "LLM visibility campaigns".
  - as of: 2026-08-10
  - quote: "Agencies that previously sold backlinks are now pitching “AI mention building” and “LLM visibility campaigns.” The sales pitch promises to engineer your brand into ChatGPT, Perplexity, and AI Overviews. Look under the hood, and it’s the exact same playbook wearing a new mask."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
- **[practical-effect]** Search Engine Land asserts that agencies which previously sold backlinks are using the exact same playbook wearing a new mask.
  - as of: 2026-08-10
  - quote: "Agencies that previously sold backlinks are now pitching “AI mention building” and “LLM visibility campaigns.” The sales pitch promises to engineer your brand into ChatGPT, Perplexity, and AI Overviews. Look under the hood, and it’s the exact same playbook wearing a new mask."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530

### Changed on (4)

- **[changed-on]** Google's Lighthouse tool shipped version 13.3.
  - as of: 2026-05-20
  - quote: "Days earlier, Google’s Lighthouse tool shipped version 13.3, which added a new Agentic Browsing category. The update includes an llms.txt audit that checks whether a site provides the file and flags server errors when retrieving it."
  - source: https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/
- **[changed-on]** Google's Lighthouse tool version 13.3 added a new Agentic Browsing category.
  - as of: 2026-05-20
  - quote: "Days earlier, Google’s Lighthouse tool shipped version 13.3, which added a new Agentic Browsing category. The update includes an llms.txt audit that checks whether a site provides the file and flags server errors when retrieving it."
  - source: https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/
- **[changed-on]** Google's Lighthouse tool's new Agentic Browsing category includes an llms.txt audit.
  - as of: 2026-05-20
  - quote: "Days earlier, Google’s Lighthouse tool shipped version 13.3, which added a new Agentic Browsing category. The update includes an llms.txt audit that checks whether a site provides the file and flags server errors when retrieving it."
  - source: https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/
- **[changed-on]** The llms.txt audit in Google's Lighthouse tool's Agentic Browsing category checks whether a site provides the llms.txt file.
  - as of: 2026-05-20
  - quote: "Days earlier, Google’s Lighthouse tool shipped version 13.3, which added a new Agentic Browsing category. The update includes an llms.txt audit that checks whether a site provides the file and flags server errors when retrieving it."
  - source: https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/

### Disputed between sources (2)

- **[disputed-between]** Regarding generative engine optimization, Chrome for Developers' Lighthouse documentation instructs site owners to create an llms.txt file and place it in the root directory of their website.
  - as of: 2026-07-10
  - quote: "Create an llms.txt file and place it in the root directory of your website (for example, https://example.com/llms.txt). The file should follow the llms.txt specification and provide a concise Markdown summary of your site's purpose and key links."
  - quote: "Prioritize effective SEO strategies over "AEO/GEO hacks": For Google Search, you can ignore tactics like "chunking" content, creating unnecessary AI text files (like llms.txt), or pursuing inauthentic mentions."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[disputed-between]** Regarding generative engine optimization, Google Search Central's AI optimization guide tells site owners they can ignore creating AI text files like llms.txt for Google Search.
  - as of: 2026-07-10
  - quote: "Create an llms.txt file and place it in the root directory of your website (for example, https://example.com/llms.txt). The file should follow the llms.txt specification and provide a concise Markdown summary of your site's purpose and key links."
  - quote: "Prioritize effective SEO strategies over "AEO/GEO hacks": For Google Search, you can ignore tactics like "chunking" content, creating unnecessary AI text files (like llms.txt), or pursuing inauthentic mentions."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

### Echoed without a primary source (8)

- **[echoed-claim]** A GEO vendor page asserts that in 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published research titled 'GEO: Generative Engine Optimization'.
  - as of: 2026-08-11
  - quote: "In 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published groundbreaking research titled "GEO: Generative Engine Optimization". The study introduced the GEO-BENCH dataset, a benchmark of 10,000 diverse queries across multiple domains, and systematically tested nine distinct optimization methods to determine which techniques most effectively improved visibility in AI-generated responses."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
- **[echoed-claim]** A GEO vendor page asserts that the research titled 'GEO: Generative Engine Optimization' introduced a GEO-BENCH dataset of 10,000 diverse queries across multiple domains.
  - as of: 2026-08-11
  - quote: "In 2023, researchers from Princeton University, Georgia Tech, the Allen Institute for AI, and IIT Delhi published groundbreaking research titled "GEO: Generative Engine Optimization". The study introduced the GEO-BENCH dataset, a benchmark of 10,000 diverse queries across multiple domains, and systematically tested nine distinct optimization methods to determine which techniques most effectively improved visibility in AI-generated responses."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
- **[echoed-claim]** A generative engine optimization vendor page asserts that the top three generative engine optimization techniques, Cite Sources, Quotation Addition and Statistics Addition, delivered 30-40% visibility improvements across all content categories.
  - as of: 2026-08-11
  - quote: "The results revealed dramatic performance differences. The top three techniques—Cite Sources, Quotation Addition, and Statistics Addition—delivered 30-40% visibility improvements across all content categories."
  - source: https://www.maximuslabs.ai/generative-engine-optimization/geo-experimental-techniques
- **[echoed-claim]** Search Engine Land asserts that Cyrus Shepard found in a recent study that 92% of sites that experience significant organic growth produce their own proprietary assets.
  - as of: 2026-08-10
  - quote: "Cyrus Shepard found in a recent study that 92% of sites that experience significant organic growth produce their own proprietary assets."
  - source: https://searchengineland.com/traditional-link-building-model-no-longer-works-ai-search-484530
- **[echoed-claim]** According to Search Engine Journal's report on generative engine optimization, ChatGPT confirmed at length that an invented file standard called cats.txt could help its author rank.
  - as of: 2026-08-07
  - quote: "I got tired of watching the industry treat “an AI bot fetched it” and “ChatGPT said it helps” as evidence that llms.txt does anything, so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "ChatGPT confirmed, at length, that cats.txt could help me rank. None of which is evidence of anything, which was rather the point."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[echoed-claim]** According to Search Engine Journal's report on generative engine optimization, the author of cats.txt stated that ChatGPT's confirmation is not evidence of anything.
  - as of: 2026-08-07
  - quote: "I got tired of watching the industry treat “an AI bot fetched it” and “ChatGPT said it helps” as evidence that llms.txt does anything, so I invented a standard called cats.txt: a text file in which you formally declare your office cats, their jobs, their breeds, and how often they purr."
  - quote: "ChatGPT confirmed, at length, that cats.txt could help me rank. None of which is evidence of anything, which was rather the point."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[echoed-claim]** Search Engine Journal states in one article that Ahrefs ran the numbers on llms.txt across 100,000 domains.
  - as of: 2026-08-07
  - quote: "Ahrefs ran the numbers across 100,000 domains and found that the file is, in practice, largely ignored by the crawlers it is meant to court, a finding since echoed by other large studies showing no measurable citation advantage for sites that add one."
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[echoed-claim]** Search Engine Journal states in another article that Ahrefs analyzed logs from 137,000 domains.
  - as of: 2026-08-07
  - quote: "Ahrefs ran the numbers across 100,000 domains and found that the file is, in practice, largely ignored by the crawlers it is meant to court, a finding since echoed by other large studies showing no measurable citation advantage for sites that add one."
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
