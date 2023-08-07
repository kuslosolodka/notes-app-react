import type { Meta, StoryObj } from '@storybook/react'

import { ErrorMessage } from '../../../components/common/common'

const meta = {
    component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

const Default: Story = {
    args: { message: 'Incorrect value' },
}

export { Default }
