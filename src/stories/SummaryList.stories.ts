import type { Meta, StoryObj } from '@storybook/react'

import { SummaryList } from '../components/summary-list/SummaryList'

const meta = {
    component: SummaryList,
    tags: ['autodocs'],
} satisfies Meta<typeof SummaryList>

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

const Default: Story = {
    args: { data: mockSummaryData },
}

export { Default }
