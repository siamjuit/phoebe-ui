import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './Carousel'
import { DemoCanvas } from '../_demo/DemoCanvas'

const contributor = {
  name: 'Phoebe Team',
  githubUsername: 'phoebe-ui',
  avatarUrl: 'https://github.com/siamjuit/phoebe-ui.png?size=32'
}

const sampleSlides = [
  <div key="1" className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
    Slide 1
  </div>,
  <div key="2" className="h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
    Slide 2
  </div>,
  <div key="3" className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
    Slide 3
  </div>,
]

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible carousel component with keyboard navigation, autoplay, and screen reader support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    autoplay: {
      control: { type: 'boolean' },
      description: 'Enable automatic slide progression',
    },
    autoplayInterval: {
      control: { type: 'number' },
      description: 'Interval between slides in milliseconds',
    },
    showIndicators: {
      control: { type: 'boolean' },
      description: 'Show slide indicator dots',
    },
  },
  decorators: [
    (Story) => (
      <DemoCanvas contributor={contributor}>
        <div className="w-80">
          <Story />
        </div>
      </DemoCanvas>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: sampleSlides,
  },
}

export const Autoplay: Story = {
  args: {
    children: sampleSlides,
    autoplay: true,
    autoplayInterval: 2000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with autoplay enabled. Pauses on hover.',
      },
    },
  },
}

export const WithoutIndicators: Story = {
  args: {
    children: sampleSlides,
    showIndicators: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without indicator dots.',
      },
    },
  },
}

export const ImageCarousel: Story = {
  render: () => (
    <Carousel>
      {[
        <img key="1" src="https://picsum.photos/320/128?random=1" alt="Random image 1" className="w-full h-32 object-cover rounded-lg" />,
        <img key="2" src="https://picsum.photos/320/128?random=2" alt="Random image 2" className="w-full h-32 object-cover rounded-lg" />,
        <img key="3" src="https://picsum.photos/320/128?random=3" alt="Random image 3" className="w-full h-32 object-cover rounded-lg" />,
      ]}
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Carousel displaying images with proper alt text for accessibility.',
      },
    },
  },
}
