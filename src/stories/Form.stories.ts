import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '../components/common/form/Form'
import { mockNotesData } from './common/mockNotesData'

const meta = {
    component: Form,
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const Add: Story = {
    args: {
        onSubmit: (noteData) => {
            alert(JSON.stringify(noteData, undefined, 2))
        },
    },
}

const Edit: Story = {
    args: {
        initialValues: mockNotesData,
        onSubmit: (noteData) => {
            alert(JSON.stringify(noteData, undefined, 2))
        },
    },
}

export { Add, Edit }
