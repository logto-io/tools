# Logto Tools

Public monorepo for reusable Logto developer tools.

Goals:

1. Build tools in a public repo with fast local iteration.
2. Integrate tools into website with minimal adaptation.

Current tool: JWT decoder/encoder (`@logto/tools-jwt-decoder`).

## Introduction

This repo contains:

- Reusable tool packages.
- Shared UI and i18n infrastructure.
- A `dev-app` that simulates real website integration.

Engineering rules are aligned with website as much as possible:

- `pnpm` workspace
- Husky + lint-staged
- commitlint (conventional commits)
- `@silverhand/*` lint/format/TS configs

## Design Strategy And Structure

```text
tools/
  packages/
    i18nova/       # shared i18n runtime + language definitions + React bindings
    jwt-decoder/   # tool package (library)
    dev-app/       # local host app for development and integration validation
```

Design principles:

- Keep tools self-contained but integration-ready.
- Use shared UI/styling from `@logto/website-ui-foundation`.
- Use shared `i18nova` language/runtime across all tools.
- Treat `dev-app` as the reference host app.

### i18n model

- Host app provides upper `I18NovaProvider`.
- Tool components prefer inherited language from shared context.
- `currentLanguage` prop is supported as optional override.
- Fallback language is used only if neither is provided.

This mirrors the website integration pattern.

## Quick Start

Requirements:

- Node.js `^22.0.0`
- pnpm `^10.0.0`

Install:

```bash
pnpm install
```

Run dev app:

```bash
pnpm --filter @logto/tools-dev-app dev
```

Workspace checks:

```bash
pnpm lint
pnpm stylelint
pnpm typecheck
pnpm test
pnpm build
```

## New Tool Development Guide

Use this flow for any new tool (for example `saml-decoder`).

1. Scaffold package
- Create `packages/<tool-name>`.
- Add scripts: `precommit`, `build`, `lint`, `stylelint`, `typecheck`, `test`.
- Reuse lint/TS/style config pattern from existing packages.

2. Define public API
- Export top-level component from `src/index.ts`.
- Support optional `className`.
- Support host-first i18n behavior (inherited context, optional explicit language override).

3. Add i18n
- Add locale files under `src/locales`.
- Use shared language list/types from `i18nova`.
- Avoid hardcoded user-facing strings in component code.

4. Reuse shared UI
- Use `@logto/website-ui-foundation`.
- Keep tool-specific composition local to each tool package.
- Keep tool business logic inside the tool package.

5. Integrate in `dev-app`
- Add route metadata in `packages/dev-app/src/routes/index.ts`:
  - `id`, `path`, `titleKey`, `descriptionKey`
- Add page route component and locale entries.
- Ensure topbar/home entries are generated from route metadata (no duplicated mappings).

6. Validate
- Run package-level checks for the new tool and `dev-app`.
- Run workspace-level checks before merge.

## Website Integration Notes

When attaching a tool to website pages:

1. Mount the tool under website i18n provider.
2. Prefer inherited language (no extra prop).
3. Use explicit `currentLanguage` only when forced-language behavior is required.
4. Keep page-level layout/background in host page; tools expose `className` for adaptation.
