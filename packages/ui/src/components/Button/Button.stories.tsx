import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { DemoCanvas } from '../_demo/DemoCanvas'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A flexible button component with multiple variants and sizes built on accessible foundations.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'ghost', 'destructive'],
            description: 'Visual style variant of the button',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the button is disabled',
        },
        children: {
            control: { type: 'text' },
            description: 'Button content',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <DemoCanvas contributor={contributor}>
      <Button {...args} />
    </DemoCanvas>
  ),
}

export const Variants: Story = {
  render: () => (
    <DemoCanvas contributor={contributor}>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </DemoCanvas>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual styles for various use cases.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <DemoCanvas contributor={contributor}>
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </DemoCanvas>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes to fit your design needs.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <DemoCanvas contributor={contributor}>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7" />
          </svg>
        </Button>
      </div>
    </DemoCanvas>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons for better visual communication.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <DemoCanvas contributor={contributor}>
      <div className="flex flex-wrap gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
    </DemoCanvas>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button states including disabled.',
      },
    },
  },
}
