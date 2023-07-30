import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import data from '../assets/data/data.json'
import type { NoteData } from '../types/types.ts'

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

mountStoreDevtool('Store', useNoteStore)

export { useNoteStore }
