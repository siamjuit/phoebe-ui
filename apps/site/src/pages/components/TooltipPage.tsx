import { Tooltip, Button, DemoCanvas } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/phoebe-ui.png?size=32'
}

export function TooltipPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Tooltip</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Accessible tooltip with smart positioning and delay controls.
                </p>
            </div>

            {/* Installation */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Installation</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                        npx @phoebe-ui/cli add tooltip --contributor your-username
                    </code>
                </div>
                <p className="text-gray-600 text-sm">
                    Or import directly: <code>import {`{ Tooltip }`} from '@phoebe-ui/core'</code>
                </p>
            </section>

            {/* Provider Setup */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Setup</h2>
                <p className="text-gray-600 mb-4">
                    Wrap your application with <code>TooltipProvider</code> to enable tooltips:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import { TooltipProvider } from '@phoebe-ui/core'

function App() {
  return (
    <TooltipProvider>
      <YourApp />
    </TooltipProvider>
  )
}`}</code>
                </pre>
            </section>

            {/* Basic Example */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex justify-center">
                        <Tooltip content="I'm a helpful tooltip!">
                            <Button>Hover me</Button>
                        </Tooltip>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import { Tooltip, Button } from '@phoebe-ui/core'

function App() {
  return (
    <Tooltip content="I'm a helpful tooltip!">
      <Button>Hover me</Button>
    </Tooltip>
  )
}`}</code>
                </pre>
            </section>

            {/* Positioning */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Positioning</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <Tooltip content="Top tooltip" side="top">
                            <Button size="sm">Top</Button>
                        </Tooltip>
                        <Tooltip content="Right tooltip" side="right">
                            <Button size="sm">Right</Button>
                        </Tooltip>
                        <Tooltip content="Bottom tooltip" side="bottom">
                            <Button size="sm">Bottom</Button>
                        </Tooltip>
                        <Tooltip content="Left tooltip" side="left">
                            <Button size="sm">Left</Button>
                        </Tooltip>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>`}</code>
                </pre>
            </section>

            {/* Alignment */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Alignment</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="space-y-4">
                        <div className="flex justify-center space-x-4">
                            <Tooltip content="Start aligned" side="bottom" align="start">
                                <Button size="sm">Start</Button>
                            </Tooltip>
                            <Tooltip content="Center aligned" side="bottom" align="center">
                                <Button size="sm">Center</Button>
                            </Tooltip>
                            <Tooltip content="End aligned" side="bottom" align="end">
                                <Button size="sm">End</Button>
                            </Tooltip>
                        </div>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Tooltip content="Start aligned" side="bottom" align="start">
  <Button>Start</Button>
</Tooltip>

<Tooltip content="Center aligned" side="bottom" align="center">
  <Button>Center</Button>
</Tooltip>

<Tooltip content="End aligned" side="bottom" align="end">
  <Button>End</Button>
</Tooltip>`}</code>
                </pre>
            </section>

            {/* Rich Content */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Rich Content</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex justify-center space-x-4">
                        <Tooltip
                            content={
                                <div className="text-center">
                                    <div className="font-semibold">Pro Tip</div>
                                    <div className="text-xs">Press Ctrl+K to open quick search</div>
                                </div>
                            }
                        >
                            <Button variant="secondary">Rich Content</Button>
                        </Tooltip>
            
                        <Tooltip content="🎉 Emoji tooltips work too!">
                            <Button variant="ghost">Emoji</Button>
                        </Tooltip>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Tooltip 
  content={
    <div className="text-center">
      <div className="font-semibold">Pro Tip</div>
      <div className="text-xs">Press Ctrl+K to search</div>
    </div>
  }
>
  <Button>Rich Content</Button>
</Tooltip>

<Tooltip content="🎉 Emoji tooltips work too!">
  <Button>Emoji</Button>
</Tooltip>`}</code>
                </pre>
            </section>

            {/* Delay */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Custom Delay</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="flex justify-center space-x-4">
                        <Tooltip content="No delay" delayDuration={0}>
                            <Button size="sm" variant="secondary">Instant</Button>
                        </Tooltip>
                        <Tooltip content="500ms delay" delayDuration={500}>
                            <Button size="sm" variant="secondary">Slow</Button>
                        </Tooltip>
                        <Tooltip content="1000ms delay" delayDuration={1000}>
                            <Button size="sm" variant="secondary">Very Slow</Button>
                        </Tooltip>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Tooltip content="No delay" delayDuration={0}>
  <Button>Instant</Button>
</Tooltip>

<Tooltip content="500ms delay" delayDuration={500}>
  <Button>Slow</Button>
</Tooltip>

<Tooltip content="1000ms delay" delayDuration={1000}>
  <Button>Very Slow</Button>
</Tooltip>`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Accessibility Features</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                    <h3 className="font-semibold text-blue-900 mb-3">Built-in Accessibility</h3>
                    <ul className="space-y-2 text-blue-800">
                        <li>✅ <strong>Keyboard Support:</strong> Shows on focus, hides on blur</li>
                        <li>✅ <strong>Screen Reader Support:</strong> Uses aria-describedby for proper association</li>
                        <li>✅ <strong>Smart Positioning:</strong> Automatically adjusts to viewport</li>
                        <li>✅ <strong>Mouse & Touch:</strong> Works with hover and touch interactions</li>
                        <li>✅ <strong>Escape Key:</strong> Dismisses tooltip when focused</li>
                        <li>✅ <strong>Portal Rendering:</strong> Renders outside DOM hierarchy to avoid clipping</li>
                    </ul>
                </div>
        
                <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Best Practices:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Keep tooltip content concise and helpful</li>
                        <li>Don't put critical information only in tooltips</li>
                        <li>Ensure tooltips don't interfere with other UI elements</li>
                        <li>Test with keyboard navigation and screen readers</li>
                    </ul>
                </div>
            </section>

            {/* Props Table */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Props</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">content</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>React.ReactNode</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Tooltip content</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">side</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>'top' | 'right' | 'bottom' | 'left'</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'top'</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Preferred side for tooltip</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">align</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>'start' | 'center' | 'end'</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'center'</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Alignment relative to trigger</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">delayDuration</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>number</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Delay before showing (ms)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>string</code></td>
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
