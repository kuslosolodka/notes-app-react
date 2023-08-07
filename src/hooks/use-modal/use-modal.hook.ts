/* eslint-disable unicorn/no-null */
import { useCallback, useState } from 'react'

export const useModal = <T>(initialValue: T | null = null) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState<T | null>(initialValue)

    const openModal = useCallback((note?: T) => {
        if (note) {
            setSelectedNote(note)
        }
        setIsModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setSelectedNote(null)
        setIsModalOpen(false)
    }, [])

    return { isModalOpen, selectedNote, openModal, closeModal }
}
