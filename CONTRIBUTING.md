# Contributing to Phoebe UI

Thank you for your interest in contributing to Phoebe UI! This guide will help you get started with contributing to our accessible React component library.

## 🌟 Ways to Contribute

* 🐛 **Report bugs** - Help us identify and fix issues
* 💡 **Suggest features** - Share ideas for new components or improvements
* 📝 **Improve documentation** - Fix typos, add examples, clarify instructions
* 🎨 **Add components** - Create new accessible components
* 🧪 **Write tests** - Improve test coverage and quality
* ♿ **Improve accessibility** - Enhance keyboard navigation, screen reader support
* 🔧 **Fix bugs** - Resolve existing issues

## 🚀 Quick Start

### Prerequisites

* **Node.js** 18+ ([Download](https://nodejs.org/))
* **pnpm** 8+ (`npm install -g pnpm`)
* **Git** ([Download](https://git-scm.com/))

### Development Setup

1. **Fork and Clone**

Fork the repository on GitHub first

```bash
git clone https://github.com/your-username/phoebe-ui.git
cd phoebe-ui
```

2. **Install Dependencies**

```bash
pnpm install
```

3. **Build Packages**

```bash
pnpm build
```

4. **Start Development**

Start documentation site ([http://localhost:3000](http://localhost:3000))

```bash
pnpm dev
```

Start Storybook ([http://localhost:6006](http://localhost:6006))

```bash
pnpm storybook
```

Run tests

```bash
pnpm test
```

## 📦 Project Structure

```
phoebe-ui/
├── packages/
│   ├── ui/ # Core component library
│   │   ├── src/
│   │   │   ├── components/ # All components
│   │   │   ├── utils/ # Utility functions
│   │   │   └── test/ # Test setup
│   │   └── package.json
│   └── cli/ # CLI tool
│       ├── src/
│       │   ├── commands/ # CLI commands
│       │   ├── utils/ # CLI utilities
│       │   └── templates/ # Component templates
│       └── package.json
├── apps/
│   └── site/ # Documentation website
│       ├── src/
│       │   ├── pages/ # Documentation pages
│       │   └── components/ # Site components
│       └── package.json
├── docs/ # Additional documentation
├── .github/ # CI/CD workflows
└── examples/ # Example projects
```

## 🎨 Adding Components

### Using the CLI (Recommended)

The fastest way to add a new component:

```bash
npx phoebe add my-component --contributor your-github-username
```

This creates:

* Component TypeScript file with accessibility defaults
* Comprehensive unit tests with accessibility checks
* Storybook story with contributor attribution
* Documentation with usage examples

### Manual Component Creation

If you prefer manual creation:

1. **Create component directory**: `packages/ui/src/components/MyComponent/`
2. **Required files**:

```
MyComponent/
├── MyComponent.tsx # Main component
├── MyComponent.test.tsx # Unit tests
├── MyComponent.stories.tsx # Storybook story
├── index.ts # Exports
└── README.md # Component docs
```

## 📝 Component Standards

### TypeScript Guidelines

```ts
import React from 'react'
import { cn } from '../../utils/cn'

// ✅ Good: Extend HTML element props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  // Avoid boolean props explosion - prefer variants
}

// ✅ Good: Use forwardRef for components that should forward refs
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

### Styling Guidelines

```ts
// ✅ Good: Use Tailwind with design tokens
const variantClasses = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
}

// ✅ Good: Use cn() utility for className merging
className={cn(baseClasses, variantClasses[variant], className)}

// ✅ Good: Support dark mode
'dark:bg-gray-800 dark:text-white'

// ❌ Bad: Hardcoded styles
style={{ backgroundColor: '#3B82F6' }}
```

### Accessibility Requirements

All components must meet WCAG 2.1 AA standards:

```html
<!-- ✅ Good: Proper semantic HTML -->
<button type="button" {...props}>

<!-- ✅ Good: ARIA labeling for icon-only buttons -->
<button aria-label="Close dialog">
  <XIcon />
</button>
```

```ts
// ✅ Good: Keyboard event handling
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Escape') {
    onClose()
  }
}

// ✅ Good: Focus management
useEffect(() => {
  if (isOpen && dialogRef.current) {
    dialogRef.current.focus()
  }
}, [isOpen])

// ✅ Good: Screen reader announcements
<div aria-live="polite" aria-atomic="true"> {statusMessage} </div>
```

## 🧪 Testing Standards

### Test Requirements

* Minimum 80% test coverage
* Test user interactions, not implementation details
* Include accessibility tests
* Test edge cases and error states

### Testing Patterns

```ts
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from './Button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  // ✅ Good: Test rendering
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  // ✅ Good: Test user interactions
  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // ✅ Good: Test accessibility
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // ✅ Good: Test keyboard navigation
  it('handles keyboard events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Press me</Button>)

    await user.tab()
    expect(screen.getByRole('button')).toHaveFocus()

    await user.keyboard('{Enter}')
    expect(handleClick).toHaveBeenCalled()
  })

  // ✅ Good: Test variants
  it('applies variant styles correctly', () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-red-600')
  })
})
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests for specific package
pnpm --filter @phoebe-ui/core test

# Run tests in watch mode
pnpm --filter @phoebe-ui/core test:watch

# Run accessibility audits
pnpm test:a11y
```

## 📖 Documentation Standards

### Storybook Stories

Every component needs comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { DemoCanvas } from '../_demo/DemoCanvas'

const contributor = {
  name: 'Your Name',
  githubUsername: 'your-username',
  avatarUrl: 'https://github.com/your-username.png?size=32'
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A flexible button component with multiple variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
  },
  decorators: [
    (Story) => (
      <DemoCanvas contributor={contributor}>
        <Story />
      </DemoCanvas>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}
```

### Component Documentation

Each component should have a README with:

````
# ComponentName

Brief description of what the component does.

## Usage

```tsx
import { ComponentName } from '@phoebe-ui/core'

function App() {
  return <ComponentName>Content</ComponentName>
}
````

## Props

| Prop      | Type        | Default       | Description |                      |
| --------- | ----------- | ------------- | ----------- | -------------------- |
| `variant` | \`'primary' | 'secondary'\` | `'primary'` | Visual style variant |

## Accessibility

* Keyboard navigation with Tab/Enter/Space
* Screen reader compatible
* ARIA attributes for state
* Focus management

## Examples

### Basic Usage

```tsx
<ComponentName>Basic example</ComponentName>
```

### Advanced Usage

```tsx
<ComponentName variant="secondary" disabled>
  Advanced example
</ComponentName>
```

````

## 🔧 Code Style

### ESLint & Prettier
- Follow @typescript-eslint/recommended
- Use Prettier with our configuration
- Include accessibility linting rules
- No console.log statements in production code

### Import Organization

```ts
// 1. React imports
import React from 'react'

// 2. Third-party imports
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

// 3. Internal imports
import { cn } from '../../utils/cn'
import { Button } from '../Button'

// 4. Type imports (separate if needed)
import type { ComponentProps } from './types'
````

### Naming Conventions

* Components: PascalCase (Button, Modal)
* Files: PascalCase for components (Button.tsx)
* Props: camelCase (variant, isOpen)
* CSS Classes: Use Tailwind utilities

## 🤝 Contributor Attribution

Every component includes contributor attribution:

* CLI Integration: Automatically adds your GitHub info
* Demo Canvas: Shows contributor badge in component demos
* Storybook: Displays attribution in component stories

The contributor badge:

* Shows your GitHub avatar and username
* Links to your GitHub profile
* Appears in bottom-left of component demos
* Gracefully handles missing contributor data

## 📝 Pull Request Process

### Before Submitting

* Code follows style guidelines (`pnpm lint`)
* All tests pass (`pnpm test`)
* Components are accessible (manual testing)
* Storybook stories include contributor attribution
* Documentation is updated

### PR Guidelines

#### Branch Naming

```bash
# Features
git checkout -b feat/component-name

# Bug fixes
git checkout -b fix/issue-description

# Documentation
git checkout -b docs/improvement-description
```

#### Commit Messages

Follow Conventional Commits:

```text
feat(button): add loading state support
fix(modal): resolve focus trap issue
docs(tooltip): add positioning examples
test(carousel): improve keyboard navigation tests
```

#### PR Template

```
## Summary
Brief description of changes

## Changes
- [ ] Added new component/feature
- [ ] Fixed bug
- [ ] Updated documentation
- [ ] Added tests

## Testing
- [ ] Unit tests pass
- [ ] Manual accessibility testing
- [ ] Cross-browser testing

## Screenshots
(Include for visual changes)

## Breaking Changes
(List any breaking changes)

Closes #123
```

### Review Process

* At least one maintainer approval required
* All CI checks must pass
* Accessibility review for new components
* Breaking changes require special consideration

## 🚦 Release Process

We use Changesets for version management:

* Add Changeset

```bash
pnpm changeset
```

* Choose Change Type

  * `patch`: Bug fixes, documentation updates
  * `minor`: New features, new components
  * `major`: Breaking changes

* Write Description
  Clear description of what changed

* Commit Changeset
  Include changeset file in your PR

* Automated Release
  Happens automatically when PR is merged

## ♿ Accessibility Guidelines

### Required Accessibility Features

* Keyboard Navigation: Tab, Enter, Space, Arrow keys, Escape
* Screen Reader Support: Proper ARIA labels and announcements
* Focus Management: Visible focus indicators, logical tab order
* Color Contrast: Meet 4.5:1 ratio for normal text
* Touch Targets: Minimum 44px × 44px for mobile

### Testing Accessibility

```bash
# Automated accessibility testing
pnpm test:a11y

# Manual testing tools
# - axe DevTools browser extension
# - WAVE browser extension
# - Lighthouse accessibility audit
# - Screen readers (NVDA, JAWS, VoiceOver)
```

### Accessibility Checklist

* Component works with keyboard only
* Screen reader announces content correctly
* Focus indicators are visible
* Color contrast meets standards
* Component works at 200% zoom
* Touch targets are large enough

## 🐛 Bug Reports

When reporting bugs, please include:

### Bug Report Template

```
**Environment:**
- OS: macOS 13.0
- Browser: Chrome 119
- Node.js: 18.17.0
- Package version: 0.1.0

**Steps to reproduce:**
1. Import Button component
2. Set variant to "primary"
3. Click button
4. Observe unexpected behavior

**Expected behavior:**
Button should respond to click

**Actual behavior:**
Button does not respond

**Screenshots:**
(If applicable)

**Additional context:**
Any other relevant information
```

## 💡 Feature Requests

For new features or components:

### Feature Request Template

````
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of what you want

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Any other context about the feature

**Proposed API**
```tsx
// Example of how the feature might work
<NewComponent prop="value">
  Content
</NewComponent>
````

````

## 🧑‍💻 Development Workflow

### Daily Development

```bash
# 1. Pull latest changes
git pull origin main

# 2. Create feature branch
git checkout -b feat/my-feature

# 3. Install dependencies (if needed)
pnpm install

# 4. Build packages
pnpm build

# 5. Start development
pnpm dev              # Documentation site
pnpm storybook        # Component playground

# 6. Make changes and test
pnpm test
pnpm lint
pnpm typecheck

# 7. Commit changes
git add .
git commit -m "feat: add new feature"

# 8. Push and create PR
git push origin feat/my-feature
````

### Component Development Cycle

* Plan: Research component patterns and accessibility requirements
* Create: Generate component with CLI or create manually
* Implement: Build component with TypeScript and Tailwind
* Test: Write comprehensive tests including accessibility
* Document: Create Storybook stories and documentation
* Review: Self-review for standards compliance
* Submit: Create pull request with detailed description

## 🎯 Best Practices

### Component Design

* Start simple: Begin with basic functionality, add complexity gradually
* Compose over configure: Prefer composition over large prop APIs
* Think accessible: Design with keyboard and screen reader users in mind
* Mobile first: Design for mobile, enhance for desktop

### Code Quality

* Type everything: Use TypeScript for all code
* Test thoroughly: Aim for high test coverage with meaningful tests
* Document clearly: Write clear documentation and examples
* Review carefully: Review your own code before submitting

### Performance

* Lazy load: Use dynamic imports for large components
* Optimize bundles: Keep bundle size small with tree shaking
* Cache wisely: Use React.memo and useMemo appropriately
* Measure impact: Profile performance changes

## 📚 Resources

### Learning Resources

* React Documentation
* TypeScript Handbook
* Tailwind CSS Documentation
* Radix UI Documentation
* WCAG 2.1 Guidelines

### Development Tools

* VS Code with React/TypeScript extensions
* React Developer Tools
* axe DevTools
* Tailwind CSS IntelliSense

## 🆘 Getting Help

If you need help:

* Check documentation: Documentation site
* Search issues: Look for similar problems in GitHub issues
* Ask in discussions: Use GitHub Discussions for questions
* Join community: Follow @siamjuit on Twitter

### Support Channels

* 💬 GitHub Discussions - Questions and ideas
* 🐛 GitHub Issues - Bug reports and feature requests
* 📧 Email - Private concerns

## 🙏 Recognition

We recognize and celebrate contributions in several ways:

* Contributor badges: Your attribution appears in component demos
* Contributors page: Featured on our website
* Release notes: Contributions acknowledged in releases
* Special recognition: Outstanding contributors get special mentions

### Types of Recognition

* 🏆 Component Creator - Created a new component
* 🧪 Test Champion - Improved test coverage significantly
* ♿ Accessibility Advocate - Enhanced accessibility features
* 📖 Documentation Hero - Improved documentation
* 🐛 Bug Hunter - Fixed critical bugs

## 📖 Code of Conduct

This project follows the Contributor Covenant Code of Conduct. By participating, you agree to uphold this code.

### Our Standards

* Be respectful: Treat everyone with respect and kindness
* Be inclusive: Welcome newcomers and diverse perspectives
* Be constructive: Focus on what is best for the community
* Be patient: Help others learn and grow

## 🎉 Thank You

Every contribution makes Phoebe UI better for everyone. Whether you're:

* Fixing a typo in documentation
* Adding a new component
* Improving accessibility
* Helping other users

Your work helps create more inclusive web experiences for everyone.

Happy contributing! 🚀
