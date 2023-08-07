import { useCallback, useState } from 'react'

import { NoteData } from '../../../../types/NoteData'

interface Properties {
    isModalOpen: boolean
    openModal: () => void
    closeModal: () => void
    handleSubmit: (notesData: NoteData) => void
}

const useModal = (): Properties => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const handleSubmit = useCallback(
        (notesData: NoteData) => {
            alert(JSON.stringify(notesData, undefined, 2))
            closeModal()
        },
        [closeModal]
    )

    return {
        isModalOpen,
        openModal,
        closeModal,
        handleSubmit,
    }
}

export { useModal }
