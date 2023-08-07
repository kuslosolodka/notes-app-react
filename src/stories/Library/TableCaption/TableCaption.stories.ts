import type { Meta, StoryObj } from '@storybook/react'

import { TableCaption } from '../../../components/common/common'

const meta = {
    component: TableCaption,
} satisfies Meta<typeof TableCaption>

export default meta
type Story = StoryObj<typeof meta>

const ArchivedNotes: Story = {
    args: {
        title: 'Archived notes',
    },
}

const ActiveNotes: Story = {
    args: {
        title: 'Active notes',
    },
}

const Summary: Story = {
    args: {
        title: 'Summary',
    },
}

export { ActiveNotes, ArchivedNotes, Summary }
