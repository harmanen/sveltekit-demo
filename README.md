# SvelteKit demo

A small demo app build using Svelte and SvelteKit.

## Requisites

- Node v. 18.18.1 LTS
- Visual Studio Code for editing

## Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`

If you try using the app with and without JavaScript, remember to refresh the page when turning JS on/off on the browser.

- Tests are run with `npm run test`

## Project configuration

- TypeScript syntax
- Vitest for (unit) tests
- ESLint and Prettier for linting and code formatting, respectively
  - Code autoformatting when using VSCode is enabled if recommended plugins are installed
- Sass for styles

## Version history

**Version 1.0.0** (2023-10-16): Initial version according to the original desing and changes mentioned in the design change log. See more in [here](./design/). Includes unit tests (rendering tests) for components.

## Known issues

### Version 1.0.0

- Layout:
  - Loaded items are not stored -> reset to initial state when navigating back from an object page
  - No-JS navigation buttons need optimization for very narrow mobile widths

- Cards:
  - Padding between the buttons and the extract is fixed only in the deployment branch
  - No-JS image width and navigation buttons need optimization for very narrow mobile widths
