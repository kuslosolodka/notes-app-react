import { SummaryData } from '../../types/SummaryData'

const mockSummaryData: SummaryData = {
    categories: [
        {
            active: 50,
            archived: 20,
            category: 'Idea',
        },
        {
            active: 30,
            archived: 15,
            category: 'Task',
        },
        {
            active: 10,
            archived: 5,
            category: 'Random Thought',
        },
    ],
}

export { mockSummaryData }
