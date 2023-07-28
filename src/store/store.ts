import { create } from 'zustand'

import data from '../assets/data/data.json'

interface NoteData {
    category: string
    content: string
    createdAt: string
    date: string
    id: number
    isArchived: boolean
    name: string
    updatedAt: string
}

interface NoteState {
    notes: NoteData[]
}

const useNoteStore = create<NoteState>()(() => ({
    notes: data,
}))

export { useNoteStore }
