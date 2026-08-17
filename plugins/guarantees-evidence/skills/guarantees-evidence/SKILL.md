---
name: guarantees-evidence
description: Answer questions about Australian consumer guarantees from cited, dated primary sources - the ACCC, the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010) and state consumer regulators - instead of training-data folklore, and check whether a widely repeated shop rule has any primary source. Use when asked about refunds, repairs, replacements, faulty or defective goods, "no refunds" signs, sale or clearance items, change of mind, proof of purchase or receipts, manufacturer and extended warranties, durability and how long a product should last, store credit or credit notes, gift card expiry, layby, motor vehicles and lemon cars, digital products, services guarantees, spare parts, product recalls, return postage, consequential loss, door-to-door and unsolicited sales, or small claims - including phrasings like "can they refuse a refund", "do I have to accept a credit note", "it's out of warranty", "my rights as a consumer", "is a no refunds sign legal". Australia only, and not legal advice.
---

# Australian consumer guarantees, with the receipts

873 claims about the Australian consumer guarantees, across 31 subjects, drawn
from 124 cited source documents. Every claim carries a direct quote from a named
source, that source's own URL, and the date the quote was true. A further 367
claims were written and refused for lack of support; those are not here.

**This covers Australia.** The consumer guarantees are FEDERAL - they come from
the Australian Consumer Law, which is Schedule 2 to the Competition and Consumer
Act 2010, and they apply the same way in every state and territory. That is the
opposite of renting law, and it is the single most useful thing to know when
answering: **the substantive rule does not change at the border.**

What DOES vary by state is enforcement - which regulator takes a complaint,
which tribunal hears it, what it costs to file. Say which part is federal and
which is state, and do not resolve a reader's forum question for them. This
corpus covers Victoria first among the state regulators, so treat other states'
forum details as uncovered rather than inferring them.

## Three things this skill must never say

Each is a misconception the corpus exists to correct, so getting it wrong while
citing this evidence is worse than having no skill loaded.

1. **They are not warranties.** The consumer guarantees are statutory rights. A
   manufacturer's or retailer's warranty is a separate, voluntary promise sold
   or given on top of them, and it cannot cut them down. The ACCC's durability
   guidance says plainly that a reasonable consumer can expect a good to last
   longer than the warranty period. "It's out of warranty" is not an answer to a
   guarantee question.
2. **A refund is one of three remedies, not the remedy.** Repair and replacement
   are equally available, and for a MAJOR failure the choice belongs to the
   consumer rather than the business. For a minor failure the business may
   choose, and may repair rather than refund.
3. **"No refunds" and "no refunds on sale items" are not the same as "no
   change-of-mind refunds on sale items".** The first two are unlawful; the
   third is expressly permitted. Three words decide it, and this is the single
   most common thing to get wrong.

## This is not legal advice, and it is not about anyone's purchase

Say this when it matters, and it usually matters. These questions turn on facts
this evidence set does not have: what was bought, what was said at the counter,
what has gone wrong, how long ago, and what the business has already been asked
to do. **A rule stated correctly here can still be the wrong rule for the person
asking.**

Point people to someone who can act on their actual situation:

- **The ACCC** - the national regulator, and the publisher of much of what is quoted here
- **The state or territory consumer regulator** - in Victoria, Consumer Affairs Victoria
- **Victoria Legal Aid** (or the equivalent) - legal help, including at a tribunal

Never tell someone what will happen in their case, what to file, or what a
tribunal will decide. Quote what the law and the regulator say, and hand off.

Paths below are relative to this skill's own directory - the one holding this
`SKILL.md`. From anywhere else, prefix them, e.g.
`~/.claude/skills/guarantees-evidence/references/index.md`.

## Answering a question

1. **Find the subject.** `grep -i "<term>" references/index.md` - 31 subjects,
   one row each, with claim and echo counts.
2. **Read the subject file.** `references/subjects/<slug>.md` holds every claim,
   grouped by evidence type, each with its quote, its source URL and its date.
   These files carry no summary: none was written that held up against the
   claims behind it, so the claims stand on their own. Quote them directly.
3. **Check the repeated-ideas list before repeating a rule of thumb.**
   `grep -i "<term>" references/echoed.md`. Retail is full of confidently
   repeated folklore - and unusually here, much of it is PRINTED, on signage and
   returns pages, so it can be checked by anyone. Each entry carries the result
   of going and looking for its source:
   - **contradicted** - a primary source says the opposite. Say so, with the quote.
   - **backed** - a real source exists. Use it, and check what it actually says.
   - **searched, nothing found** - the searches are listed. Say the field repeats
     it and no source could be found, on that date. Never say it is false.
   - **not yet checked** - say it is commonly repeated, and nothing more.
4. **Answer with the quote, the source and the date.** Not "they have to give you
   a refund" but "the ACCC, as of `<date>`, says `<quote>`" plus the link.

```bash
grep -ril "original packaging" references/subjects/ | head
grep -i -A4 "major failure" references/subjects/major-failure.md
```

## What each evidence type licenses you to say

This vocabulary is the skill. Using the wrong verb for the evidence type is how
confident, wrong advice about someone's money gets written.

| Type                  | What it is                                             | What you may say                                                      |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------------------------- |
| `documented-position` | The Act's or a regulator's own words                   | "The ACL provides…" / "The ACCC says…"                                |
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

**A retailer restating the law correctly is the common case, not a finding.**
Most of the retailer policies quoted here match what the regulators say, and
several sentences that look like company policy are text a business is COMPELLED
to publish - the "reasonably foreseeable loss or damage" wording is prescribed
by regulation 90(2), and the refurbished-goods line by ACL s 103. Do not
describe prescribed text as a shop's own choice.

`disputed-between` deserves particular care here - 51 claims sit in it, and
several are regulator against regulator rather than regulator against folklore.
Give both and say which is which.

## The repeated ideas, and what checking them produced

192 claims are established as REPETITIONS: a named publication or retailer said
it, and the quote proves it said it, but no primary source travelled with it.
123 ideas have been checked: **11 contradicted by a primary source, 95 backed by
one, 4 searched with nothing found, and 13 where a real source says something
narrower than the retelling.**

The 11 contradicted ones are the most useful thing in this skill, and they are
listed first in `references/echoed.md` with the quote that contradicts them.
Those can be answered flatly.

## When the evidence is silent, or old

Say so, and say what you are falling back on. 31 subjects do not cover every
consumer question, and a confident answer assembled from training data while a
cited skill is loaded is worse than no skill at all, because the citation
posture makes it look checked.

Every file is stamped with the date it was compiled, and every claim with the
date its quote was true. This material ages in a specific way worth knowing:
**the ACCC and the state regulators rewrite their guidance without announcing
it, and this corpus caught three official sources publishing three different
maximum penalties at the same time** - the Act, a 2023 regulator page, and the
ACCC's own guide from 2016 that is still live and carries a warning that it no
longer reflects current law. When a figure is load-bearing, open its source URL
and check the date on the page, not just the date on the claim.
