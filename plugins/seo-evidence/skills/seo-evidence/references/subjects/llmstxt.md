# llms.txt

Compiled 2026-08-14. Every claim carries the date its quote was true; search engines change their documentation without announcing it.

## Summary

Written from the claims below and checked against them.

Google added a note to its AI optimization guide on June 15, 2026 clarifying Google Search's usage of llms.txt files, and as of July 10, 2026, Google Search Central states that Google Search ignores llms.txt files and that creating or maintaining them neither harms nor helps visibility or rankings in Google Search, while Chrome for Developers Lighthouse documentation instructs site owners to create an llms.txt file in the site root and describes the file as an optional emerging convention. Ahrefs log analysis reported on June 16, 2026 across 137,000 domains found 97% of llms.txt files received zero requests, only about 1,100 of roughly 38,000 valid files received any traffic, and SE Ranking's analysis of 300,000 domains showed no connection between having an llms.txt file and AI citation frequency. On August 7, 2026, Search Engine Journal published a statement attributed to Google's John Mueller saying no AI system currently uses llms.txt and that server logs make this obvious. As of August 10, 2026, llmstxt.org states llms.txt is used most heavily for software documentation, where coding agents follow the files to find API references and tutorials, and the version 2 proposal removed the special mechanical meaning of the Optional section and allows replacing the file extension.

## Claims (41)

### Documented position (14)

- **[documented-position]** Google Search Central's documentation states, under a heading naming LLMS.txt files, that Google Search itself does not use machine readable files, AI text files, markup or Markdown created to appear in Google Search.
  - as of: 2026-07-10
  - quote: "LLMS.txt files and other "special" markup: You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's documentation states that creating and maintaining LLMS.txt files will neither harm nor help a site's visibility or rankings in Google Search.
  - as of: 2026-07-10
  - quote: "It's completely fine if you decide to create and maintain LLMS.txt files (or other similar files) for other services or systems that use these files. Doing so will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google Search Central's documentation states that Google Search ignores LLMS.txt files.
  - as of: 2026-07-10
  - quote: "It's completely fine if you decide to create and maintain LLMS.txt files (or other similar files) for other services or systems that use these files. Doing so will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation describes the llms.txt file as an emerging convention.
  - as of: 2026-05-05
  - quote: "The llms.txt file is an emerging convention used to provide a machine-readable summary of a website's content, specifically designed for LLMs and AI agents."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation describes the llms.txt file as used to provide a machine-readable summary of a website's content.
  - as of: 2026-05-05
  - quote: "The llms.txt file is an emerging convention used to provide a machine-readable summary of a website's content, specifically designed for LLMs and AI agents."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation describes the llms.txt file as designed for LLMs and AI agents.
  - as of: 2026-05-05
  - quote: "The llms.txt file is an emerging convention used to provide a machine-readable summary of a website's content, specifically designed for LLMs and AI agents."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation states that providing an llms.txt file is optional at the moment.
  - as of: 2026-05-05
  - quote: "If the file is not provided by the server (resulting in a 404), the audit is marked as Not Applicable (N/A), as providing the file is optional at the moment."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation marks the audit Not Applicable when the llms.txt file returns a 404.
  - as of: 2026-05-05
  - quote: "If the file is not provided by the server (resulting in a 404), the audit is marked as Not Applicable (N/A), as providing the file is optional at the moment."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Google's Chrome for Developers Lighthouse documentation states that without an llms.txt file, agents may spend more time crawling a site to understand its high-level structure and primary content.
  - as of: 2026-05-05
  - quote: "Without this file, agents may spend more time crawling the site to understand its high-level structure and primary content."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
- **[documented-position]** Version 1 of the llms.txt proposal specified only one URL form for markdown versions of pages, with .md appended to the full page URL.
  - as of: 2026-08-10
  - quote: "v1 specified one URL form for markdown versions, .md appended to the full page URL (page.html.md). Some publishing tools instead replace the extension (page.md), so v2 allows both."
  - source: https://llmstxt.org/changes.html
- **[documented-position]** The llms.txt proposal at llmstxt.org states that the expectation was that llms.txt would mainly be useful for inference rather than training.
  - as of: 2026-08-10
  - quote: "Our expectation was that llms.txt would mainly be useful for inference rather than training, and that is how it has been used, though training runs could take advantage of the information too."
  - source: https://llmstxt.org/
- **[documented-position]** The llms.txt proposal at llmstxt.org states that llms.txt has mainly been used for inference rather than training.
  - as of: 2026-08-10
  - quote: "Our expectation was that llms.txt would mainly be useful for inference rather than training, and that is how it has been used, though training runs could take advantage of the information too."
  - source: https://llmstxt.org/
- **[documented-position]** The llms.txt proposal at llmstxt.org states that llms.txt files are used most heavily for software documentation.
  - as of: 2026-08-10
  - quote: "llms.txt files are used most heavily for software documentation, where coding agents follow them to find API references and tutorials."
  - source: https://llmstxt.org/
