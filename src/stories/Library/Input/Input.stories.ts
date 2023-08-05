import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../../../components/common/input/Input'

const meta = {
    component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const Name: Story = {
    args: {
        label: 'Name',
        type: 'text',
        id: 'name',
        name: 'name',
    },
}

const Date: Story = {
    args: {
        label: 'Date',
        type: 'date',
        id: 'date',
        name: 'date',
    },
}

const Content: Story = {
    args: {
        label: 'Content',
        type: 'text',
        id: 'content',
        name: 'content',
        rows: 3,
    },
}

export { Content, Date, Name }
