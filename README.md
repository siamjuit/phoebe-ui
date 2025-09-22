# Phoebe UI

<div align="center">
  <h3>🎨 Minimal, accessible React components built on Radix UI and Tailwind CSS</h3>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

[Documentation](https://phoebe-ui.netlify.app) • [Storybook](https://phoebe-ui-storybook.netlify.app) • [Contributing](./CONTRIBUTING.md)

</div>

---

## ✨ Features

* 🎯 **Minimal & Composable** - Small, focused components that work together
* ♿ **Accessibility First** - Built on Radix UI with WCAG 2.1 AA compliance
* 🎨 **Tailwind Integration** - Consistent design tokens and theming
* 📦 **Tree Shakeable** - Import only what you need
* 🔧 **CLI Generator** - `npx phoebe add <component>` to scaffold new components
* 👥 **Contributor Attribution** - Built-in contributor badges for open source collaboration
* 📱 **Responsive** - Mobile-first design with responsive utilities
* 🌗 **Dark Mode Ready** - Support for dark mode themes
* ⚡ **TypeScript** - Full type safety with excellent DX

## 📦 Installation

Using npm

```bash
npm install @phoebe-ui/core
```

Using yarn

```bash
yarn add @phoebe-ui/core
```

Using pnpm

```bash
pnpm add @phoebe-ui/core
```

### Peer Dependencies

```bash
npm install react react-dom
```

### Tailwind CSS Setup

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@phoebe-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

## 🚀 Quick Start

```tsx
import { Button, Modal, Tooltip, TooltipProvider } from '@phoebe-ui/core'
import { useState } from 'react'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <TooltipProvider>
      <div className="p-8 space-y-4">
        {/* Buttons */}
        <div className="space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
        </div>

        {/* Tooltip */}
        <Tooltip content="I'm accessible and keyboard-friendly!">
          <Button variant="ghost">Hover or focus me</Button>
        </Tooltip>

        {/* Modal */}
        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Example Modal"
          description="This modal is focus-trapped and accessible."
          trigger={<Button>Open Modal</Button>}
        >
          <p className="mb-4">Modal content goes here.</p>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </div>
    </TooltipProvider>
  )
}
```

## 📚 Components

| Component                                                     | Description                             | Status   |
| ------------------------------------------------------------- | --------------------------------------- | -------- |
| [Button](https://phoebe-ui.netlify.app/components/button)     | Flexible button with variants and sizes | ✅ Stable |
| [Carousel](https://phoebe-ui.netlify.app/components/carousel) | Accessible image/content carousel       | ✅ Stable |
| [Modal](https://phoebe-ui.netlify.app/components/modal)       | Focus-trapped modal dialog              | ✅ Stable |
| [Tooltip](https://phoebe-ui.netlify.app/components/tooltip)   | Accessible tooltip with positioning     | ✅ Stable |

All components include:

* **Accessibility**: WCAG 2.1 AA compliant
* **Keyboard Navigation**: Full keyboard support
* **Screen Reader**: Proper ARIA attributes
* **TypeScript**: Complete type definitions
* **Tests**: Comprehensive test coverage
* **Storybook**: Interactive documentation

## 🛠️ CLI Usage

Generate new components with contributor attribution:

Install CLI globally

```bash
npm install -g @phoebe-ui/cli
```

Add a component to your project

```bash
phoebe add button --contributor your-github-username
```

Initialize Phoebe UI in existing project

```bash
phoebe init
```

### Generated Files

The CLI creates:

* `ComponentName.tsx` - Main component with TypeScript
* `ComponentName.test.tsx` - Unit tests with accessibility checks
* `ComponentName.stories.tsx` - Storybook story with contributor badge
* `index.ts` - Clean exports
* `README.md` - Component documentation

## 🎨 Styling & Theming

Phoebe UI uses Tailwind CSS with consistent design tokens.

```jsx
// Custom button example
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Purple Button
</Button>

// Using design tokens
<Button className="bg-primary-600 hover:bg-primary-700">
  Theme Primary Button
</Button>
```

### Dark Mode Support

```jsx
<Button className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900">
  Dark Mode Button
</Button>
```

## ♿ Accessibility

Phoebe UI is built with accessibility as a core principle:

* WCAG 2.1 AA Compliance - All components meet accessibility standards
* Keyboard Navigation - Full functionality without mouse
* Screen Reader Support - Proper ARIA labels and announcements
* Focus Management - Logical tab order and focus trapping
* High Contrast - Sufficient color contrast ratios

Testing Tools:

* Automated testing with jest-axe
* Manual testing with screen readers
* Keyboard navigation testing
* Color contrast verification

## 🧪 Development

### Prerequisites

* Node.js 18+
* pnpm 8+
* Git

### Setup

```bash
# Clone repository
git clone https://github.com/your-org/phoebe-ui.git
cd phoebe-ui

# Install dependencies
pnpm install

# Build packages
pnpm build

# Start development server
pnpm dev

# Start Storybook
pnpm storybook

# Run tests
pnpm test
```

### Project Structure

```
phoebe-ui/
├── packages/
│   ├── ui/          # Core component library
│   └── cli/         # CLI tool
├── apps/
│   └── site/        # Documentation website
├── docs/            # Additional documentation
└── .github/         # CI/CD workflows
```

### Scripts

* `pnpm dev`              # Start documentation site
* `pnpm storybook`        # Start Storybook
* `pnpm build`            # Build all packages
* `pnpm test`             # Run all tests
* `pnpm lint`             # Lint code
* `pnpm typecheck`        # Type check
* `pnpm clean`            # Clean build artifacts

## 📖 Documentation

* Getting Started - Installation and setup
* Components - Component documentation
* Storybook - Interactive examples
* Accessibility Guide - Accessibility standards
* Contributing Guide - How to contribute

## 🤝 Contributing

We welcome contributions! Please see our Contributing Guide for details.

Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Add your component using: `phoebe add your-component --contributor your-username`
4. Write tests and documentation
5. Submit a pull request

### Contributors

This project exists thanks to all the people who contribute:

[![Contributors](https://contrib.rocks/image?repo=your-org/phoebe-ui)](https://github.com/siamjuit/phoebe-ui/graphs/contributors)

## 📊 Bundle Size

Phoebe UI is optimized for minimal bundle impact:

| Component    | Gzipped Size | Dependencies                  |
| ------------ | ------------ | ----------------------------- |
| Button       | \~2KB        | 0                             |
| Modal        | \~4KB        | @radix-ui/react-dialog        |
| Tooltip      | \~3KB        | @radix-ui/react-tooltip       |
| Carousel     | \~3KB        | 0                             |
| Full Library | \~15KB       | Radix UI + Tailwind utilities |

## 🌟 Examples

Check out example projects using Phoebe UI:

* Next.js Example - App Router with TypeScript
* Vite Example - Vite + React + TypeScript
* Remix Example - Remix with Tailwind

## 🔧 Framework Integration

### Next.js

```tsx
// app/layout.tsx
import { TooltipProvider } from '@phoebe-ui/core'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
```

### Vite

```tsx
// main.tsx
import { TooltipProvider } from '@phoebe-ui/core'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TooltipProvider>
    <App />
  </TooltipProvider>
)
```

## 📈 Roadmap

* Form components (Input, Select, Checkbox, Radio)
* Navigation components (Dropdown, Breadcrumb, Pagination)
* Feedback components (Alert, Toast, Progress)
* Data display (Table, Badge, Card)
* Advanced components (Command Palette, Date Picker)
* Theme system with CSS variables
* React Native support
* Figma design system

## 🙏 Acknowledgments

* Radix UI - Excellent headless components
* Tailwind CSS - Utility-first CSS framework
* shadcn/ui - Inspiration for CLI approach
* All our contributors

## 📄 License

MIT © Phoebe UI Contributors

<div align="center">
  <p>Built with ❤️ for the React community</p>
  <p>
     <a href="https://github.com/siamjuit/phoebe-ui/issues">Issues</a> • <a href="https://github.com/siamjuit/phoebe-ui/discussions">Discussions</a> • <a href="https://twitter.com/siamjuit">Twitter</a>
  </p>
</div>
