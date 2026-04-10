import { z } from 'zod'

export const newsArticlesRequestSchema = z.object({
  page: z.coerce.number().min(1).default(1).catch(1),
  limit: z.coerce.number().min(1).max(100).default(5).catch(5)
})
