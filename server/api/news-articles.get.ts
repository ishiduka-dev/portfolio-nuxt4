import dayjs from 'dayjs'
import type { NewsArticle } from '~/schemas/news-article/entity'
import { newsArticlesRequestSchema } from '~/schemas/news-article/request'
import { newsArticlesResponseSchema } from '~/schemas/news-article/response'

const dummyData: NewsArticle[] = []
const baseDate = new Date('2026-04-01T01:02:03+09:00')

for (let i = 1; i <= 100; i++) {
  const date = dayjs(baseDate, 'Asia/Tokyo').add(i, 'hour').format()

  dummyData.push({
    id: i,
    title: 'news ' + i,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/768/432',
    announceAt: date,
    createdAt: date,
    updatedAt: date
  })
}

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const parsed = newsArticlesRequestSchema.parse(query)

  const meta = {
    pagination: {
      total: dummyData.length,
      page: parsed.page,
      limit: parsed.limit,
      totalPages: Math.ceil(dummyData.length / parsed.limit)
    }
  }

  const start = (parsed.page - 1) * parsed.limit
  const end = start + parsed.limit
  const data = dummyData.slice(start, end)

  return newsArticlesResponseSchema.parse({
    meta: meta,
    data: data
  })
})
