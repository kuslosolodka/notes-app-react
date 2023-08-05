import type { Meta, StoryObj } from '@storybook/react'

import { SummaryList } from '../../components/summary-list/SummaryList'
import { mockSummaryData } from '../common/mockSummaryData'

const meta = {
    component: SummaryList,
} satisfies Meta<typeof SummaryList>

export default meta
type Story = StoryObj<typeof meta>

const Default: Story = {
    args: { data: mockSummaryData },
}

export { Default }
