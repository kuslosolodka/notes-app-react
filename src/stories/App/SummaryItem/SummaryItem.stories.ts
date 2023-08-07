import type { Meta, StoryObj } from '@storybook/react'

import { TableCell } from '../../../components/common/common'
import { mockSummaryData } from '../../common/mockSummaryData'

const meta = {
    component: TableCell,
} satisfies Meta<typeof TableCell>

export default meta
type Story = StoryObj<typeof meta>

const Category: Story = {
    args: {
        data: mockSummaryData.categories[0].category,
    },
}

const ActiveCount: Story = {
    args: {
        data: mockSummaryData.categories[0].active,
    },
}

const ArchivedCount: Story = {
    args: {
        data: mockSummaryData.categories[0].archived,
    },
}

export { ActiveCount, ArchivedCount, Category }
