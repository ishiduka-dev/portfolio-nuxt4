<script setup lang="ts">
const { videoId, title } = defineProps<{
  videoId: string
  title: string
}>()
</script>

<template>
  <div class="youtube-player">
    <iframe :src="`https://www.youtube.com/embed/${videoId}`" allowfullscreen />
    <p>{{ title }}</p>
  </div>
</template>

<style lang="css" scoped>
.youtube-player {
  text-align: center;
}

.youtube-player > p {
  margin: 0;
  color: var(--color-text);
}
</style>
