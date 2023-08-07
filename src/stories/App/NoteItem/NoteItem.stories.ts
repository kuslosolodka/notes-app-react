import type { Meta, StoryObj } from '@storybook/react'

import { TableCell } from '../../../components/common/common'
import { renderedNotesData } from '../../common/renderedNotesData'

const meta = {
    component: TableCell,
} satisfies Meta<typeof TableCell>

export default meta
type Story = StoryObj<typeof meta>

const Name: Story = {
    args: {
        data: renderedNotesData.name,
    },
}

const Category: Story = {
    args: {
        data: renderedNotesData.category,
    },
}

const Date: Story = {
    args: {
        data: renderedNotesData.date,
    },
}

const Content: Story = {
    args: {
        data: renderedNotesData.content,
    },
}

const CreatedAt: Story = {
    args: {
        data: renderedNotesData.createdAt,
    },
}

const UpdatedAt: Story = {
    args: {
        data: renderedNotesData.updatedAt,
    },
}

export { Category, Content, CreatedAt, Date, Name, UpdatedAt }
