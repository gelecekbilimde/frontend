# Gelecek Bilimde Frontend

This is the frontend project for the Gelecek Bilimde website, built with TypeScript and Next.js. It utilizes Tailwind CSS for styling, ESLint and Prettier for linting and formatting, and pnpm for package management.

For authentication, it uses NextAuth.js. Data fetching is handled by Tanstack Query v4, and forms are managed with React Hook Form. Axios is used for HTTP requests, and icons are provided by Lucide. UI components are built with Radix UI and shadcn/ui.

## REST API Postman Collection

Access the REST API Postman [here](https://www.postman.com/gelecek-bilimde-team/workspace/gelecek-bilimde/collection/37702250-8bfe54f1-1864-410a-b960-ab4e7122dd3e?action=share&creator=37702250).

## Contributing

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - Node.js®, JavaScript runtime built on Chrome’s V8 engine.
- [pnpm](https://pnpm.js.org/) - Fast and efficient package manager.
- [git](https://git-scm.com/) - Distributed version control system.
- [Visual Studio Code (Opsiyonel)](https://code.visualstudio.com/) - Optimized code editor for building and debugging modern web applications.

### Installation

```bash
git clone https://github.com/gelecekbilimde/gelecek-bilimde-frontend.git
cd gelecek-bilimde-frontend 
pnpm i
```

### Running the Project

Copy the `.env.example` file to `.env` in the root of the project and fill in the required environment variables:

```bash
pnpm dev
```

## Technologies

- [Next.js](https://nextjs.org/) - Production-grade React framework.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Axios](https://axios-http.com) - Promise-based HTTP client.
- [React Hook Form](https://react-hook-form.com/) - Performant form handling and validation library.
- [Tanstack Query v4](https://tanstack.com/query/v4/) - Powerful data fetching and state management.
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js applications.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [İconify](https://iconify.design/) - Unified icon framework.
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components for building high-quality web interfaces.
- [shadcn/ui](https://ui.shadcn.com/) - Customizable UI components for React.
- [ESLint](https://eslint.org/) - Tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io/) - Opinionated code formatter to ensure consistent code style.