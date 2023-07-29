import React from 'react'
import { styled } from 'styled-components'

interface SummaryData {
    categories: Array<{
        active: number
        archived: number
        category: string
    }>
}

interface Properties {
    data: SummaryData
}

const SummaryList: React.FC<Properties> = ({ data }) => {
    return (
        <>
            {data.categories.map((categoryData) => (
                <TableRow key={categoryData.category}>
                    <TableCell>{categoryData.category}</TableCell>
                    <TableCell>{categoryData.active}</TableCell>
                    <TableCell>{categoryData.archived}</TableCell>
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
export type { SummaryData }
