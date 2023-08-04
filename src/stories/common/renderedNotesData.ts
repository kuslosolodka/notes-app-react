import { NoteData } from '../../types/NoteData'

type OmittedNotesData = Omit<NoteData, 'id' | 'isArchived'>

const renderedNotesData: OmittedNotesData = {
    name: 'Important task',
    category: 'Task',
    date: '2023-08-02',
    content: 'Chilling and sleeping',
    createdAt: '2021-05-05T00:00:00.000Z',
    updatedAt: '2021-05-05T00:00:00.000Z',
}

export { renderedNotesData }
