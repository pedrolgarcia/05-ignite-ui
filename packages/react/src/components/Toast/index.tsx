import { X } from 'phosphor-react'
import { useState, ComponentProps } from 'react'
import {
  ToastAction,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  opened: boolean
}

export function Toast({ title, description, opened }: ToastProps) {
  const [open, setOpen] = useState(opened)

  return (
    <ToastProvider>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastAction asChild altText="Close toast">
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
