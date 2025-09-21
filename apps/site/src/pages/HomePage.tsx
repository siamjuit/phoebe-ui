import { Link } from 'react-router-dom'
import { Button, Tooltip, DemoCanvas } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/phoebe-ui.png?size=32'
}

export function HomePage() {
    return (
        <div className="text-center">
            {/* Hero Section */}
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                    Phoebe UI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Minimal, accessible React components built on Radix UI primitives and Tailwind CSS.
                    Perfect for building inclusive user interfaces with contributor attribution built-in.
                </p>
        
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button asChild>
                        <Link to="/docs/getting-started">Get Started</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link to="/components">View Components</Link>
                    </Button>
                </div>
            </div>

            {/* Demo Section */}
            <div className="mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Components with Built-in Attribution
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <DemoCanvas contributor={contributor}>
                        <div className="space-y-4">
                            <Button>Primary Button</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Tooltip content="I'm accessible!">
                                <Button variant="ghost">Hover for tooltip</Button>
                            </Tooltip>
                        </div>
                    </DemoCanvas>
          
                    <DemoCanvas contributor={contributor}>
                        <div className="p-4 border rounded-lg bg-white">
                            <h3 className="font-semibold mb-2">Feature Highlights</h3>
                            <ul className="text-sm text-left space-y-1">
                                <li>✅ WCAG 2.1 AA Compliant</li>
                                <li>📦 Tree Shakeable</li>
                                <li>🎨 Tailwind Integration</li>
                                <li>⚡ TypeScript Support</li>
                                <li>👥 Contributor Attribution</li>
                            </ul>
                        </div>
                    </DemoCanvas>
                </div>
            </div>

            {/* Features */}
            <div className="mt-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary-600">
                            Better by Design
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need for accessible UI
                        </p>
                    </div>
          
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <div className="h-5 w-5 flex-none bg-primary-600 rounded-full" />
                                    Accessibility First
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        Built on Radix UI primitives with WCAG 2.1 AA compliance, keyboard navigation, and screen reader support.
                                    </p>
                                </dd>
                            </div>
              
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <div className="h-5 w-5 flex-none bg-primary-600 rounded-full" />
                                    Tree Shakeable
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        Import only what you need. Components are optimized for bundle size and performance.
                                    </p>
                                </dd>
                            </div>
              
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <div className="h-5 w-5 flex-none bg-primary-600 rounded-full" />
                                    CLI Generator
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        Generate components with <code className="bg-gray-100 px-1 py-0.5 rounded">npx phoebe add</code> including tests, stories, and contributor attribution.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
