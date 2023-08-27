[//]: # "Version 0.1"

# Contributing the project

Project is written in **TypeScript** and **Next.js**. It uses **Tailwind CSS** for styling. It uses **ESLint** and **Prettier** for linting and formatting. It uses **pnpm** for package management.

## Getting Started

You can follow the steps in the [README.md](../README.md) file to get started with the project.

### Contributing Guide

It is recommended to use **Visual Studio Code** as the editor. It has extension support for **TypeScript**, **ESLint** and **Prettier**. You can install the recommended extensions for the project by pressing **Ctrl+Shift+P** and typing **Extensions: Show Recommended Extensions**.

> **Prettier** extension is optional because it is already integrated with **lint-staged** and **husky**. It will automatically format the code before committing.  

## Commit Message Guidelines

Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

`<type>: <subject>`

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests


### Subject
The subject contains a succinct description of the change:

- write in English.
- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end
- do not include unnecessary details.

### Examples

```
feat: add signup page
```

```
fix: fix signup page
```

```
docs: update README.md
```


## Branch Name Guidelines

`<type>/<subject-name>`

### Type

Must be one of the following:

- **feature**: Add new, refactor or remove a feature
- **bugfix**: A bug fix
- **hotfix**: A hotfix for a bug in production (usually a quick fix for a critical bug)
- **test**: Experimenting with new features or technologies

### Subject
The subject contains a succinct description of the change:

- use kebab-case
- write in English.
- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end
- do not include unnecessary details

### Examples

```
feature/signup-page
```

```
bugfix/header-navigation
```

```
test/roblox-authentication
```

## Folder Structure

Folder structure is based on splitting files by routes and features. This strategy stores globally shared application code in the root app directory and splits more specific application code into the route segments that use them.

Next.js helps organizing the code by providing serveral features about folders. You can read more about it in the [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-features).

```
.
├── app                         // Root app folder
│   ├── (layout)                // Layout folder
│   │   |───_components
│   │   |   ├── header-link.tsx
│   │   |   └── footer-button.tsx
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── signup                  // Route folder
|   |   ├── _assets             // Images, icons, etc.
│   │   │   ├── signup-logo.svg
│   │   │   └── signup.png
│   │   ├── _components         // Components used in the page
│   │   │   ├── signup-button.tsx
│   │   │   └── signup-form.tsx
│   │   ├── _types              // Types used in the page
│   │   │   └── signup-form.d.ts
│   │   └── page.tsx
│   │── layout.tsx
│   └── page.tss
├── components                  // Components folder
│   ├── button.tsx
│   └── form.tsx
├── context                     // Context folder
│   ├── auth-provider.tsx
│   └── theme-provider.tsx
└── hooks                       // Hooks folder
    ├── use-auth.tsx
    └── use-theme.tsx
```

## Code Style

### Variables

| Type | Case | Example |
| --- | --- | --- |
| **File** | `kebab-case` | `button.tsx` |
| **Folder** | `kebab-case` | `components` |
| **React Component** | `PascalCase` | `Button` |
| **Type** | `PascalCase` | `User` |
| **Hook** | `useCamelCase` | `useTheme` |
| **Function** | `camelCase` | `getUsers` |
| **Variable** | `camelCase` | `userName` |
| **Property** | `camelCase` | `user.name` |
| **Constant** | `UPPER_CASE` | `API_URL` |
| **CSS Class** | `kebab-case` | `.button-primary` |
| **CSS Variable** | `--kebab-case` | `--color-primary` |