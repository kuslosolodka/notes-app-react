import type { Meta, StoryObj } from '@storybook/react'

import noteData from '../../assets/data/data.json'
import { Table } from '../../components/common/table/Table'

const meta = {
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const mockSummaryData = {
    categories: [
        {
            active: 50,
            archived: 20,
            category: 'Idea',
        },
        {
            active: 30,
            archived: 15,
            category: 'Task',
        },
        {
            active: 10,
            archived: 5,
            category: 'Random Thought',
        },
    ],
}

const Archived: Story = {
    args: { caption: 'Archived', data: noteData },
}

const Active: Story = {
    args: {
        caption: 'Active',
        data: noteData,
        isAdding: true,
    },
}

const Summary: Story = {
    args: {
        caption: 'Summary',
        data: mockSummaryData,
        isSummary: true,
    },
}

export { Active, Archived, Summary }
