import type { StoryObj, Meta } from '@storybook/react'
import { Info } from 'phosphor-react'
import { Tooltip, TooltipProps } from '@pedrolgarcia-ignite-ui/react'
import { colors } from '@pedrolgarcia-ignite-ui/tokens'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    content: 'Mais informações aqui',
    side: 'top',
    children: <Info weight="bold" size={30} color={colors.gray100} />,
  },
  argTypes: {
    side: {
      options: ['top', 'bottom', 'right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
