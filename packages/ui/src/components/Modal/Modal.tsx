import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '../../utils/cn'
import { ReactNode } from 'react'

export interface ModalProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    children: ReactNode
    title?: string
    description?: string
    className?: string
    trigger?: ReactNode
    showClose?: boolean
}

export function Modal({
    open,
    onOpenChange,
    children,
    title,
    description,
    trigger,
    showClose = true,
    className,
}: ModalProps) {
    return (
        <Dialog.Root
            {...(open !== undefined ? { open, onOpenChange } : {})}
        >
            {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-in fade-in-0" />
        
                <Dialog.Content
                    className={cn(
                        'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
                        'bg-white p-6 shadow-lg duration-200 animate-in fade-in-0 zoom-in-95',
                        'rounded-lg border focus:outline-none',
                        className
                    )}
                >
                    {(title || showClose) && (
                        <div className="flex items-center justify-between pb-4">
                            {title && (
                                <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
                                    {title}
                                </Dialog.Title>
                            )}
                            {showClose && (
                                <Dialog.Close className="rounded-sm p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="sr-only">Close</span>
                                </Dialog.Close>
                            )}
                        </div>
                    )}
                    {description && (
                        <Dialog.Description className="text-sm text-gray-600 pb-4">
                            {description}
                        </Dialog.Description>
                    )}
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

// Subcomponents for more flexibility
Modal.Trigger = Dialog.Trigger
Modal.Close = Dialog.Close
Modal.Title = Dialog.Title
Modal.Description = Dialog.Description