import React, { useCallback, useState } from 'react'
import { styled } from 'styled-components'

import { useNoteStore } from '../../../store/store.ts'
import type { NoteData, SummaryData } from '../../../types/types.ts'
import { NoteList } from '../../notes-list/NotesList.tsx'
import { SummaryList } from '../../summary-list/SummaryList.tsx'
import { Button } from '../button/Button.tsx'
import { Form } from '../form/Form.tsx'
import { Modal } from '../modal/Modal.tsx'
import { TableRow } from '../table-row/TableRow.tsx'

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
        <TableWrapper>
            {isAdding ?? false ? (
                <TableCaption>
                    {caption}
                    <Button
                        type="button"
                        variant="add"
                        onClick={openModal}
                        text="+"
                    />
                </TableCaption>
            ) : (
                <TableCaption>{caption}</TableCaption>
            )}
            <thead>
                <TableRow>
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
                </TableRow>
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
        </TableWrapper>
    )
}

const TableWrapper = styled.table`
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    @media (width <= 600px) {
        border: 0;
    }
`

const TableCaption = styled.caption`
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;

    @media (width <= 600px) {
        font-size: 1.3em;
    }
`

const TableHeader = styled.th`
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.625em;
    text-align: center;

    @media (width <= 600px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`

export { Table }
