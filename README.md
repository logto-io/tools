# tools

Public monorepo for website tools that can be embedded into the private website or deployed independently.

## Goals

- Keep tool implementation public.
- Keep the website host app private.
- Preserve a single source of truth for layout and design integration.
- Ensure tools are i18n-ready from day one.

## Workspace structure

- `packages/jwt-decoder`: JWT Decoder tool package (starter scaffold).
- `packages/tool-shell`: shared tool runtime contract and layout integration helpers.
- `packages/i18n`: shared i18n types/utilities for tools.

## Getting started

```bash
pnpm install
pnpm start
```

## Common commands

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Commit hooks

- `pre-commit`: runs each changed workspace `precommit` script.
- `commit-msg`: validates commit messages with commitlint.

## Notes

This repository is intended to be consumed by the private website repo via package dependency/version pinning.
