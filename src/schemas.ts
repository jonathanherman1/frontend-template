import { z } from 'zod'

export const postSchema = z.object({
  createdAt: z.date().optional(),
  _id: z.string().optional(),
  message: z
    .string({ required_error: 'Message is required', invalid_type_error: 'Message must be a string' })
    .min(1, 'Message is required')
    .max(500, 'Message must be less than 500 characters'),
  name: z
    .string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' })
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
})

export type Post = z.infer<typeof postSchema>
