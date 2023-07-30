import React, { useCallback, useState } from 'react'
import { styled } from 'styled-components'

import { useNoteStore } from '../../store/store.ts'
import type { NoteData } from '../../types/NoteData.ts'
import { Button } from '../common/button/Button.tsx'
import { Form } from '../common/form/Form.tsx'
import { Modal } from '../common/modal/Modal.tsx'
import { TableRow } from '../common/table-row/TableRow.tsx'
import { formatDate } from '../helpers/format-date/format-date.helper.ts'
import { Note } from '../note/Note.tsx'

interface Properties {
    data: NoteData[]
}

const NoteList: React.FC<Properties> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    // eslint-disable-next-line unicorn/no-null
    const [selectedNote, setSelectedNote] = useState<NoteData | null>(null)
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

    const openModal = useCallback((note: NoteData) => {
        setSelectedNote(note)
        setIsModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        // eslint-disable-next-line unicorn/no-null
        setSelectedNote(null)
        setIsModalOpen(false)
    }, [])

    const handleSubmit = useCallback(
        (noteData: NoteData) => {
            if (selectedNote !== null) {
                const updatedNote: NoteData = {
                    ...selectedNote,
                    ...noteData,
                    updatedAt: formatDate(new Date().toISOString()),
                }
                updateNote(updatedNote)
                setIsModalOpen(false)
            }
        },
        [selectedNote, updateNote]
    )

    return (
        <>
            {data.map((item) => (
                <TableRow key={item.id}>
                    <Note data={item.name} />
                    <Note data={item.category} />
                    <Note data={item.date} />
                    <Note data={item.content} />
                    <Note data={formatDate(item.createdAt)} />
                    <Note data={formatDate(item.updatedAt)} />
                    <Wrapper>
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
                    </Wrapper>
                </TableRow>
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onSubmit={handleSubmit} initialValues={selectedNote} />
            </Modal>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export { NoteList }
