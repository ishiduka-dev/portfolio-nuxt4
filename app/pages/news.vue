<script setup lang="ts">
import type { NewsArticlesResponse } from '~/schemas/news-article/response'

import { useRouteQuery } from '@vueuse/router'
const page = useRouteQuery('page', '1', {
  transform: Number
})

const { data } = await useFetch<NewsArticlesResponse>('/api/news-articles', {
  query: { page }
})

const articles = computed(() => data.value?.data ?? [])
const totalPages = computed(() => data.value?.meta.pagination.totalPages ?? 1)
</script>

<template>
  <div class="news-page">
    <NewsArticle
      v-for="article in articles"
      :key="article.id"
      :title="article.title"
      :body="article.body"
      :image="article.image"
      class="news-page__news-article"
    />
    <div class="news-page__pagination">
      <UiPagination v-model:page="page" :total-pages="totalPages" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px;
}

.news-page__news-article {
  margin-bottom: 24px;
}

.news-page__pagination {
  display: grid;
  place-items: center;
}
</style>
