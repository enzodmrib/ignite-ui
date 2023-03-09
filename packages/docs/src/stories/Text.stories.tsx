import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem arcu, luctus gravida consequat eu, auctor nec felis. Cras non tincidunt odio. Nulla faucibus tortor at diam hendrerit finibus. Suspendisse luctus felis in tincidunt ullamcorper. Morbi commodo, neque sit amet semper dictum, arcu ligula interdum est, ac hendrerit urna orci eu nisl. Nulla tincidunt tempus sollicitudin. Nunc lacinia nulla quis libero bibendum, id lacinia tortor laoreet. Aenean sed laoreet urna. Pellentesque diam neque, volutpat pretium laoreet a, maximus in urna. Donec a velit ex. Duis rhoncus est quis risus vehicula mattis at ut enim. Proin sed felis at augue sodales ultrices sit amet in ipsum. Nulla aliquam sem dictum quam gravida tincidunt.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
