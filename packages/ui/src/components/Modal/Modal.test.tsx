import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal open title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
      <Modal open={false} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls onOpenChange when close button is clicked', async () => {
    const handleOpenChange = vi.fn()
    const user = userEvent.setup()
    
    render(
      <Modal open onOpenChange={handleOpenChange} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(handleOpenChange).toHaveBeenCalledWith(false)
  })

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <Modal trigger={<button>Open Modal</button>} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    
    await user.click(screen.getByText('Open Modal'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(
      <Modal open title="Test Modal" description="Test description">
        <p>Modal content</p>
      </Modal>
    )
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-labelledby')
    expect(dialog).toHaveAttribute('aria-describedby')
  })
})
