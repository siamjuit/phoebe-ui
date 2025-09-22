import type { Preview } from '@storybook/react'
import { TooltipProvider } from '@phoebe-ui/core'
import '../index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="p-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
}

export default preview
