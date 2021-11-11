import React from 'react'
import {
  ComponentStory,
  Meta,
  Story,
} from '@storybook/react'
import PeepAvatar from '../index'
import { avatars } from '../index'
import { PeepAvatarProps } from '../Peep.types'
import PeepAvatarDoc from './PeepAvatarDoc.mdx'
const options = Object.keys(avatars)

export default {
  title: 'peepAvatar',
  component: PeepAvatar,

  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
        step: 2,
      },
    },
    name: {
      control: {
        type: 'select',
        options,
      },
    },
  },
  parameters: {
    docs: {
      page: PeepAvatarDoc,
    },
  },
}

const Template: Story<PeepAvatarProps> = (args) => (
  <PeepAvatar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Peep1',
  title: 'peep1',
}
