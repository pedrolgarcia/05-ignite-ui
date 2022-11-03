import { X } from 'phosphor-react'
import { useState, ComponentProps } from 'react'
import {
  TooltipAction,
  TooltipClose,
  TooltipContainer,
  TooltipDescription,
  TooltipProvider,
  TooltipTitle,
  TooltipViewport,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  title: string
  description: string
  opened: boolean
}

export function Tooltip({ title, description, opened }: TooltipProps) {
  const [open, setOpen] = useState(opened)

  return (
    <TooltipProvider>
      <TooltipContainer open={open} onOpenChange={setOpen}>
        <TooltipTitle>{title}</TooltipTitle>
        <TooltipDescription>{description}</TooltipDescription>

        <TooltipAction asChild altText="Close Tooltip">
          <TooltipClose>
            <X size={20} />
          </TooltipClose>
        </TooltipAction>
      </TooltipContainer>

      <TooltipViewport />
    </TooltipProvider>
  )
}
