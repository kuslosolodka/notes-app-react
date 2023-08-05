import React, { useCallback, useState } from 'react'

import { useNoteStore } from '../../../store/store.ts'
import type { NoteData, SummaryData } from '../../../types/types.ts'
import { NoteList } from '../../notes-list/NotesList.tsx'
import { SummaryList } from '../../summary-list/SummaryList.tsx'
import { Button } from '../button/Button.tsx'
import { Form } from '../form/Form.tsx'
import { Modal } from '../modal/Modal.tsx'

interface Properties {
    caption: string
    data: NoteData[] | SummaryData
    isAdding?: boolean
    isSummary?: boolean
}

const Table: React.FC<Properties> = ({
    caption,
    data,
    isSummary,
    isAdding,
}) => {
    const isNotesData = Array.isArray(data)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const addNote = useNoteStore((state) => state.addNote)

    const handleSubmit = useCallback(
        (noteData: NoteData) => {
            addNote(noteData)
            closeModal()
        },
        [addNote, closeModal]
    )

    return (
        <table className="border border-solid border-gray-300 border-collapse m-0 p-0 w-full table-fixed">
            {isAdding ?? false ? (
                <caption className="text-2xl my-2 py-3 ">
                    {caption}
                    <Button
                        type="button"
                        variant="add"
                        onClick={openModal}
                        text="+"
                    />
                </caption>
            ) : (
                <caption className="text-2xl my-2 py-3">{caption}</caption>
            )}
            <thead>
                <tr className="bg-gray-200 border border-gray-300 p-1.5">
                    {isNotesData && (
                        <>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Name
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Category
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Date
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Content
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Created At
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Updated At
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Actions
                            </th>
                        </>
                    )}
                    {(isSummary ?? false) && (
                        <>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Category
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Active
                            </th>
                            <th className="text-sm tracking-widest uppercase text-center p-2.5">
                                Archived
                            </th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {isNotesData && <NoteList data={data} />}
                {(isSummary ?? false) && (
                    <SummaryList data={data as SummaryData} />
                )}
            </tbody>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onSubmit={handleSubmit} />
            </Modal>
        </table>
    )
}

export { Table }
