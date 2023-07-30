import { z } from 'zod'

const NoteAddValidationSchema = z.object({
    category: z.string().trim().min(1),
    content: z.string().trim().min(1),
    date: z
        .string()
        .refine((argument) =>
            argument.match(
                /^([1-9]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/
            )
        ),
    name: z.string().trim().min(1),
    createdAt: z.string().trim().min(1),
    updatedAt: z.string().trim().min(1),
    id: z.number().min(1),
    isArchived: z.boolean(),
})

export { NoteAddValidationSchema }
