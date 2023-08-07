import { z } from 'zod'

const NoteUpdateValidationSchema = z.object({
    category: z.string().trim().min(1).optional(),
    content: z.string().trim().min(1).optional(),
    date: z
        .string()
        .refine((argument) =>
            argument.match(
                /^([1-9]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/
            )
        )
        .optional(),
    name: z.string().trim().min(1).optional(),
    createdAt: z.string().trim().min(1).optional(),
    updatedAt: z.string().trim().min(1).optional(),
    id: z.number().min(1).optional(),
    isArchived: z.boolean().optional(),
})

export { NoteUpdateValidationSchema }
