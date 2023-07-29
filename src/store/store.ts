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
    addNote: (note: NoteData) => void
    deleteNote: (id: number) => void
    notes: NoteData[]
    toggleArchived: (id: number) => void
    updateNote: (note: NoteData) => void
}

const useNoteStore = create<NoteState>((set) => ({
    notes: data,
    addNote: (note) => {
        set((state) => ({ notes: [...state.notes, note] }))
    },
    updateNote: (note) => {
        set((state) => ({
            notes: state.notes.map((item) =>
                item.id === note.id ? note : item
            ),
        }))
    },
    deleteNote: (id) => {
        set((state) => ({
            notes: state.notes.filter((item) => item.id !== id),
        }))
    },
    toggleArchived: (id) => {
        set((state) => ({
            notes: state.notes.map((item) =>
                item.id === id
                    ? { ...item, isArchived: !item.isArchived }
                    : item
            ),
        }))
    },
}))

export { useNoteStore }
