import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProvider } from './Tooltip'
import { Button } from '../Button/Button'
import { DemoCanvas } from '../_demo/DemoCanvas'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible tooltip component built on Radix UI with smart positioning and customizable delays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Tooltip content to display',
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side for tooltip positioning',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'Alignment relative to the trigger element',
    },
    delayDuration: {
      control: { type: 'number' },
      description: 'Delay before showing tooltip in milliseconds',
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <DemoCanvas contributor={contributor}>
          <div className="p-8">
            <Story />
          </div>
        </DemoCanvas>
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip that appears on hover and focus.',
      },
    },
  },
}

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h4 className="font-medium text-sm text-gray-700">Sides</h4>
        <div className="grid grid-cols-2 gap-4">
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
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-sm text-gray-700">Alignment</h4>
        <div className="space-y-2">
          <Tooltip content="Start aligned" side="bottom" align="start">
            <Button size="sm" className="w-full">Start</Button>
          </Tooltip>
          <Tooltip content="Center aligned" side="bottom" align="center">
            <Button size="sm" className="w-full">Center</Button>
          </Tooltip>
          <Tooltip content="End aligned" side="bottom" align="end">
            <Button size="sm" className="w-full">End</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for tooltips.',
      },
    },
  },
}

export const CustomDelay: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Tooltip content="No delay (instant)" delayDuration={0}>
        <Button size="sm" variant="secondary">Instant</Button>
      </Tooltip>
      <Tooltip content="Default delay (200ms)" delayDuration={200}>
        <Button size="sm" variant="secondary">Default</Button>
      </Tooltip>
      <Tooltip content="Long delay (1000ms)" delayDuration={1000}>
        <Button size="sm" variant="secondary">Slow</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips with different delay durations.',
      },
    },
  },
}

export const RichContent: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Tooltip 
        content={
          <div className="text-center">
            <div className="font-semibold text-white">Keyboard Shortcut</div>
            <div className="text-xs text-gray-200 mt-1">
              Press <kbd className="bg-gray-700 px-1 rounded">Ctrl+K</kbd> to open
            </div>
          </div>
        }
      >
        <Button variant="secondary">Rich Content</Button>
      </Tooltip>
      
      <Tooltip content="🎉 Emojis work great in tooltips!">
        <Button variant="ghost">Emoji Tooltip</Button>
      </Tooltip>
      
      <Tooltip 
        content={
          <div>
            <div className="font-medium">Pro Feature</div>
            <div className="text-xs mt-1">Available in Pro plan</div>
          </div>
        }
      >
        <Button disabled>Pro Only</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can contain rich content including formatting, emojis, and multiple elements.',
      },
    },
  },
}

export const WithDifferentTriggers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="Button tooltip">
        <Button>Button</Button>
      </Tooltip>
      
      <Tooltip content="Icon button tooltip">
        <Button variant="ghost" aria-label="Settings">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Button>
      </Tooltip>
      
      <Tooltip content="This text has a tooltip">
        <span className="text-blue-600 underline cursor-help">
          Hover this text
        </span>
      </Tooltip>
      
      <Tooltip content="Even images can have tooltips">
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center cursor-help">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips work with various trigger elements including buttons, text, and images.',
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        <p><strong>Accessibility Features:</strong></p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li>Keyboard accessible (shows on focus)</li>
          <li>Screen reader compatible (aria-describedby)</li>
          <li>Respects prefers-reduced-motion</li>
          <li>Smart positioning (avoids viewport edges)</li>
        </ul>
      </div>
      
      <div className="flex space-x-4">
        <Tooltip content="Try tabbing to this button and it will show the tooltip">
          <Button>Tab to focus</Button>
        </Tooltip>
        
        <Tooltip content="Screen readers will announce this tooltip content">
          <Button>Screen reader friendly</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrating accessibility features of the tooltip component.',
      },
    },
  },
}
