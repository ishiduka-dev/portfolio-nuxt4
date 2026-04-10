<script setup lang="ts">
const { title, body, image } = defineProps<{
  title: string
  body: string
  image: string
}>()
</script>

<template>
  <div class="news-article">
    <p class="news-article__title">{{ title }}</p>
    <p class="news-article__body">{{ body }}</p>
    <img class="news-article__image" :src="image" />
  </div>
</template>

<style lang="scss" scoped>
.news-article {
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: center;

  color: var(--color-text);
  border: 1px solid var(--color-text);
}

.news-article__title,
.news-article__body {
  margin: 0;
  padding: 8px;
}

.news-article__title {
  grid-column: 1 / -1;
  border-bottom: 1px solid var(--color-text);
}

.news-article__body {
  grid-column: 1 / 2;
}

.news-article__image {
  width: 100%;
  max-width: 300px;
  grid-column: 2 / 3;
  place-self: center;
}

@include sp {
  .news-article {
    grid-template-columns: 1fr;
  }

  .news-article__title,
  .news-article__body,
  .news-article__image {
    grid-column: auto;
  }
}
</style>
