---
name: renting-evidence
description: Answer questions about renting in Victoria, Australia from cited, dated primary sources - Consumer Affairs Victoria, the Residential Tenancies Act 1997 and VCAT - instead of training-data folklore, and check whether a widely repeated renting claim has any primary source. Use when asked what the law says about bond, rent increases, rent bidding, urgent or non-urgent repairs, notice to vacate, notice of intention to vacate, breaking a lease, condition reports, final inspections, right of entry, pets, modifications, subletting, minimum standards, smoke alarms, gas and electrical safety checks, utility charges, abandoned goods, rooming houses, domestic violence provisions, rental applications, arrears, compensation claims or VCAT - including phrasings like "can my landlord…", "how much notice do I need", "is it legal to…", "what are my rights as a renter", "do I have to pay for…". Victoria only, and not legal advice.
---

# Victorian renting law, with the receipts

1,177 claims about renting in Victoria, across 30 subjects, drawn from 596
cited sources. Every claim carries a direct quote from a named source, that
source's own URL, and the date the quote was true. A further 272 claims were
written and refused for lack of support; those are not here.

**This covers Victoria, Australia, and nowhere else.** Renting law is state law.
"Bond", "notice to vacate" and "minimum standards" all mean different things in
New South Wales, Queensland or the UK, and the numbers attached to them differ
too. If the question is not about Victoria, this skill does not answer it - say
so rather than adapting a Victorian rule to another state.

## This is not legal advice, and it is not about anyone's tenancy

Say this when it matters, and it usually matters. Renting disputes turn on facts
this evidence set does not have: the specific agreement, its dates, what was
said and when, what was in the condition report. **A rule stated correctly here
can still be the wrong rule for the person asking.**

Point people to someone who can advise on their actual situation:

- **Tenants Victoria** - free advice for renters
- **Consumer Affairs Victoria** - the regulator, and the publisher of much of what is quoted here
- **Victoria Legal Aid** - legal help, including at VCAT

Never tell someone what will happen in their case, what to file, or what a
tribunal will decide. Quote what the law and the regulator say, and hand off.

Paths below are relative to this skill's own directory - the one holding this
`SKILL.md`. From anywhere else, prefix them, e.g.
`~/.claude/skills/renting-evidence/references/index.md`.

## Answering a question

1. **Find the subject.** `grep -i "<term>" references/index.md` - 30 subjects,
   one row each, with claim and echo counts.
2. **Read the subject file.** `references/subjects/<slug>.md` holds every claim,
   grouped by evidence type, each with its quote, its source URL and its date.
   These files carry no summary: none was written that held up against the
   claims behind it, so the claims stand on their own. Quote them directly.
3. **Check the repeated-ideas list before repeating a rule of thumb.**
   `grep -i "<term>" references/echoed.md`. Renting is full of confidently
   repeated folklore, and each entry carries the result of going and looking for
   its source:
   - **contradicted** - a primary source says the opposite. Say so, with the quote.
   - **backed** - a real source exists. Use it, and check what it actually says.
   - **searched, nothing found** - the searches are listed. Say the field repeats
     it and no source could be found, on that date. Never say it is false.
   - **not yet checked** - say it is commonly repeated, and nothing more.
4. **Answer with the quote, the source and the date.** Not "your landlord must
   give 60 days notice" but "Consumer Affairs Victoria, as of `<date>`, says
   `<quote>`" plus the link.

```bash
grep -ril "urgent repair" references/subjects/ | head
grep -i -A4 "notice period" references/subjects/notice-to-vacate.md
```

## What each evidence type licenses you to say

This vocabulary is the skill. Using the wrong verb for the evidence type is how
confident, wrong advice about someone's home gets written.

| Type                  | What it is                                             | What you may say                                                      |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------------------------- |
| `documented-position` | The Act's or the regulator's own words                 | "The Act provides…" / "Consumer Affairs Victoria says…"               |
| `measured-finding`    | Someone measured it, method attached                   | "X measured…", naming who and when                                    |
| `practical-effect`    | Observed practice, distinct from the black-letter rule | "In practice…", with the source                                       |
| `changed-on`          | A dated change                                         | "Since `<date>`…" - this is where advice expires                      |
| `disputed-between`    | Sources disagree                                       | Give both. Do not pick a winner                                       |
| `echoed-claim`        | Repeated, no primary source in reach                   | "This is widely repeated, and nothing here establishes it either way" |

**Never present an unchecked `echoed-claim` as established, and never present it
as debunked.** It is not a falsehood, and its absence here is not proof of
absence: these claims come from a bounded set of documents, so a missing source
can mean the idea has none, or only that the document carrying it was never
read. The finding is the repetition.

`disputed-between` deserves particular care here - 74 claims sit in it. Where
the regulator's plain-English guidance and the Act's text pull in different
directions, give both and say which is which. Do not resolve it for the reader.

## The repeated ideas, and what checking them produced

184 claims across 29 subjects are established as REPETITIONS: a named
publication said it, and the quote proves it said it, but no primary source
travelled with it. Each is being checked on its own. So far: **28 contradicted
by a primary source, 78 backed by one, 15 searched with nothing found, and 24
where a real source says something narrower than the retelling.**

The 28 contradicted ones are the most useful thing in this skill, and they are
listed first in `references/echoed.md` with the quote that contradicts them.
Those can be answered flatly.

## When the evidence is silent, or old

Say so, and say what you are falling back on. 30 subjects do not cover every
renting question, and a confident answer assembled from training data while a
cited skill is loaded is worse than no skill at all, because the citation
posture makes it look checked.

Every file is stamped with the date it was compiled, and every claim with the
date its quote was true. 149 claims here are dated CHANGES to rules that were
previously different, which is what this material is for: renting law is amended
and the regulator rewrites its guidance, both without announcing it. When a claim
is load-bearing and old, open its source URL and check it still says what it said.
