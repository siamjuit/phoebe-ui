import { useState } from 'react'
import { Modal, Button, DemoCanvas } from '@phoebe-ui/core'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/phoebe-ui.png?size=32'
}

export function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [withTitleOpen, setWithTitleOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Modal</h1>
        <p className="mt-2 text-lg text-gray-600">
          Focus-trapped modal dialog with accessible labels and close handling.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Installation</h2>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <code className="text-green-400 text-sm">
            npx @phoebe-ui/cli add modal --contributor your-username
          </code>
        </div>
        <p className="text-gray-600 text-sm">
          Or import directly: <code>import {`{ Modal }`} from '@phoebe-ui/core'</code>
        </p>
      </section>

      {/* Basic Example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <DemoCanvas contributor={contributor} className="mb-4">
          <Button onClick={() => setBasicOpen(true)}>
            Open Basic Modal
          </Button>
          
          <Modal open={basicOpen} onOpenChange={setBasicOpen}>
            <p className="text-gray-600 mb-4">
              This is a basic modal with just content and a close button.
            </p>
            <div className="flex justify-end">
              <Button onClick={() => setBasicOpen(false)}>Close</Button>
            </div>
          </Modal>
        </DemoCanvas>
        
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <code>{`import { Modal, Button } from '@phoebe-ui/core'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      
      <Modal open={open} onOpenChange={setOpen}>
        <p>Modal content goes here</p>
      </Modal>
    </>
  )
}`}</code>
        </pre>
      </section>

      {/* With Title and Description */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">With Title and Description</h2>
        <DemoCanvas contributor={contributor} className="mb-4">
          <Button onClick={() => setWithTitleOpen(true)}>
            Open Modal with Title
          </Button>
          
          <Modal 
            open={withTitleOpen} 
            onOpenChange={setWithTitleOpen}
            title="User Settings"
            description="Manage your account preferences and settings."
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  defaultValue="john@example.com"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="secondary" onClick={() => setWithTitleOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setWithTitleOpen(false)}>
                  Save Changes
                </Button>
              </div>
            </div>
          </Modal>
        </DemoCanvas>
        
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <code>{`<Modal 
  open={open} 
  onOpenChange={setOpen}
  title="User Settings"
  description="Manage your account preferences."
>
  <div className="space-y-4">
    {/* Form content */}
    <div className="flex justify-end space-x-2">
      <Button variant="secondary" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setOpen(false)}>
        Save
      </Button>
    </div>
  </div>
</Modal>`}</code>
        </pre>
      </section>

      {/* Confirmation Modal */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Confirmation Modal</h2>
        <DemoCanvas contributor={contributor} className="mb-4">
          <Button variant="destructive" onClick={() => setConfirmOpen(true)}>
            Delete Item
          </Button>
          
          <Modal 
            open={confirmOpen} 
            onOpenChange={setConfirmOpen}
            title="Confirm Deletion"
            description="This action cannot be undone. This will permanently delete the item."
          >
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => setConfirmOpen(false)}>
                Delete
              </Button>
            </div>
          </Modal>
        </DemoCanvas>
        
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <code>{`<Modal 
  open={confirmOpen} 
  onOpenChange={setConfirmOpen}
  title="Confirm Deletion"
  description="This action cannot be undone."
>
  <div className="flex justify-end space-x-2">
    <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
      Cancel
    </Button>
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  </div>
</Modal>`}</code>
        </pre>
      </section>

      {/* Trigger Modal */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Using Trigger</h2>
        <DemoCanvas contributor={contributor} className="mb-4">
          <Modal 
            trigger={<Button>Open with Trigger</Button>}
            title="Triggered Modal"
            description="This modal is opened using the trigger prop."
          >
            <p className="text-gray-600 mb-4">
              When using the trigger prop, the Modal manages its own open state internally.
            </p>
            <div className="flex justify-end">
              <Modal.Close asChild>
                <Button>Close</Button>
              </Modal.Close>
            </div>
          </Modal>
        </DemoCanvas>
        
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <code>{`<Modal 
  trigger={<Button>Open Modal</Button>}
  title="Modal Title"
  description="Modal description"
>
  <p>Content here</p>
  <Modal.Close asChild>
    <Button>Close</Button>
  </Modal.Close>
</Modal>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Accessibility Features</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
          <h3 className="font-semibold text-blue-900 mb-3">Built-in Accessibility</h3>
          <ul className="space-y-2 text-blue-800">
            <li>✅ <strong>Focus Trap:</strong> Focus is trapped within the modal</li>
            <li>✅ <strong>Focus Restoration:</strong> Focus returns to trigger on close</li>
            <li>✅ <strong>Escape Key:</strong> Closes modal when escape is pressed</li>
            <li>✅ <strong>Click Outside:</strong> Closes modal when clicking backdrop</li>
            <li>✅ <strong>ARIA Labels:</strong> Proper labeling with title and description</li>
            <li>✅ <strong>Portal Rendering:</strong> Renders outside DOM hierarchy</li>
          </ul>
        </div>
        
        <div className="text-sm text-gray-600">
          <p className="mb-2"><strong>Keyboard Controls:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><kbd className="bg-gray-200 px-2 py-1 rounded">Esc</kbd> Close modal</li>
            <li><kbd className="bg-gray-200 px-2 py-1 rounded">Tab</kbd> Navigate within modal</li>
            <li><kbd className="bg-gray-200 px-2 py-1 rounded">Shift+Tab</kbd> Navigate backwards</li>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">open</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>boolean</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Controlled open state</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">onOpenChange</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>(open: boolean) ={'>'} void</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Callback when open state changes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">trigger</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>React.ReactNode</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Element that triggers the modal</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">title</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>string</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Modal title for accessibility</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">description</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>string</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Modal description for accessibility</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">showClose</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><code>boolean</code></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                <td className="px-6 py-4 text-sm text-gray-500">Show close button in header</td>
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
