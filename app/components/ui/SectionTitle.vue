<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <UiFadeBorder color="var(--color-neon-purple)" />
  </div>
</template>

<style lang="css" scoped>
.section-title {
  display: flex;
  align-items: center;
}

.section-title > h2 {
  font-family: 'Orbitron', sans-serif;
  color: var(--color-text);
  white-space: nowrap;
}
</style>
