<script setup lang="ts">
interface Props {
  page: number
  totalPages: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const changePage = (page: number) => {
  if (page < 1 || page > props.totalPages) return
  emit('update:page', page)
}

// spでページネーションUIのページ数削減
const { isSP } = useBreakpoint()
const visibleCount = computed(() => {
  return isSP.value ? 3 : 5
})
const half = computed(() => {
  return Math.floor(visibleCount.value / 2)
})
const prevThreshold = computed(() => {
  return half.value + 1
})
const nextThreshold = computed(() => {
  return props.totalPages - half.value - 1
})

const pages = computed(() => {
  const range = []

  const start = Math.max(1, props.page - half.value)
  const end = Math.min(props.totalPages, props.page + half.value)

  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  return range
})
</script>

<template>
  <div class="page">
    <button
      :disabled="page === 1"
      class="page__btn"
      @click="changePage(page - 1)"
    >
      Prev
    </button>

    <!-- 最初のページに飛べる固定ボタン -->
    <template v-if="!isSP">
      <button
        v-if="page > prevThreshold"
        class="page__btn"
        @click="changePage(1)"
      >
        1
      </button>
      <span v-if="page > prevThreshold" class="page__ellipsis">...</span>

      <span v-if="page <= prevThreshold" class="page__btn-dummy" />
      <span v-if="page <= prevThreshold" class="page__ellipsis-dummy" />
    </template>

    <!-- 前ボタン分のスペースを維持 -->
    <template v-for="n in half" :key="n">
      <span v-if="page <= n" class="page__btn-dummy" />
    </template>

    <button
      v-for="p in pages"
      :key="p"
      class="page__btn"
      :class="{ active: p === page }"
      @click="changePage(p)"
    >
      {{ p }}
    </button>

    <!-- 後ボタン分のスペースを維持 -->
    <template v-for="n in half" :key="n">
      <span v-if="page > totalPages - n" class="page__btn-dummy" />
    </template>

    <template v-if="!isSP">
      <span v-if="page > nextThreshold" class="page__btn-dummy" />
      <span v-if="page > nextThreshold" class="page__ellipsis-dummy" />

      <!-- 最後のページに飛べる固定ボタン -->
      <span v-if="page <= nextThreshold" class="page__ellipsis">...</span>
      <button
        v-if="page <= nextThreshold"
        class="page__btn"
        @click="changePage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </template>

    <button
      :disabled="page === totalPages"
      class="page__btn"
      @click="changePage(page + 1)"
    >
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  gap: 8px;
  align-items: center;
}

.page__btn,
.page__btn-dummy {
  min-width: 36px;
}

.page__ellipsis,
.page__ellipsis-dummy {
  width: 24px;
}

.page__ellipsis {
  color: var(--color-text);
  text-align: center;
}

.page__btn {
  font-family: 'Orbitron', sans-serif;
  padding: 4px 4px;
}

.page__btn.active {
  font-weight: bold;
  background: var(--color-bg);
  color: var(--color-text);
}
</style>
