import { z } from 'zod'

export const paginationSchema = z.object({
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number()
})

export type Pagination = z.infer<typeof paginationSchema>
