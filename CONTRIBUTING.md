# Contributing to the Project

The project is written in **TypeScript** and **Next.js**. It uses **Tailwind CSS** for styling. It uses **ESLint** and **Prettier** for linting and formatting. It uses **pnpm** for package management.

## Getting Started

To get started with the project, you can follow the steps in the [README.md](./README.md) file.

### Requirements

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager.
- [git](https://git-scm.com/) - Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
- [Visual Studio Code (Optional)](https://code.visualstudio.com/) - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

### Installation

```bash
git clone https://github.com/gelecekbilimde/gelecek-bilimde-frontend.git
cd gelecek-bilimde-frontend 
pnpm i
```

### Running

```bash
pnpm dev
```

### Contribution Guide

It is recommended to use **Visual Studio Code** as the editor. It has extension support for **TypeScript**, **ESLint**, and **Prettier**. To install the recommended extensions for the project, you can press **Ctrl+Shift+P** and type **Extensions: Show Recommended Extensions**.

> The **Prettier** extension is optional because it is already integrated with **lint-staged** and **husky**. The code will be automatically formatted before committing.

Commit Message Structure
Commit messages should comply with the Conventional Commits specification.

<type>: <subject>

#### Type
It should be one of the following:

* build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* docs: Documentation-only changes
* feat: A new feature
* fix: A bug fix
* perf: A code change that improves performance
* refactor: A code change that neither fixes a bug nor adds a feature
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
* test: Adding missing tests or correcting existing tests
* chore: Changes to the build process or auxiliary tools and libraries, such as documentation generation

#### Subject
The subject contains a succinct description of the change:

* Write in English.
* Use the imperative, present tense: "add" not "added" or "adds."
* Do not capitalize the first letter.
* Do not end the subject line with a period (.).
* Do not include unnecessary details.
* 
### Examples
* feat: add signup page
* fix: fix header navigation issue
* docs: update API documentation

### Branch Name Guidelines

<type>/<jira-issue-number>/<subject-name>

#### Type
It should be one of the following:

* feature: Adding a new feature, refactoring a feature, or removing a feature
* bugfix: A bug fix
* hotfix: An urgent fix for a bug in production (usually a quick fix for a critical bug)
* test: Experimenting with new features or technologies

### Subject

The subject contains a succinct description of the change:

* Use kebab-case.
* Write in English.
* Use the imperative, present tense: "add" not "added" or "adds."
* Do not capitalize the first letter.
* Do not end the subject line with a period (.).
* Do not include unnecessary details.

### Examples

* feature/GBS-1/signup-page

* bugfix/GBS-2/header-navigation

* test/GBS-3/roblox-authentication


## Folder Structure

The folder structure is organized by dividing files into routes and features. This strategy stores shared application code in the root directory and divides more specific code into route segments that use them.

Next.js helps in organizing the folder structure. For details, you can refer to the [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-features).

```
.
├── app                         // Root application directory
│   ├── (layout)                // Layout directory
│   │   |───_components
│   │   |   ├── header-link.tsx
│   │   |   └── footer-button.tsx
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── signup                  // Route directory
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
├── components                  // Components directory
│   ├── button.tsx
│   └── form.tsx
├── context                     // Context directory
│   ├── auth-provider.tsx
│   └── theme-provider.tsx
└── hooks                       // Hooks directory
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
