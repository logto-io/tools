# tools

Public monorepo for Logto developer tools that can be developed independently and embedded back into the private website.

## Packages

- `packages/i18nova`: shared i18n runtime copied from website.
- `packages/jwt-decoder`: reusable JWT decoder and encoder package.
- `packages/dev-app`: local development app for tool packages.

## Commands

```bash
pnpm install
pnpm start
pnpm lint
pnpm stylelint
pnpm typecheck
pnpm test
pnpm build
```

## Development rules

This repo follows the website repo conventions as closely as practical:

- `pnpm` workspace scripts
- `husky` + `lint-staged`
- Conventional commits via `commitlint`
- `@silverhand/*` TypeScript, ESLint, Prettier, and Stylelint configs inside packages
