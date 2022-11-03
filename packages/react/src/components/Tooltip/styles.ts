import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-Tooltip-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,
  width: '22.5rem',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '0.75rem 1.25rem',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  // alignItems: 'center',
  gap: 4,
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-Tooltip-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const TooltipTitle = styled(Tooltip.Title, {
  gridArea: 'title',
  fontWeight: '$bold',
  fontSize: '$xl',
  fontFamily: '$default',
  color: '$white',
  lineHeight: '32px',
})

export const TooltipDescription = styled(Tooltip.Description, {
  gridArea: 'description',
  margin: 0,
  fontWeight: '$regular',
  fontSize: '$sm',
  fontFamily: '$default',
  color: '$gray200',
  lineHeight: '22.4px',
})

export const TooltipAction = styled(Tooltip.Action, {
  gridArea: 'action',
})

export const TooltipClose = styled(Tooltip.Close, {
  all: 'unset',
  background: 'transparent',
  cursor: 'pointer',

  position: 'absolute',
  top: '5px',
  right: '4px',

  svg: {
    color: '$gray200',
  },
})

export const TooltipViewport = styled(Tooltip.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
