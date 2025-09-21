import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { DemoCanvas } from '../_demo/DemoCanvas'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Focus-trapped modal dialog built on Radix UI with accessible labels and keyboard support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controlled open state of the modal',
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title for accessibility',
    },
    description: {
      control: { type: 'text' },
      description: 'Modal description for accessibility',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Show close button in header',
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

// Helper component for controlled stories
function ControlledModal(props: any) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen} {...props}>
        <p className="text-gray-600 mb-4">
          This is the modal content. You can put any React components here.
        </p>
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ControlledModal />,
  parameters: {
    docs: {
      description: {
        story: 'Basic modal with trigger button and content.',
      },
    },
  },
}

export const WithTitle: Story = {
  render: () => (
    <ControlledModal 
      title="User Settings"
      description="Update your account preferences and settings below."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal with title and description for better accessibility.',
      },
    },
  },
}

export const WithTrigger: Story = {
  render: () => (
    <Modal 
      trigger={<Button>Open with Trigger</Button>}
      title="Triggered Modal"
      description="This modal uses the trigger prop for internal state management."
    >
      <div className="space-y-4">
        <p className="text-gray-600">
          When using the trigger prop, the Modal component manages its own open state internally.
        </p>
        <div className="flex justify-end space-x-2">
          <Modal.Close asChild>
            <Button variant="secondary">Cancel</Button>
          </Modal.Close>
          <Modal.Close asChild>
            <Button>Save</Button>
          </Modal.Close>
        </div>
      </div>
    </Modal>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal that manages its own state using the trigger prop.',
      },
    },
  },
}

export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal 
          open={open} 
          onOpenChange={setOpen}
          title="Confirm Deletion"
          description="This action cannot be undone. This will permanently delete the selected item."
        >
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete Permanently
            </Button>
          </div>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Confirmation dialog pattern for destructive actions.',
      },
    },
  },
}

export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        <Modal 
          open={open} 
          onOpenChange={setOpen}
          title="Edit Profile"
          description="Update your profile information below."
        >
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpen(false) }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="John Doe"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                defaultValue="Software developer passionate about accessibility and user experience."
              />
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal containing a form with proper focus management.',
      },
    },
  },
}

export const WithoutCloseButton: Story = {
  render: () => (
    <ControlledModal 
      title="Important Notice"
      description="Please read this important information carefully."
      showClose={false}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal without the close button in the header. Users must use provided actions to close.',
      },
    },
  },
}
