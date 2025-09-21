import { Carousel, DemoCanvas } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const sampleSlides = [
  <div key="1" className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
    Slide 1
  </div>,
  <div key="2" className="h-48 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
    Slide 2
  </div>,
  <div key="3" className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
    Slide 3
  </div>,
  <div key="4" className="h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
    Slide 4
  </div>,
]

export function CarouselPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Carousel</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Accessible image and content carousel with keyboard navigation and autoplay.
                </p>
            </div>

            {/* Installation */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Installation</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                        npx @phoebe-ui/cli add carousel --contributor your-username
                    </code>
                </div>
                <p className="text-gray-600 text-sm">
                    Or import directly: <code>import {`{ Carousel }`} from '@phoebe-ui/core'</code>
                </p>
            </section>

            {/* Basic Example */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="w-full max-w-md mx-auto">
                        <Carousel>{sampleSlides}</Carousel>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import { Carousel } from '@phoebe-ui/core'

const slides = [
  <div key="1">Slide 1 Content</div>,
  <div key="2">Slide 2 Content</div>,
  <div key="3">Slide 3 Content</div>,
]

function App() {
  return <Carousel>{slides}</Carousel>
}`}</code>
                </pre>
            </section>

            {/* Autoplay */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Autoplay</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="w-full max-w-md mx-auto">
                        <Carousel autoplay autoplayInterval={2000}>
                            {sampleSlides}
                        </Carousel>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Carousel autoplay autoplayInterval={2000}>
  {slides}
</Carousel>`}</code>
                </pre>
            </section>

            {/* Without Indicators */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Without Indicators</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="w-full max-w-md mx-auto">
                        <Carousel showIndicators={false}>
                            {sampleSlides.slice(0, 3)}
                        </Carousel>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<Carousel showIndicators={false}>
  {slides}
</Carousel>`}</code>
                </pre>
            </section>

            {/* Image Carousel */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Image Carousel</h2>
                <DemoCanvas contributor={contributor} className="mb-4">
                    <div className="w-full max-w-md mx-auto">
                        <Carousel>
                            {[
                                <img key="1" src="https://picsum.photos/400/200?random=1" alt="Random image 1" className="w-full h-48 object-cover rounded-lg" />,
                                <img key="2" src="https://picsum.photos/400/200?random=2" alt="Random image 2" className="w-full h-48 object-cover rounded-lg" />,
                                <img key="3" src="https://picsum.photos/400/200?random=3" alt="Random image 3" className="w-full h-48 object-cover rounded-lg" />,
                            ]}
                        </Carousel>
                    </div>
                </DemoCanvas>
        
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`const imageSlides = [
  <img key="1" src="/image1.jpg" alt="Description 1" />,
  <img key="2" src="/image2.jpg" alt="Description 2" />,
  <img key="3" src="/image3.jpg" alt="Description 3" />,
]

<Carousel>{imageSlides}</Carousel>`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Accessibility Features</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                    <h3 className="font-semibold text-blue-900 mb-3">Built-in Accessibility</h3>
                    <ul className="space-y-2 text-blue-800">
                        <li>✅ <strong>Keyboard Navigation:</strong> Arrow keys to navigate slides</li>
                        <li>✅ <strong>Screen Reader Support:</strong> Announces current slide position</li>
                        <li>✅ <strong>Focus Management:</strong> Proper focus indicators and tab order</li>
                        <li>✅ <strong>Pause on Hover:</strong> Autoplay pauses when user hovers</li>
                        <li>✅ <strong>ARIA Labels:</strong> Descriptive labels for all interactive elements</li>
                        <li>✅ <strong>Live Region:</strong> Screen readers announce slide changes</li>
                    </ul>
                </div>
        
                <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Keyboard Controls:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><kbd className="bg-gray-200 px-2 py-1 rounded">←</kbd> Previous slide</li>
                        <li><kbd className="bg-gray-200 px-2 py-1 rounded">→</kbd> Next slide</li>
                        <li><kbd className="bg-gray-200 px-2 py-1 rounded">Tab</kbd> Navigate to controls</li>
                        <li><kbd className="bg-gray-200 px-2 py-1 rounded">Enter/Space</kbd> Activate focused control</li>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">children</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>React.ReactNode[]</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Array of slide content</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">autoplay</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>boolean</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Enable automatic slide progression</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">autoplayInterval</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>number</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3000</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Autoplay interval in milliseconds</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">showIndicators</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>boolean</code></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Show slide indicator dots</td>
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
