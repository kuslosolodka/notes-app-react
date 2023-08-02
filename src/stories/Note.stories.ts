import type { Meta, StoryObj } from '@storybook/react'

import { Note } from '../components/note/Note'
import { NoteData } from '../types/NoteData'

const meta = {
    component: Note,
    tags: ['autodocs'],
} satisfies Meta<typeof Note>

export default meta
type Story = StoryObj<typeof meta>

const noteData: NoteData = {
    // omit props (remove id and isArchived)
    name: 'Important task',
    category: 'Task',
    date: '2023-08-02',
    content: 'Chilling and sleeping',
    id: 1,
    createdAt: '2021-05-05T00:00:00.000Z',
    updatedAt: '2021-05-05T00:00:00.000Z',
    isArchived: false,
}

const Name: Story = {
    args: { data: noteData.name },
}

const Category: Story = {
    args: { data: noteData.category },
}

const Date: Story = {
    args: { data: noteData.date },
}

const Content: Story = {
    args: { data: noteData.content },
}

const CreatedAt: Story = {
    args: { data: noteData.createdAt },
}

const UpdatedAt: Story = {
    args: { data: noteData.updatedAt },
}

export { Category, Content, CreatedAt, Date, Name, UpdatedAt }
