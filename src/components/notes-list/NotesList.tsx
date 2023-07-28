import React from 'react'
import { styled } from 'styled-components'

import { Note } from '../note/Note.tsx'

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

interface Properties {
    data: NoteData[]
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const month = monthNames[date.getMonth()]
    const day = date.getDate().toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
}

const NoteList: React.FC<Properties> = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <TableRow key={item.id}>
                    <Note data={item.name} />
                    <Note data={item.category} />
                    <Note data={item.content} />
                    <Note data={item.date} />
                    <Note data={formatDate(item.createdAt)} />
                    <Note data={formatDate(item.updatedAt)} />
                </TableRow>
            ))}
        </>
    )
}

const TableRow = styled.tr`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
`

export { NoteList }
