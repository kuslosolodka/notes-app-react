import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { NoteData } from '../../../types/NoteData.ts'
import { NoteAddValidationSchema } from '../../../types/validation-schemas/note-add.validation-schema.ts'
import { formatDate } from '../../helpers/format-date/format-date.helper.ts'
import { Button } from '../button/Button.tsx'
import { Input } from '../input/Input.tsx'

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
        <form onSubmit={handleFormSubmit} className="grid gap-2.5" noValidate>
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
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </>
                )}
            />

            <label htmlFor="category" className="block font-bold">
                Category:
            </label>
            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                    <>
                        <select
                            id="category"
                            {...field}
                            className="w-full p-2 mb-2.5 border border-gray-300 rounded-md"
                        >
                            <option value="Random Thought">
                                Random Thought
                            </option>
                            <option value="Idea">Idea</option>
                            <option value="Task">Task</option>
                        </select>
                        {errors.category !== undefined && (
                            <span className="text-red-500">
                                {errors.category.message}
                            </span>
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
                            <span className="text-red-500">
                                {errors.date.message}
                            </span>
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
                            <span className="text-red-500">
                                {errors.content.message}
                            </span>
                        )}
                    </>
                )}
            />

            <div className="flex justify-center">
                <Button type="submit" variant="submit" text="Submit" />
            </div>
        </form>
    )
}

export { Form }
