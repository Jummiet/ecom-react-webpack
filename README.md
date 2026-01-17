
# M365 E‑commerce (React + Webpack)

A starter e‑commerce front end demonstrating atomic design, a responsive grid, code‑splitting, accessibility hooks, and a modern build process.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Scripts Reference](#scripts-reference)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

Check your versions:
```bash
node --version
npm --version
git --version
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Jummiet/ecom-react-webpack.git
cd ecom-react-webpack
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`, including:
- React and React Router for the UI framework
- Webpack and loaders for bundling
- Babel for JavaScript transpilation
- Jest and Testing Library for testing
- PostCSS for CSS processing

## Development

### Starting the Development Server

```bash
npm run dev
```

This command:
1. Starts Webpack Dev Server with Hot Module Replacement (HMR)
2. Opens the application at `http://localhost:5173`
3. Watches for file changes and automatically reloads the browser
4. Provides source maps for easier debugging

The development server includes:
- **Fast refresh**: Changes appear instantly without full page reload
- **Error overlay**: Build errors and warnings appear in the browser
- **HTTPS support**: Enable with environment variables if needed

### Available Routes

Once the dev server is running, you can navigate to:

- `/` - Home page with featured products
- `/products` - All products listing
- `/categories` - Browse by category
- `/new-arrivals` - Latest products
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/products/:id` - Individual product details

## Building for Production

### Create Production Build

```bash
npm run build
```

This command:
1. Cleans the previous build output
2. Optimizes and minifies JavaScript with Webpack
3. Processes CSS with PostCSS and Autoprefixer
4. Generates static assets in the `dist/` directory
5. Creates source maps for debugging production issues

**Build Output:**
- `dist/index.html` - Main HTML file
- `dist/bundle.[hash].js` - Main JavaScript bundle
- `dist/[chunk].[hash].js` - Code-split chunks
- `dist/assets/` - Images and other static assets

### Analyzing Bundle Size

To analyze what's in your production bundle:

```bash
npm run build -- --analyze
```

This opens a visual representation of bundle contents to help identify optimization opportunities.

### Serving Production Build Locally

```bash
npx serve dist
```

Then open `http://localhost:3000` to test the production build.

## Testing

### Running Unit Tests

```bash
npm test
```

This runs Jest in watch mode, which:
- Executes all test files matching `*.test.js(x)` pattern
- Re-runs tests when files change
- Shows coverage information
- Provides interactive filtering options

### Run Tests Once (CI Mode)

```bash
npm test -- --watchAll=false
```

### Run Tests with Coverage

```bash
npm test -- --coverage
```

Coverage reports are generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` to view detailed coverage.

### End-to-End Testing

```bash
cd tests/e2e
npm install
npx cypress open
```

This opens Cypress Test Runner for interactive E2E testing. To run headlessly:

```bash
npx cypress run
```

### Writing Tests

Tests are located in `tests/unit/` directory. Example test structure:

```jsx
import { render, screen } from '@testing-library/react';
import Button from '../../src/components/atoms/Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## Project Structure

```
ecom-react-webpack/
├── public/                 # Static files
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components (Atomic Design)
│   │   ├── atoms/        # Basic building blocks (Button, Input)
│   │   ├── molecules/    # Simple component groups (NavBar, ProductCard)
│   │   └── organisms/    # Complex components (Header, Footer, ProductGrid)
│   ├── pages/            # Route-level components
│   │   ├── Home.jsx      # Homepage
│   │   ├── Products.jsx  # Product listing
│   │   ├── Cart.jsx      # Shopping cart
│   │   └── ...
│   ├── context/          # React Context providers
│   │   └── CartContext.jsx  # Cart state management
│   ├── data/             # Mock data and constants
│   │   └── products.js   # Product catalog
│   ├── styles/           # Global styles
│   │   └── base.css      # Base CSS variables and resets
│   ├── utils/            # Helper functions
│   │   └── formatCurrency.js
│   ├── App.jsx           # Root component with routing
│   └── index.jsx         # Application entry point
├── tests/
│   ├── unit/             # Unit tests
│   └── e2e/              # End-to-end tests
├── babel.config.js       # Babel configuration
├── webpack.config.js     # Webpack configuration
├── jest.config.js        # Jest configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```

### Atomic Design Pattern

This project follows the **Atomic Design** methodology:

- **Atoms**: Basic UI elements (buttons, inputs, labels)
- **Molecules**: Simple groups of atoms (search bar, product card)
- **Organisms**: Complex components made of molecules (header, footer, product grid)
- **Pages**: Complete page templates

## Tech Stack

### Core Technologies

- **React 18**: Modern UI library with Hooks and Concurrent features
- **React Router v6**: Declarative routing with code-splitting support
- **Webpack 5**: Module bundler with advanced optimization
  - SplitChunks plugin for automatic code splitting
  - Dynamic imports with `React.lazy()`
  - Tree shaking for smaller bundles

### Build Tools

- **Babel 7**: JavaScript compiler
  - `@babel/preset-env`: Modern JavaScript → ES5
  - `@babel/preset-react`: JSX transformation
- **PostCSS**: CSS transformation with Autoprefixer
- **Webpack Dev Server**: Fast development experience

### Testing

- **Jest**: JavaScript testing framework
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom DOM matchers
- **Cypress**: End-to-end testing framework

## Features

### 🎨 Modern UI/UX

- Responsive design that works on mobile, tablet, and desktop
- Atomic design pattern for maintainable component architecture
- Smooth animations and transitions
- Loading states and error handling

### ♿ Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, etc.)
- ARIA labels and roles for screen readers
- Keyboard navigation support (Tab, Enter, Escape)
- Focus management for modal dialogs
- Color contrast ratios meet WCAG AA standards
- Skip navigation links for keyboard users

### ⚡ Performance

- **Code splitting**: Routes are lazy-loaded to reduce initial bundle size
- **Image optimization**: 
  - `loading="lazy"` for off-screen images
  - Explicit `width` and `height` to prevent layout shift (CLS)
- **Tree shaking**: Unused code is automatically removed
- **Minification**: Production bundles are minified and compressed
- **Caching**: Long-term caching with content hashes in filenames

### 🛒 E-commerce Features

- Product browsing with filtering and categories
- Shopping cart with add/remove functionality
- Product detail pages
- Checkout flow
- Responsive product grid
- Search functionality

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Create production build in `dist/` |
| `npm test` | Run unit tests in watch mode |
| `npm run lint` | Run ESLint (if configured) |
| `npm run format` | Format code with Prettier (if configured) |

## Configuration

### Webpack Configuration

The `webpack.config.js` file includes:

- **Entry point**: `src/index.jsx`
- **Output**: `dist/` directory with hashed filenames
- **Loaders**:
  - `babel-loader` for JS/JSX files
  - `css-loader` and `style-loader` for CSS
  - `file-loader` for images and assets
- **Plugins**:
  - `HtmlWebpackPlugin` for HTML generation
  - `MiniCssExtractPlugin` for CSS extraction
- **Optimization**:
  - SplitChunks for vendor code separation
  - Minification in production mode

### Babel Configuration

The `babel.config.js` includes:

- `@babel/preset-env`: Transpile modern JavaScript
- `@babel/preset-react`: Transform JSX syntax

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5173
API_URL=http://localhost:3000/api
```

Access in code:
```javascript
const apiUrl = process.env.API_URL;
```

## Troubleshooting

### Common Issues

#### Port Already in Use

If port 5173 is already in use:

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

Or change the port in `webpack.config.js`:
```javascript
devServer: {
  port: 3000, // Change to any available port
}
```

#### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

#### Build Fails with Out of Memory

Increase Node.js memory:

```bash
# Windows
set NODE_OPTIONS=--max_old_space_size=4096

# Mac/Linux
export NODE_OPTIONS=--max_old_space_size=4096

npm run build
```

#### Hot Reload Not Working

1. Check that `devServer.hot` is enabled in `webpack.config.js`
2. Clear browser cache
3. Restart the dev server

#### Tests Failing

1. Clear Jest cache:
   ```bash
   npm test -- --clearCache
   ```
2. Update snapshots if needed:
   ```bash
   npm test -- -u
   ```

### Getting Help

- Check [Webpack documentation](https://webpack.js.org/)
- Check [React documentation](https://react.dev/)
- Open an issue on GitHub
- Review existing issues for similar problems

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit:
   ```bash
   git commit -m "Add: your feature description"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Use functional components with Hooks
- Follow the Atomic Design pattern
- Write tests for new features
- Ensure accessibility standards are met
- Add PropTypes or TypeScript types
- Keep components small and focused
- Use meaningful variable and function names

### Commit Message Format

```
Type: Brief description

Detailed description (optional)

Types: Add, Update, Fix, Remove, Refactor, Docs, Test
```

---

© 2026 | Built with ❤️ using React + Webpack
