import { ReactNode } from "react";
import { cn } from "../../utils/cn";
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export interface TooltipProps{
    children: ReactNode
    content: ReactNode
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    delayDuration?: number
    className?: string
}

export function TooltipProvider({ children, ...props }: TooltipPrimitive.TooltipProviderProps) {
  return <TooltipPrimitive.Provider {...props}>{children}</TooltipPrimitive.Provider>
}

export function Tooltip({
    children,
    content,
    side = 'top',
    align = 'center',
    delayDuration = 200,
    className
}: TooltipProps) {
    return (
        <TooltipPrimitive.Root delayDuration={delayDuration}>
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    side={side}
                    align={align}
                    className={cn(
                        'z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white',
                        'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out',
                        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
                        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                        className
                    )}
                    sideOffset={5}
                >
                    {content}
                    <TooltipPrimitive.Arrow className="fill-gray-900" />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    )
}