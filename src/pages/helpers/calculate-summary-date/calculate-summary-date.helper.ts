import type { NoteData } from '../../../components/notes-list/NotesList.tsx'
import type { SummaryData } from '../../../components/summary-list/SummaryList.tsx'

const calculateSummaryData = (notes: NoteData[]): SummaryData['categories'] => {
    const summaryMap = new Map<
        string,
        { active: number; archived: number; category: string }
    >()

    for (const { category, isArchived } of notes) {
        const categoryData = summaryMap.get(category) ?? {
            active: 0,
            archived: 0,
            category,
        }

        if (isArchived) {
            categoryData.archived++
        } else {
            categoryData.active++
        }

        summaryMap.set(category, categoryData)
    }

    return [...summaryMap.values()]
}

export { calculateSummaryData }
