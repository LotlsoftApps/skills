# Lotlsoft skills

Agent skills that answer from cited, dated evidence rather than from folklore.

## Install

```text
/plugin marketplace add LotlsoftApps/skills
/plugin install seo-evidence@lotlsoft
```

Or copy a skill straight in, with no plugin machinery:

```bash
git clone https://github.com/LotlsoftApps/skills.git
cp -r skills/plugins/seo-evidence/skills/seo-evidence ~/.claude/skills/
```

## Skills

### seo-evidence 1.1.0

Answers SEO and crawler questions from 1,163 cited, dated primary sources instead of training-data folklore, says which commonly repeated ideas a primary source contradicts and which have no source anyone could find, and audits a live site against the same evidence.

### renting-evidence 1.1.0

Answers questions about renting in Victoria, Australia from 1,177 cited, dated primary sources - Consumer Affairs Victoria, the Residential Tenancies Act 1997 and VCAT - instead of training-data folklore, and says which commonly repeated renting rules a primary source contradicts, which are backed, and which nobody could source. Victoria only, and not legal advice.

### guarantees-evidence 1.0.0

Answers questions about Australian consumer guarantees from 873 cited, dated primary sources - the ACCC, the Australian Consumer Law and state consumer regulators - instead of training-data folklore, and says which commonly repeated shop rules a primary source contradicts and which have no source anyone could find. Covers refunds, repairs, replacements, faulty goods, 'no refunds' signs, warranties, durability and proof of purchase. Australia-wide, and not legal advice.

## Provenance

This repository is generated. Issues and corrections are welcome here; the
fix is made upstream and republished, so do not send patches against the
generated files.
