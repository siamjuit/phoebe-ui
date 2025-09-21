import { useState } from 'react'
import { Button, DemoCanvas, Tooltip } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/phoebe-ui.png?size=32'
}

export function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleAsyncClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Button</h1>
                <p className="mt-2 text-lg text-gray-600">
                    A flexible button component with multiple variants and sizes.
                </p>
            </div>

            {/* Installation */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Installation</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                        npx @phoebe-ui/cli add button --contributor your-username
                    </code>
                </div>
                <p className="text-gray-600 text-sm">
                    Or import directly: <code>import {`{ Button }`} from '@phoebe-ui/core'</code>
                </p>
            </section>

            {/* Basic Example */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <Button>Click me</Button>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import { Button } from '@phoebe-ui/core'

function App() {
  return <Button>Click me</Button>
}`}</code>
                </pre>
            </section>

            {/* Variants */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Variants</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Sizes</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">States</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex flex-wrap gap-4">
                        <Button>Normal</Button>
                        <Button disabled>Disabled</Button>
                        <Button
                            onClick={handleAsyncClick}
                            disabled={loading}
                            className="min-w-24"
                        >
                            {loading ? 'Loading...' : 'Async Action'}
                        </Button>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button onClick={handleClick} disabled={loading}>
  {loading ? 'Loading...' : 'Async Action'}
</Button>`}</code>
                </pre>
            </section>

            {/* With Icons */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">With Icons</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex flex-wrap gap-4">
                        <Button>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Item
                        </Button>
                        <Button variant="destructive">
                            Delete
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </Button>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <Button aria-label="Save document">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </Button>
                            <Tooltip content="This button saves the current document">
                                <Button variant="ghost" aria-describedby="save-help">
                                    Save with Help
                                </Button>
                            </Tooltip>
                        </div>
                        <p className="text-sm text-gray-600">
                            ✅ Keyboard accessible (Tab, Enter, Space)<br />
                            ✅ Screen reader compatible<br />
                            ✅ Focus indicators<br />
                            ✅ Proper ARIA attributes
                        </p>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Icon-only button with label
<Button aria-label="Save document">
  <SaveIcon />
</Button>

// Button with tooltip
<Tooltip content="Helpful description">
  <Button>Action</Button>
</Tooltip>`}</code>
                </pre>
            </section>

            {/* Props Table */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Props</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prop
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Default
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">variant</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <code>'primary' | 'secondary' | 'ghost' | 'destructive'</code>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary'</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Visual style variant</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">size</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <code>'sm' | 'md' | 'lg'</code>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'md'</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Button size</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">disabled</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <code>boolean</code>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Disable the button</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">asChild</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <code>boolean</code>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Render as child element</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <code>string</code>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Additional CSS classes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
