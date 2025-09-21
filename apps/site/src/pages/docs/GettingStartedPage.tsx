import { Link } from 'react-router-dom'
import { Button, DemoCanvas } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/phoebe-ui.png?size=32'
}

export function GettingStartedPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Getting Started</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Get up and running with Phoebe UI in minutes.
                </p>
            </div>

            {/* Installation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                        npm install @phoebe-ui/core
                    </code>
                </div>
                <p className="text-gray-600 mb-4">
                    Or using yarn:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                    <code className="text-green-400 text-sm">
                        yarn add @phoebe-ui/core
                    </code>
                </div>
            </section>

            {/* Setup */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Setup</h2>
                <p className="text-gray-600 mb-4">
                    Wrap your application with the TooltipProvider to enable tooltips:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
                    <code>{`import { TooltipProvider } from '@phoebe-ui/core'
import '@phoebe-ui/core/dist/style.css' // If using bundled styles

function App() {
  return (
    <TooltipProvider>
      <YourApp />
    </TooltipProvider>
  )
}`}</code>
                </pre>
            </section>

            {/* First Example */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Your First Component</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="space-x-4">
                        <Button>Primary Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import { Button } from '@phoebe-ui/core'

function MyComponent() {
  return (
    <div>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`}</code>
                </pre>
            </section>

            {/* Tailwind Setup */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Tailwind CSS Setup</h2>
                <p className="text-gray-600 mb-4">
                    Add Phoebe UI to your Tailwind CSS content paths:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// tailwind.config.js
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
}`}</code>
                </pre>
            </section>

            {/* CLI Usage */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">CLI Usage</h2>
                <p className="text-gray-600 mb-4">
                    Use the Phoebe CLI to generate new components with contributor attribution:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                        npx @phoebe-ui/cli add button --contributor your-github-username
                    </code>
                </div>
                <p className="text-gray-600 mb-4">
                    Initialize Phoebe UI in an existing project:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                    <code className="text-green-400 text-sm">
                        npx @phoebe-ui/cli init
                    </code>
                </div>
            </section>

            {/* Next Steps */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-2">Explore Components</h3>
                        <p className="text-gray-600 mb-4">
                            Browse our component library and see live examples.
                        </p>
                        <Button size="sm" asChild>
                            <Link to="/components">View Components</Link>
                        </Button>
                    </div>
          
                    <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-2">Learn Installation</h3>
                        <p className="text-gray-600 mb-4">
                            Detailed setup instructions for different environments.
                        </p>
                        <Button size="sm" variant="secondary" asChild>
                            <Link to="/docs/installation">Installation Guide</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
