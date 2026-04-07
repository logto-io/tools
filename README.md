# Logto Tools Monorepo

Public monorepo for Logto developer tools.  
It is designed for two goals:

1. Build and iterate tool components independently in a public repository.
2. Integrate those tools back into the private website with minimal adaptation.

Current tool: JWT decoder/encoder.  
Planned tools: SAML assertion decoder, Base64 decoder, and more.

## 1. Introduction

This repository contains reusable tool packages plus a dedicated local development app that mirrors website integration patterns.

Key principles:

- Public codebase for tool development.
- Shared engineering standards with website (lint, stylelint, typecheck, commit hooks).
- Reusable UI primitives in local `tools-components` (no dependency on legacy `@logto/website-components`).
- Shared i18n runtime and language definitions through local `i18nova`.
- Host-app-first integration model: tools can inherit language from upper i18n provider and also support explicit language override.

## 2. Design Strategy And Code Structure

### Monorepo layout

```text
tools/
  packages/
    components/      # @logto/tools-components (shared UI primitives + shared SCSS utilities)
    i18nova/         # shared i18n runtime + React bindings + supported language definitions
    jwt-decoder/     # reusable tool package (library)
    dev-app/         # standalone developer app for local iteration
```

### Package roles

- `packages/components` (`@logto/tools-components`)
  - Shared UI building blocks and shared styling assets across tools.
  - Should contain reusable pieces, not tool-specific business logic.

- `packages/i18nova` (`i18nova`)
  - Shared i18n engine and language catalog.
  - React integration APIs (provider/hooks).
  - Exposes global current-language context support for nested integrations.

- `packages/jwt-decoder` (`@logto/tools-jwt-decoder`)
  - Tool library package (component-level API for host apps).
  - Contains JWT tool logic, tool locales, and styles.
  - Inherits host i18n language when mounted under upper provider.

- `packages/dev-app` (`@logto/tools-dev-app`)
  - Local development and QA surface.
  - Mimics website-like top layout and routing.
  - Uses shared i18n provider and mounts tools as a host app would.

### Dependency strategy

- `dev-app` depends on:
  - `@logto/tools-jwt-decoder`
  - `@logto/tools-components`
  - `i18nova`

- `jwt-decoder` depends on:
  - `@logto/tools-components`
  - `i18nova`

- `i18nova` is framework runtime shared by `dev-app` and all tools.

### i18n integration model

- Host app provides language through an upper `I18NovaProvider`.
- Tool component (`JwtDecoder`) will:
  1. Use explicit `currentLanguage` prop if provided.
  2. Otherwise inherit language from upper shared i18n context.
  3. Fallback to default language when neither is available.

This matches website-style integration while preserving standalone usage.

## 3. Development Guide

### Requirements

- Node.js `^22.0.0`
- pnpm `^10.0.0`

### Install

```bash
pnpm install
```

### Workspace commands

```bash
pnpm start
pnpm lint
pnpm stylelint
pnpm typecheck
pnpm test
pnpm build
```

### Per-package examples

```bash
pnpm --filter @logto/tools-dev-app dev
pnpm --filter @logto/tools-jwt-decoder test
pnpm --filter i18nova typecheck
```

### Git hooks and commit rules

- Husky is enabled through root `prepare`.
- Pre-commit runs package `precommit` scripts for changed packages.
- Global lint-staged config is at `lint-staged.config.cjs`.
- Commit messages are validated by `commitlint` (`@commitlint/config-conventional`).

## 4. New Tool Development Instructions

Use this checklist when adding a new tool package (example: `saml-decoder`).

### Step 1: Create package scaffold

1. Add `packages/<tool-name>/`.
2. Add `package.json` with scripts aligned to existing packages:
   - `precommit`, `build`, `lint`, `stylelint`, `typecheck`, `test`.
3. Add TypeScript/eslint/stylelint configs aligned with current packages.

### Step 2: Implement component API for host integration

1. Export a top-level component from `src/index.ts`.
2. Component should support:
   - Optional `className`.
   - Optional `currentLanguage` override.
3. Language resolution should follow host-first behavior (inherit upper provider first when no explicit prop).

### Step 3: Implement i18n for the tool

1. Add tool-local locale files under `src/locales/`.
2. Use `i18nova` language types and supported language list.
3. Create tool i18n module mirroring `jwt-decoder` structure.
4. Ensure no hardcoded user-facing strings in component code.

### Step 4: Reuse shared UI primitives

1. Use `@logto/tools-components` for shared UI/styling patterns.
2. If styles/components are reusable across tools, move them to `packages/components`.
3. Keep tool package focused on tool-specific logic and views.

### Step 5: Add dev-app integration

1. Register route metadata in `packages/dev-app/src/routes/index.ts`:
   - `id`, `path`, `titleKey`, `descriptionKey`.
2. Add tool page route component under `packages/dev-app/src/routes/`.
3. Add/update `dev-app` locale entries for tool title/description.
4. Add nav + home entry through shared route metadata (no duplicated mapping logic).

### Step 6: Validate quality gates

Run at minimum:

```bash
pnpm --filter @logto/tools-dev-app lint
pnpm --filter @logto/tools-dev-app typecheck
pnpm --filter @logto/tools-<tool-name> lint
pnpm --filter @logto/tools-<tool-name> typecheck
```

Then run workspace validation before merge:

```bash
pnpm lint
pnpm stylelint
pnpm typecheck
pnpm test
pnpm build
```

## 5. Website Integration Notes

When integrating a tool into website pages:

1. Mount tool under website i18n provider.
2. Prefer context-based language inheritance (no extra prop needed).
3. Use explicit `currentLanguage` prop only when integration needs forced language behavior.
4. Keep layout/background control in host page; tools expose `className` for style adaptation.

## 6. Current Status

- JWT decoder migration is active and already consumable as `@logto/tools-jwt-decoder`.
- `dev-app` acts as an integration simulator for top-level layout, navigation, and i18n behavior.
- Additional tools can be onboarded following the same package and route conventions above.
