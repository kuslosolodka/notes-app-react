import type { Meta, StoryObj } from '@storybook/react'

import notesData from '../../../assets/data/data.json'
import { NoteList } from '../../../components/notes-list/NotesList'

const meta = {
    component: NoteList,
} satisfies Meta<typeof NoteList>

export default meta
type Story = StoryObj<typeof meta>

const Default: Story = {
    args: { data: notesData },
}

export { Default }
