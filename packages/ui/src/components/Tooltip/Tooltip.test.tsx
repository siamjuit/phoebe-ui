import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tooltip, TooltipProvider } from './Tooltip'
import '@testing-library/jest-dom'

function renderTooltip(props = {}) {
  return render(
    <TooltipProvider>
      <Tooltip content="Tooltip content" {...props}>
        <button>Hover me</button>
      </Tooltip>
    </TooltipProvider>
  )
}

describe('Tooltip', () => {
  it('shows tooltip on hover', async () => {
    const user = userEvent.setup()
    renderTooltip()
    
    const trigger = screen.getByRole('button', { name: /hover me/i })
    
    await user.hover(trigger)
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      expect(screen.getByText('Tooltip content')).toBeInTheDocument()
    })
  })

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup()
    renderTooltip()
    
    const trigger = screen.getByRole('button', { name: /hover me/i })
    
    await user.hover(trigger)
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
    
    await user.unhover(trigger)
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup()
    renderTooltip()
    
    const trigger = screen.getByRole('button', { name: /hover me/i })
    
    await user.tab() // Focus the button
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })
})
