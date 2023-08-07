/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react'

import { TableCell, TableRow } from '../../../components/common/common'
import { mockSummaryData } from '../../common/mockSummaryData'
import { renderedNotesData } from '../../common/renderedNotesData'

const meta: Meta<typeof TableRow> = {
    component: TableRow,
}

export default meta
type Story = StoryObj<typeof TableRow>

const Active: Story = {
    render: () => (
        <TableRow>
            <TableCell data={renderedNotesData.category}></TableCell>
            <TableCell data={renderedNotesData.name}></TableCell>
            <TableCell data={renderedNotesData.content}></TableCell>
            <TableCell data={renderedNotesData.createdAt}></TableCell>
            <TableCell data={renderedNotesData.updatedAt}></TableCell>
        </TableRow>
    ),
}

const Archived: Story = {
    render: () => (
        <TableRow>
            <TableCell data={renderedNotesData.category}></TableCell>
            <TableCell data={renderedNotesData.name}></TableCell>
            <TableCell data={renderedNotesData.content}></TableCell>
            <TableCell data={renderedNotesData.createdAt}></TableCell>
            <TableCell data={renderedNotesData.updatedAt}></TableCell>
        </TableRow>
    ),
}
const Summary: Story = {
    render: () => (
        <TableRow>
            <TableCell
                data={mockSummaryData.categories[0].category}
            ></TableCell>
            <TableCell data={mockSummaryData.categories[0].active}></TableCell>
            <TableCell
                data={mockSummaryData.categories[0].archived}
            ></TableCell>
        </TableRow>
    ),
}

export { Active, Archived, Summary }
