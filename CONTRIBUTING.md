# Contributing

Thanks for your interest in contributing! This project is intentionally kept simple, opinionated, and easy to evolve. Please read this before opening a PR.

---

## Tech Stack

This project uses:

* **TypeScript** (strict mode)
* **React + Vite**
* **CSS + CSS Modules** (no CSS-in-JS)

The goal is clarity, safety, and fast iteration.

---

## TypeScript Guidelines

We use TypeScript in **strict mode**. This is not optional.

**Please follow these rules:**

* ❌ Avoid using `any`
* ✅ Prefer explicit types and interfaces
* ✅ Use union types instead of loose values
* ✅ Type component props explicitly
* ❌ Do not suppress errors with `@ts-ignore`

If TypeScript complains, fix the cause — don’t silence it.

You can always run:

```bash
npm run typecheck
```

before committing.

---

## Styling Guidelines

We intentionally separate **global styles** from **component styles**.

### Global CSS

Located in `styles/` (e.g. `global.css`, `pages.css`).

Use global CSS for:

* Design tokens (CSS variables)
* Resets and base styles
* Typography defaults
* Page-level layout

**Do not** style specific components in global CSS.

### CSS Modules

Each component should own its styles via CSS Modules:

```
Component.tsx
Component.module.css
```

Use CSS Modules for:

* Component layout
* Component visuals
* Component-specific animations

CSS Modules are scoped by default and must not leak styles globally.

---

## Development Workflow

### Pre-commit checks

This project uses a **pre-commit hook** to enforce type safety.

Before each commit:

* TypeScript and ESLint are run
* Commits will fail if any errors exist

This keeps the repository type-safe and clean.

### Build process

The production build is gated by type checking and linting:

```bash
npm run build
```

If types fail, the build fails.

---

## General Principles

* Prefer clarity over cleverness
* Keep components small and focused
* Avoid premature abstraction
* Make refactors safe and boring

If in doubt, optimize for the next person reading your code.

---

Happy hacking 🚀
