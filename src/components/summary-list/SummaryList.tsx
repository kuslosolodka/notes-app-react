import React from 'react'

import { TableCell } from '../common/table-cell/TableCell.tsx'
import { TableRow } from '../common/table-row/TableRow.tsx'

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

export { SummaryList }
export type { SummaryData }
