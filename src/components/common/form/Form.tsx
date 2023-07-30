import React, { useCallback, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import type { NoteData } from '../../../types/NoteData.ts'
import { formatDate } from '../../helpers/format-date/format-date.helper.ts'
import { Button } from '../button/Button.tsx'
import { Input } from '../input/Input.tsx'
import { Label } from '../label/Label.tsx'

interface Properties {
    initialValues?: NoteData | null
    onSubmit: (noteData: NoteData) => void
}

const Form: React.FC<Properties> = ({ initialValues, onSubmit }) => {
    const [noteData, setFormData] = useState<NoteData>({
        category: 'Task',
        content: '',
        createdAt: formatDate(new Date().toISOString()),
        date: '',
        id: Date.now(),
        isArchived: false,
        name: '',
        updatedAt: formatDate(new Date().toISOString()),
    })

    useEffect(() => {
        // eslint-disable-next-line unicorn/no-null
        if (initialValues != null) {
            setFormData(initialValues)
        }
    }, [initialValues])

    const handleChange = useCallback(
        (
            event_: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >
        ) => {
            const { name, value } = event_.target
            setFormData((previousFormData) => ({
                ...previousFormData,
                [name]: value,
            }))
        },
        []
    )

    const handleSubmit = useCallback(
        (event_: React.FormEvent) => {
            event_.preventDefault()
            onSubmit(noteData)
        },
        [noteData, onSubmit]
    )

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input
                label="Name"
                type="text"
                id="name"
                name="name"
                value={noteData.name}
                onChange={handleChange}
                required
            />
            <Label htmlFor="category">Category:</Label>
            <Select
                id="category"
                name="category"
                value={noteData.category}
                onChange={handleChange}
                required
            >
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Task">Task</option>
            </Select>
            <Input
                label="Date"
                type="date"
                id="date"
                name="date"
                value={noteData.date}
                onChange={handleChange}
                required
            />
            <Input
                label="Content"
                id="content"
                name="content"
                onChange={handleChange}
                rows={4}
                value={noteData.content}
                required
            />
            <Wrapper>
                <Button type="submit" variant="submit" text="Submit" />
            </Wrapper>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    display: grid;
    gap: 10px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export { Form }
