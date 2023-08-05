import type { Meta, StoryObj } from '@storybook/react'

import { Notes } from '../../pages/Notes'

const meta = {
    component: Notes,
} satisfies Meta<typeof Notes>

export default meta
type Story = StoryObj<typeof meta>

const Default: Story = {
    args: {},
}

export { Default }
