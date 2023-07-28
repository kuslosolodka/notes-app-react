import React from 'react'

import data from '../assets/data/data.json'
import { Table } from '../components/common/table/Table.tsx'

const Notes: React.FC = () => {
    const archivedNotes = data.filter((item) => item.isArchived)
    const activeNotes = data.filter((item) => !item.isArchived)

    const summaryCounts: Record<string, number> = {}
    for (const item of data) {
        summaryCounts[item.category] =
            typeof summaryCounts[item.category] === 'number'
                ? summaryCounts[item.category] + 1
                : 1
    }

    return (
        <>
            <Table caption="Active Notes" data={activeNotes} />
            <Table caption="Archived Notes" data={archivedNotes} />
            <Table caption="Summary" data={summaryCounts} isSummary />
        </>
    )
}

export { Notes }
