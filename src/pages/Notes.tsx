import React from 'react'

import { Table } from '../components/common/table/Table.tsx'
import { useNoteStore } from '../store/store.ts'
import { calculateSummaryData } from './helpers/calculate-summary-date/calculate-summary-date.helper.ts'

const Notes: React.FC = () => {
    const data = useNoteStore((state) => state.notes)
    const archivedNotes = data.filter((item) => item.isArchived)
    const activeNotes = data.filter((item) => !item.isArchived)

    const summaryData = {
        categories: calculateSummaryData(data),
    }

    return (
        <>
            <div className="grid gap-2.5">
                <Table caption="Active Notes" data={activeNotes} isAdding />
                <Table caption="Archived Notes" data={archivedNotes} />
                <Table caption="Summary" data={summaryData} isSummary />
            </div>
        </>
    )
}

export { Notes }
