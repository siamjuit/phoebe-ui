import { Link } from 'react-router-dom'
import { Button, Carousel, Modal, Tooltip, DemoCanvas } from '@phoebe-ui/core'
import { useState } from 'react'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const components = [
  {
    name: 'Button',
    description: 'Flexible button component with multiple variants and sizes.',
    href: '/components/button',
    preview: (
      <div className="space-x-2">
        <Button size="sm">Primary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
      </div>
    ),
  },
  {
    name: 'Carousel',
    description: 'Accessible image and content carousel with keyboard navigation.',
    href: '/components/carousel',
    preview: (
      <Carousel showIndicators={false}>
        {[
          <div key="1" className="h-16 bg-blue-100 rounded flex items-center justify-center text-sm">Slide 1</div>,
          <div key="2" className="h-16 bg-green-100 rounded flex items-center justify-center text-sm">Slide 2</div>,
          <div key="3" className="h-16 bg-purple-100 rounded flex items-center justify-center text-sm">Slide 3</div>,
        ]}
      </Carousel>
    ),
  },
  {
    name: 'Modal',
    description: 'Focus-trapped modal dialog with accessible labels and close handling.',
    href: '/components/modal',
    preview: <ModalPreview />,
  },
  {
    name: 'Tooltip',
    description: 'Accessible tooltip with smart positioning and delay controls.',
    href: '/components/tooltip',
    preview: (
      <Tooltip content="I'm a tooltip!">
        <Button variant="ghost" size="sm">Hover me</Button>
      </Tooltip>
    ),
  },
]

function ModalPreview() {
  const [open, setOpen] = useState(false)
  
  return (
    <Modal
      trigger={<Button size="sm">Open Modal</Button>}
      title="Example Modal"
      open={open}
      onOpenChange={setOpen}
    >
      <p className="text-sm text-gray-600">This is a modal example.</p>
    </Modal>
  )
}

export function ComponentsIndexPage() {
    return (
        <div className="max-w-6xl">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-gray-900">Components</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Accessible React components built on Radix UI primitives with Tailwind CSS.
                    Each component includes contributor attribution and comprehensive accessibility support.
                </p>
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {components.map((component) => (
                    <div key={component.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold">{component.name}</h2>
                                <Link
                                    to={component.href}
                                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                            <p className="text-gray-600 text-sm">{component.description}</p>
                        </div>
            
                        <DemoCanvas contributor={contributor} className="min-h-24 flex items-center justify-center">
                            {component.preview}
                        </DemoCanvas>
                    </div>
                ))}
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Phoebe UI?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Accessibility First</h3>
                        <p className="text-sm text-gray-600">
                            WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and focus management.
                        </p>
                    </div>
          
                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Tree Shakeable</h3>
                        <p className="text-sm text-gray-600">
                            Import only what you need. Optimized for bundle size with ES modules support.
                        </p>
                    </div>
          
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Contributor Attribution</h3>
                        <p className="text-sm text-gray-600">
                            Built-in contributor badges recognize and celebrate open source contributions.
                        </p>
                    </div>
                </div>
            </div>

            {/* CLI Section */}
            <div className="bg-gray-900 rounded-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                    Generate Your Own Components
                </h2>
                <p className="text-gray-300 mb-6">
                    Use the Phoebe CLI to scaffold new components with contributor attribution, tests, and documentation.
                </p>
        
                <div className="bg-black rounded-lg p-4 mb-6 font-mono text-sm">
                    <div className="text-green-400">
                        <span className="text-gray-500">$</span> npx @phoebe-ui/cli add my-component --contributor your-github-username
                    </div>
                    <div className="text-gray-400 mt-2 text-xs">
                        ✅ Created MyComponent.tsx<br />
                        ✅ Created MyComponent.test.tsx<br />
                        ✅ Created MyComponent.stories.tsx<br />
                        ✅ Added contributor attribution
                    </div>
                </div>
        
                <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" size="sm" asChild>
                        <Link to="/docs/getting-started" className="text-gray-900">Get Started</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link to="/docs/installation" className="text-white border-white hover:bg-white hover:text-gray-900">
                            Installation Guide
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl font-bold text-primary-600">{components.length}</div>
                    <div className="text-sm text-gray-600">Components</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-gray-600">Accessible</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-primary-600">0</div>
                    <div className="text-sm text-gray-600">Runtime Dependencies</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-primary-600">TypeScript</div>
                    <div className="text-sm text-gray-600">First Class Support</div>
                </div>
            </div>
        </div>
    )
}
