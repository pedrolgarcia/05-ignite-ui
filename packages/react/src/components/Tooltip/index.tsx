import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
