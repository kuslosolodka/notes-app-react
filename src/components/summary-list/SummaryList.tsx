import React from 'react'

import { TableCell, TableRow } from '../common/common'

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
                    <TableCell data={categoryData.category} />
                    <TableCell data={categoryData.active} />
                    <TableCell data={categoryData.archived} />
                </TableRow>
            ))}
        </>
    )
}

export { SummaryList }
export type { SummaryData }
