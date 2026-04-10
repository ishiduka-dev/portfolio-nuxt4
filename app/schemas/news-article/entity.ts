import { z } from 'zod'

export const newsArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  image: z.string(),
  announceAt: z.iso.datetime({ offset: true }),
  createdAt: z.iso.datetime({ offset: true }),
  updatedAt: z.iso.datetime({ offset: true })
})

export type NewsArticle = z.infer<typeof newsArticleSchema>
