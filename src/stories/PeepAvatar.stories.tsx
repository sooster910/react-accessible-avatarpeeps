import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'

import PeepAvatar from '../index'
import { avatars } from '../index'
import PeepAvatarDoc from './PeepAvatarDoc.mdx'
const options = Object.keys(avatars)
export default {
  title: 'peepAvatar',
  component: PeepAvatar,

  argTypes: {
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
} as Meta

const Template: ComponentStory<typeof PeepAvatar> = (
  args
) => <PeepAvatar {...args} />

export const peepAvatar = Template.bind({})
peepAvatar.args = {
  name: 'Peep1',
  title: 'avatar',
  color: '#000',
}
