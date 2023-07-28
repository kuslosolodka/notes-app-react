import React from 'react'
import { styled } from 'styled-components'

type SummaryData = Record<string, number>

interface Properties {
    data: SummaryData
}

const SummaryList: React.FC<Properties> = ({ data }) => {
    return (
        <>
            {Object.entries(data).map(([category, count]) => (
                <TableRow key={category}>
                    <TableCell>{category}</TableCell>
                    <TableCell>{count}</TableCell>
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

const TableCell = styled.td`
    padding: 0.625em;
    text-align: center;
    font-weight: 300;
`

export { SummaryList }
