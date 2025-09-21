import { Command } from 'commander'
import chalk from 'chalk'
import prompts from 'prompts'
import path from 'path'
import fs from 'fs-extra'

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
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
`

const packageJsonScripts = `{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@phoebe-ui/core": "^0.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.3"
  }
}`

export const initCommand = new Command('init')
  .description('Initialize Phoebe UI in your project')
  .action(async () => {
    console.log(chalk.blue('🎨 Initializing Phoebe UI...\n'))
    
    const response = await prompts([
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies?',
        initial: true
      },
      {
        type: 'confirm',
        name: 'createTailwindConfig',
        message: 'Create Tailwind config?',
        initial: true
      },
      {
        type: 'confirm',
        name: 'createComponentsDir',
        message: 'Create src/components directory?',
        initial: true
      }
    ])
    
    if (response.createTailwindConfig) {
      await fs.writeFile(path.join(process.cwd(), 'tailwind.config.js'), tailwindConfig)
      console.log(chalk.green('✅ Created tailwind.config.js'))
    }
    
    if (response.createComponentsDir) {
      await fs.ensureDir(path.join(process.cwd(), 'src/components'))
      console.log(chalk.green('✅ Created src/components directory'))
    }
    
    if (response.installDeps) {
      console.log(chalk.blue('\n📦 Install these dependencies:'))
      console.log(chalk.gray('npm install @phoebe-ui/core'))
      console.log(chalk.gray('npm install -D tailwindcss @tailwindcss/typography postcss autoprefixer'))
    }
    
    console.log(chalk.green('\n🎉 Phoebe UI initialized successfully!'))
    console.log(chalk.cyan('\nNext steps:'))
    console.log(chalk.gray('1. Add components: npx phoebe add button'))
    console.log(chalk.gray('2. Import in your app: import { Button } from "@phoebe-ui/core"'))
    console.log(chalk.gray('3. Wrap your app with <TooltipProvider> for tooltips'))
  })
