---
name: Locale JSON merge conflicts
description: Rebase/auto-merge can corrupt large locale JSON files by appending keys after the closing brace
---
When a task rebase auto-merges `client/src/locales/*/treatments.json` and both branches appended top-level keys, the merged file can end up with valid JSON followed by extra `"key": {...}` blocks after the final `}` (typecheck fails with TS1012/TS1005 in the .json).

**Why:** git line-merge doesn't understand JSON; both sides append near EOF.

**How to apply:** After any rebase touching locale files, validate all of them with `python3 -c "json.load(...)"`. Fix by `raw_decode`-ing the first object, then regex-scanning the remainder for `"key": <value>` pairs and merging them in (dump with `indent=2, ensure_ascii=False`). Also verify structural parity of translated keys against `en` with a shape-compare script.
