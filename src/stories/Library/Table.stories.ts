import type { Meta, StoryObj } from '@storybook/react'

import noteData from '../../assets/data/data.json'
import { Table } from '../../components/common/table/Table'
import { mockSummaryData } from '../common/mockSummaryData'

const meta = {
    component: Table,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

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