- **[documented-position]** The llms.txt proposal at llmstxt.org states that coding agents follow llms.txt files to find API references and tutorials.
  - as of: 2026-08-10
  - quote: "llms.txt files are used most heavily for software documentation, where coding agents follow them to find API references and tutorials."
  - source: https://llmstxt.org/

### Measured finding (15)

- **[measured-finding]** Search Engine Journal reports that Ahrefs analyzed logs from 137,000 domains.
  - as of: 2026-06-16
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that Ahrefs found that 97% of llms.txt files got zero requests.
  - as of: 2026-06-16
  - quote: "Ahrefs analyzed logs from 137,000 domains and found 97% of llms.txt files got zero requests. No bots, no humans."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that around 28% of the 137,000 domains in the Ahrefs llms.txt analysis publish an llms.txt file.
  - as of: 2026-06-16
  - quote: "Around 28% of 137,000 domains publish an llms.txt file, but since Ahrefs' customers are more technical, the actual adoption on the broader web is likely lower."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that llms.txt adoption on the broader web is likely lower than the 28% rate in the Ahrefs llms.txt analysis because Ahrefs' customers are more technical.
  - as of: 2026-06-16
  - quote: "Around 28% of 137,000 domains publish an llms.txt file, but since Ahrefs' customers are more technical, the actual adoption on the broader web is likely lower."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that in the Ahrefs llms.txt analysis, roughly 38,000 domains had valid llms.txt files.
  - as of: 2026-06-16
  - quote: "Of roughly 38,000 domains with valid files, only about 1,100 received any traffic."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that in the Ahrefs llms.txt analysis, only about 1,100 of the roughly 38,000 domains with valid llms.txt files received any traffic.
  - as of: 2026-06-16
  - quote: "Of roughly 38,000 domains with valid files, only about 1,100 received any traffic."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** In the Ahrefs llms.txt analysis, AI retrieval bots linked to ChatGPT and Perplexity made up 1% of requests to llms.txt files.
  - as of: 2026-06-16
  - quote: "Of files with requests, 96% came from bots, mostly non-AI. AI retrieval bots linked to ChatGPT and Perplexity made up 1%."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that in the Ahrefs llms.txt analysis, 12% of requests to llms.txt files came from tools that audit, scan or study the files rather than use them.
  - as of: 2026-06-16
  - quote: "The report found 12% of requests from tools that audit, scan, or study llms.txt files rather than use them."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Search Engine Journal reports that in the Ahrefs llms.txt analysis, Slackbot alone fetched llms.txt files more often than PerplexityBot did.
  - as of: 2026-06-16
  - quote: "Slackbot alone fetched llms.txt files more often than PerplexityBot did."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** The Ahrefs llms.txt analysis measured requests rather than whether bots acted on what they fetched.
  - as of: 2026-06-16
  - quote: "Every figure in this report is a ceiling. Ahrefs measured requests, not whether bots acted on what they fetched."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Every figure in the Ahrefs llms.txt analysis report is a ceiling.
  - as of: 2026-06-16
  - quote: "Every figure in this report is a ceiling. Ahrefs measured requests, not whether bots acted on what they fetched."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** Requests for /llms.txt paths returning 404 errors drew no AI traffic in the Ahrefs analysis.
  - as of: 2026-06-16
  - quote: "Requests for /llms.txt paths with 404 errors drew no AI traffic."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** The Chrome Lighthouse llms.txt audit generated about 22 requests across the Ahrefs dataset.
  - as of: 2026-06-16
  - quote: "The Chrome Lighthouse llms.txt audit, which reignited the llms.txt debate in May, generated about 22 requests across the dataset, roughly 1 in 1,000."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** The Chrome Lighthouse llms.txt audit generated roughly 1 in 1,000 requests across the Ahrefs dataset.
  - as of: 2026-06-16
  - quote: "The Chrome Lighthouse llms.txt audit, which reignited the llms.txt debate in May, generated about 22 requests across the dataset, roughly 1 in 1,000."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/
- **[measured-finding]** SE Ranking's analysis of 300,000 domains showed no connection between having an llms.txt file and AI citation frequency.
  - as of: 2026-06-16
  - quote: "SE Ranking's earlier analysis of 300,000 domains showed no connection between having llms.txt and AI citation frequency."
  - source: https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/

### Practical effect (3)

