import React from 'react'
import { styled } from 'styled-components'

import { NoteList } from '../../notes-list/NotesList.tsx'
import { SummaryList } from '../../summary-list/SummaryList.tsx'

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

type SummaryData = Record<string, number>

interface Properties {
    caption: string
    data: NoteData[] | SummaryData
    isSummary?: boolean
}

const Table: React.FC<Properties> = ({ caption, data, isSummary }) => {
    const isNotesData = Array.isArray(data)

    return (
        <TableWrapper>
            <TableCaption>{caption}</TableCaption>
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
                        </>
                    )}
                    {(isSummary ?? false) && (
                        <>
                            <TableHeader>Count</TableHeader>
                            <TableHeader>Category</TableHeader>
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
`

const TableCaption = styled.caption`
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
`

const TableHeader = styled.th`
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.625em;
    text-align: center;
`

const TableRow = styled.tr`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
`

export { Table }
