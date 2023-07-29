import React, { useCallback, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import { formatDate } from '../../helpers/format-date/format-date.helper.ts'
import { Button } from '../button/Button.tsx'
import { Input } from '../input/Input.tsx'

interface FormData {
    category: string
    content: string
    createdAt: string
    date: string
    id: number
    isArchived: boolean
    name: string
    updatedAt: string
}

interface Properties {
    initialValues?: FormData | null
    onSubmit: (formData: FormData) => void
}

const Form: React.FC<Properties> = ({ initialValues, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
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
            onSubmit(formData)
        },
        [formData, onSubmit]
    )

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <LabelWrapper htmlFor="category">Category:</LabelWrapper>
            <SelectWrapper
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            >
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Task">Task</option>
            </SelectWrapper>

            <Input
                label="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <Input
                label="Content"
                id="content"
                name="content"
                onChange={handleChange}
                rows={4}
                value={formData.content}
                required
            />
            <Input
                label="Date"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <Button type="button" variant="cancel" />
            <Button type="submit" variant="submit" />
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
`

const LabelWrapper = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`

const SelectWrapper = styled.select`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export { Form }
export type { FormData }