- **[practical-effect]** Search Engine Journal published a statement attributed to Google's John Mueller about llms.txt.
  - as of: 2026-08-07
  - quote: ""FWIW no AI system currently uses llms.txt, [..] It's super-obvious if you look at your server logs. The consumer LLMs / chatbots (the ones that SEOs want traffic from) will fetch your pages – for training and grounding, but none of them fetch the llms.txt file. Maybe they will tomorrow? Maybe I'll win in the lottery tomorrow?""
  - quote: "John Mueller, Google"
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[practical-effect]** The statement attributed to Google's John Mueller says that no AI system currently uses llms.txt.
  - as of: 2026-08-07
  - quote: ""FWIW no AI system currently uses llms.txt, [..] It's super-obvious if you look at your server logs. The consumer LLMs / chatbots (the ones that SEOs want traffic from) will fetch your pages – for training and grounding, but none of them fetch the llms.txt file. Maybe they will tomorrow? Maybe I'll win in the lottery tomorrow?""
  - quote: "John Mueller, Google"
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[practical-effect]** The statement attributed to Google's John Mueller says that server logs make it obvious that no AI system currently uses llms.txt.
  - as of: 2026-08-07
  - quote: ""FWIW no AI system currently uses llms.txt, [..] It's super-obvious if you look at your server logs. The consumer LLMs / chatbots (the ones that SEOs want traffic from) will fetch your pages – for training and grounding, but none of them fetch the llms.txt file. Maybe they will tomorrow? Maybe I'll win in the lottery tomorrow?""
  - quote: "John Mueller, Google"
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/

### Changed on (4)

- **[changed-on]** Google added a note to its AI optimization guide clarifying Google Search's usage of llms.txt files on June 15, 2026.
  - as of: 2026-06-15
  - quote: "June 2026"
  - quote: "June 15"
  - quote: "Clarifying guidance on llms.txt files"
  - quote: "What: Added a note to the AI optimization guide clarifying Google Search's usage of llms.txt files."
  - source: https://developers.google.com/search/updates
  - source: https://developers.google.com/search/updates
  - source: https://developers.google.com/search/updates
  - source: https://developers.google.com/search/updates
- **[changed-on]** The llms.txt proposal published at llmstxt.org was revised to version 2 in August 2026.
  - as of: 2026-08-10
  - quote: "v2 (August 2026)"
  - quote: "The original llms.txt proposal was published in September 2024, when the idea that language models would routinely read websites was still speculative."
  - source: https://llmstxt.org/changes.html
  - source: https://llmstxt.org/changes.html
- **[changed-on]** Version 2 of the llms.txt proposal removed the special mechanical meaning of the Optional section.
  - as of: 2026-08-10
  - quote: "The context-expansion tooling is no longer part of the proposal, and with it goes the special meaning of the Optional section, which told those tools what to omit. Optional sections are still allowed, and remain a useful convention for secondary links, but they no longer carry mechanical semantics."
  - source: https://llmstxt.org/changes.html
- **[changed-on]** Version 2 of the llms.txt proposal allows replacing the extension.
  - as of: 2026-08-10
  - quote: "v1 specified one URL form for markdown versions, .md appended to the full page URL (page.html.md). Some publishing tools instead replace the extension (page.md), so v2 allows both."
  - source: https://llmstxt.org/changes.html

### Disputed between sources (2)

- **[disputed-between]** Google's Chrome for Developers Lighthouse documentation instructs site owners to create an llms.txt file in their website's root directory.
  - as of: 2026-07-10
  - quote: "Create an llms.txt file and place it in the root directory of your website (for example, https://example.com/llms.txt). The file should follow the llms.txt specification and provide a concise Markdown summary of your site's purpose and key links."
  - quote: "Optimizing your website for generative AI features on Google Search"
  - quote: "Prioritize effective SEO strategies over "AEO/GEO hacks": For Google Search, you can ignore tactics like "chunking" content, creating unnecessary AI text files (like llms.txt), or pursuing inauthentic mentions."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **[disputed-between]** Google Search Central's guide to optimizing for generative AI features on Google Search tells site owners they can ignore creating AI text files like llms.txt.
  - as of: 2026-07-10
  - quote: "Create an llms.txt file and place it in the root directory of your website (for example, https://example.com/llms.txt). The file should follow the llms.txt specification and provide a concise Markdown summary of your site's purpose and key links."
  - quote: "Optimizing your website for generative AI features on Google Search"
  - quote: "Prioritize effective SEO strategies over "AEO/GEO hacks": For Google Search, you can ignore tactics like "chunking" content, creating unnecessary AI text files (like llms.txt), or pursuing inauthentic mentions."
  - source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

### Echoed without a primary source (3)

- **[echoed-claim]** Search Engine Journal asserts that large studies show no measurable citation advantage for sites that add an llms.txt file.
  - as of: 2026-08-07
  - quote: "a finding since echoed by other large studies showing no measurable citation advantage for sites that add one"
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[echoed-claim]** Search Engine Journal's account reported that cats.txt passed all four proofs commonly cited for llms.txt.
  - as of: 2026-08-07
  - quote: "Then, I checked it against the exact four "proofs" people cite for llms.txt. It passed all four."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
- **[echoed-claim]** Search Engine Journal published the argument that a crawler fetching llms.txt tells you nothing about whether the contents of llms.txt are read, weighted, trusted or acted upon.
  - as of: 2026-08-07
  - quote: "A crawler fetching a file tells you nothing about whether the contents are read, weighted, trusted, or acted upon. Fetching things is the entire job description of a crawler."
  - source: https://www.searchenginejournal.com/how-cats-txt-showed-llms-txt-evidence-is-geo-astrology/584653/
