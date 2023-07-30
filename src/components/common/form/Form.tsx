import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import type { NoteData } from '../../../types/NoteData.ts'
import { NoteAddValidationSchema } from '../../../types/validation-schemas/note-add.validation-schema.ts'
import { formatDate } from '../../helpers/format-date/format-date.helper.ts'
import { Button } from '../button/Button.tsx'
import { Input } from '../input/Input.tsx'
import { Label } from '../label/Label.tsx'

interface Properties {
    initialValues?: NoteData | null
    onSubmit: (noteData: NoteData) => void
}

const Form: React.FC<Properties> = ({ initialValues, onSubmit }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NoteData>({
        defaultValues: {
            category: 'Task',
            content: '',
            createdAt: formatDate(new Date().toISOString()),
            date: '',
            id: Date.now(),
            isArchived: false,
            name: '',
            updatedAt: formatDate(new Date().toISOString()),
        },
        resolver: zodResolver(NoteAddValidationSchema),
    })

    useEffect(() => {
        if (initialValues !== null) {
            control._reset(initialValues)
        }
    }, [control, initialValues])

    const handleFormSubmit = useCallback(
        (event_: React.BaseSyntheticEvent): void => {
            void handleSubmit((formData: NoteData) => {
                onSubmit(formData)
            })(event_)
        },
        [handleSubmit, onSubmit]
    )

    return (
        <FormWrapper onSubmit={handleFormSubmit} noValidate>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <>
                        <Input
                            label="Name"
                            type="text"
                            id="name"
                            {...field}
                            required
                        />
                        {errors.name !== undefined && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </>
                )}
            />

            <Label htmlFor="category">Category:</Label>
            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                    <>
                        <Select id="category" {...field}>
                            <option value="Random Thought">
                                Random Thought
                            </option>
                            <option value="Idea">Idea</option>
                            <option value="Task">Task</option>
                        </Select>
                        {errors.category !== undefined && (
                            <ErrorMessage>
                                {errors.category.message}
                            </ErrorMessage>
                        )}
                    </>
                )}
            />

            <Controller
                name="date"
                control={control}
                render={({ field }) => (
                    <>
                        <Input
                            label="Date"
                            type="date"
                            id="date"
                            {...field}
                            required
                        />
                        {errors.date !== undefined && (
                            <ErrorMessage>{errors.date.message}</ErrorMessage>
                        )}
                    </>
                )}
            />

            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <>
                        <Input
                            label="Content"
                            id="content"
                            rows={4}
                            {...field}
                            required
                        />
                        {errors.content !== undefined && (
                            <ErrorMessage>
                                {errors.content.message}
                            </ErrorMessage>
                        )}
                    </>
                )}
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

const ErrorMessage = styled.span`
    color: rgb(255 0 0);
`

export { Form }
