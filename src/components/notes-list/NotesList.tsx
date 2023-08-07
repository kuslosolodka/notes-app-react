import React, { useCallback } from 'react'

import { useModal } from '../../hooks/use-modal/use-modal.hook.ts'
import { useNoteStore } from '../../store/store.ts'
import type { NoteData } from '../../types/types.ts'
import { Button, Form, Modal, TableCell, TableRow } from '../common/common.ts'
import { formatDate } from '../helpers/format-date/format-date.helper.ts'

interface Properties {
    data: NoteData[]
}

const NoteList: React.FC<Properties> = ({ data }) => {
    const { isModalOpen, selectedNote, openModal, closeModal } =
        useModal<NoteData>()
    const updateNote = useNoteStore((state) => state.updateNote)
    const deleteNote = useNoteStore((state) => state.deleteNote)
    const archiveNote = useNoteStore((state) => state.toggleArchived)

    const handleDelete = useCallback(
        (id: number) => {
            deleteNote(id)
        },
        [deleteNote]
    )

    const handleArchiving = useCallback(
        (id: number) => {
            archiveNote(id)
        },
        [archiveNote]
    )

    const handleSubmit = useCallback(
        (noteData: NoteData) => {
            if (selectedNote !== null) {
                const updatedNote: NoteData = {
                    ...selectedNote,
                    ...noteData,
                    updatedAt: formatDate(new Date().toISOString()),
                }
                updateNote(updatedNote)
                closeModal()
            }
        },
        [selectedNote, updateNote, closeModal]
    )

    return (
        <>
            {data.map((item) => (
                <TableRow key={item.id}>
                    <TableCell data={item.name} />
                    <TableCell data={item.category} />
                    <TableCell data={item.date} />
                    <TableCell data={item.content} />
                    <TableCell data={formatDate(item.createdAt)} />
                    <TableCell data={formatDate(item.updatedAt)} />
                    <div className="grid grid-cols-3 gap-4">
                        <Button
                            type="button"
                            variant="edit"
                            onClick={() => {
                                openModal(item)
                            }}
                        />
                        <Button
                            type="button"
                            variant="delete"
                            onClick={() => {
                                handleDelete(item.id)
                            }}
                        />
                        <Button
                            type="button"
                            variant="archive"
                            onClick={() => {
                                handleArchiving(item.id)
                            }}
                        />
                    </div>
                </TableRow>
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onSubmit={handleSubmit} initialValues={selectedNote} />
            </Modal>
        </>
    )
}

export { NoteList }
