import { Meta, StoryObj } from '@storybook/react'
import { TextInputProps, TextInput } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your e-mail address',
    type: 'email',
  },
  argTypes: {},
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
