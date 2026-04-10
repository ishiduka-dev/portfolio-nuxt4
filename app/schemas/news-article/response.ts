import { z } from 'zod'
import { paginationSchema } from '~/schemas/common/pagination '
import { newsArticleSchema } from '~/schemas/news-article/entity'

export const newsArticlesResponseSchema = z.object({
  data: z.array(newsArticleSchema),
  meta: z.object({
    pagination: paginationSchema
  })
})

export type NewsArticlesResponse = z.infer<typeof newsArticlesResponseSchema>
