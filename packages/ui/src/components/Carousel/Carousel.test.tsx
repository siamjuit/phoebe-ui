import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

// Mock timers for autoplay testing
beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
})

describe('Carousel', () => {
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ]

  it('renders all slides', () => {
    render(<Carousel>{slides}</Carousel>)
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
    expect(screen.getByText('Slide 3')).toBeInTheDocument()
  })

  it('shows navigation buttons', () => {
    render(<Carousel>{slides}</Carousel>)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('navigates to next slide when next button is clicked', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Carousel>{slides}</Carousel>)
    
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    
    // Check aria-live region for screen readers
    expect(screen.getByText('Slide 2 of 3')).toBeInTheDocument()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Carousel>{slides}</Carousel>)
    
    const carousel = screen.getByRole('region', { name: /carousel/i })
    carousel.focus()
    
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Slide 2 of 3')).toBeInTheDocument()
    
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByText('Slide 1 of 3')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Carousel>{slides}</Carousel>)
    
    const carousel = screen.getByRole('region', { name: /carousel/i })
    expect(carousel).toHaveAttribute('aria-live', 'polite')
    expect(carousel).toHaveAttribute('tabIndex', '0')
  })
})
