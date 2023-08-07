import React, { useCallback } from 'react'

import { useModal } from '../../../hooks/use-modal/use-modal.hook.ts'
import { useNoteStore } from '../../../store/store.ts'
import type { NoteData, SummaryData } from '../../../types/types.ts'
import { NoteList } from '../../notes-list/NotesList.tsx'
import { SummaryList } from '../../summary-list/SummaryList.tsx'
import { Button, Form, Modal, TableCaption, TableHeader } from '../common.ts'

interface Properties {
    data: NoteData[] | SummaryData
    isAdding?: boolean
    isSummary?: boolean
}

const Table: React.FC<Properties> = ({ data, isSummary, isAdding }) => {
    const isNotesData = Array.isArray(data)
    const { isModalOpen, openModal, closeModal } = useModal()

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
            <TableCaption
                title={
                    isSummary
                        ? 'Summary'
                        : isAdding
                        ? 'Active notes'
                        : 'Archived notes'
                }
            >
                {isAdding && !isSummary && (
                    <Button
                        type="button"
                        variant="add"
                        onClick={openModal}
                        text="+"
                    />
                )}
            </TableCaption>
            <thead>
                {isNotesData && (
                    <>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Category</TableHeader>
                        <TableHeader>Date</TableHeader>
                        <TableHeader>Content</TableHeader>
                        <TableHeader>Created At</TableHeader>
                        <TableHeader>Updated At</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </>
                )}
                {(isSummary ?? false) && (
                    <>
                        <TableHeader>Category</TableHeader>
                        <TableHeader>Active</TableHeader>
                        <TableHeader>Archived</TableHeader>
                    </>
                )}
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
