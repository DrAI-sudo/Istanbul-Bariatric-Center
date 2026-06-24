---
name: gpt-5-mini chat params
description: Required param differences when calling gpt-5-mini via OpenAI chat.completions
---
gpt-5-mini is a reasoning model. When migrating chat.completions calls to it:
- Use `max_completion_tokens` (NOT `max_tokens`) — `max_tokens` is rejected.
- Reasoning tokens count toward `max_completion_tokens`, so a low cap (e.g. 200-300) can be fully consumed by reasoning leaving empty output. Raise the cap and set `reasoning_effort: "minimal"` for short conversational replies.

**Why:** Maya chatbot streaming + lead-extraction calls returned empty/failed with old `max_tokens: 300`.
**How to apply:** Any new OpenAI reasoning-model call in server/maya-chat.ts.
