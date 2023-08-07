/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react'

import { TableHeader } from '../../../components/common/common'

const meta: Meta<typeof TableHeader> = {
    component: TableHeader,
}

export default meta
type Story = StoryObj<typeof TableHeader>

const Name: Story = {
    render: () => <TableHeader>Name</TableHeader>,
}

const Category: Story = {
    render: () => <TableHeader>Category</TableHeader>,
}

const Content: Story = {
    render: () => <TableHeader>Content</TableHeader>,
}

const Date: Story = {
    render: () => <TableHeader>Date</TableHeader>,
}

const CreatedAt: Story = {
    render: () => <TableHeader>Created At</TableHeader>,
}

const UpdatedAt: Story = {
    render: () => <TableHeader>Updated At</TableHeader>,
}

const Active: Story = {
    render: () => <TableHeader>Active</TableHeader>,
}

const Archived: Story = {
    render: () => <TableHeader>Archived</TableHeader>,
}

export { Active, Archived, Category, Content, CreatedAt, Date, Name, UpdatedAt }
