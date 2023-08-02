import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '../../components/common/form/Form'

const meta = {
    component: Form,
    tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const Add: Story = {
    args: {
        onSubmit: (noteData) => {
            alert(JSON.stringify(noteData))
        },
    },
}

const Edit: Story = {
    args: {
        initialValues: {
            name: 'Important task',
            category: 'Task',
            date: '2023-08-02',
            content: 'Chilling and sleeping',
            id: Date.now(),
            createdAt: '2021-05-05T00:00:00.000Z',
            updatedAt: '2021-05-05T00:00:00.000Z',
            isArchived: false,
        },
        onSubmit: (noteData) => {
            alert(JSON.stringify(noteData))
        },
    },
}

export { Add, Edit }
