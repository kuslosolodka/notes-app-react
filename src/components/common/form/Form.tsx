import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { NoteData } from '../../../types/types.ts'
import {
    NoteAddValidationSchema,
    NoteUpdateValidationSchema,
} from '../../../types/validation-schemas/validation-schemas.ts'
import { formatDate } from '../../helpers/format-date/format-date.helper.ts'
import { Button, ErrorMessage, Input, Label } from '../common.ts'

interface Properties {
    initialValues?: NoteData | null
    onSubmit: (noteData: NoteData) => void
}

const Form: React.FC<Properties> = ({ initialValues, onSubmit }) => {
    const isUpdating = initialValues !== null

    const validationSchema = isUpdating
        ? NoteUpdateValidationSchema
        : NoteAddValidationSchema

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
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (isUpdating) {
            control._reset(initialValues)
        }
    }, [control, initialValues, isUpdating])

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
                            <ErrorMessage
                                message={errors.name.message}
                            ></ErrorMessage>
                        )}
                    </>
                )}
            />

            <Label label="Category"></Label>
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
                            <ErrorMessage
                                message={errors.category.message}
                            ></ErrorMessage>
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
                            <ErrorMessage
                                message={errors.date.message}
                            ></ErrorMessage>
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
                            <ErrorMessage
                                message={errors.content.message}
                            ></ErrorMessage>
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
