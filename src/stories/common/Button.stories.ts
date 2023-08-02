import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../components/common/button/Button'

const meta = {
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const Submit: Story = {
    args: {
        variant: 'submit',
        type: 'submit',
        text: 'Submit',
    },
}

const Edit: Story = {
    args: {
        variant: 'edit',
        type: 'button',
    },
}

const Delete: Story = {
    args: {
        variant: 'delete',
        type: 'button',
    },
}

const Add: Story = {
    args: {
        variant: 'add',
        type: 'button',
        text: '+',
    },
}
const Archive: Story = {
    args: {
        variant: 'archive',
        type: 'button',
    },
}
const Cancel: Story = {
    args: {
        variant: 'cancel',
        type: 'button',
    },
}

export { Add, Archive, Cancel, Delete, Edit, Submit }
