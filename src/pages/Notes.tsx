import React from 'react'

import { Table } from '../components/common/table/Table.tsx'
import { useNoteStore } from '../store/store.ts'

const Notes: React.FC = () => {
    const data = useNoteStore((state) => state.notes)
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
