import React from 'react'

import { Table } from '../components/common/common.ts'
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
                <Table data={activeNotes} isAdding />
                <Table data={archivedNotes} />
                <Table data={summaryData} isSummary />
            </div>
        </>
    )
}

export { Notes }
