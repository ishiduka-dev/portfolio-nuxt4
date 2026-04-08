<script setup lang="ts">
useHead({
  title: 'NEON LUCID | Official Site',
  meta: [
    { name: 'description', content: '架空アーティストの公式サイト' },
    { property: 'og:title', content: 'NEON LUCID | Official Site' },
    { property: 'og:description', content: '架空アーティストの公式サイト' },
    {
      property: 'og:image',
      content: 'https://portfolio-nuxt4-jet.vercel.app/ogp.png'
    }
  ]
})
</script>

<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
  </div>
</template>

<style lang="css" scoped>
.layout {
  background-color: var(--color-bg);
}
</style>
