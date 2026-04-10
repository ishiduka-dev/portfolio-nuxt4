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

const pages = computed(() => {
  const range = []
  const start = Math.max(1, props.page - 2)
  const end = Math.min(props.totalPages, props.page + 2)

  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  return range
})
</script>

<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="changePage(page - 1)">Prev</button>

    <button v-if="page > 3" @click="changePage(1)">1</button>
    <span v-if="page > 4" class="pagination__ellipsis">...</span>

    <button
      v-for="p in pages"
      :key="p"
      :class="{ active: p === page }"
      @click="changePage(p)"
    >
      {{ p }}
    </button>

    <span v-if="page < totalPages - 3" class="pagination__ellipsis">...</span>
    <button v-if="page < totalPages - 2" @click="changePage(totalPages)">
      {{ totalPages }}
    </button>

    <button :disabled="page === totalPages" @click="changePage(page + 1)">
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pagination__ellipsis {
  color: var(--color-text);
}

.pagination > button {
  font-family: 'Orbitron', sans-serif;
  padding: 4px 8px;
  min-width: 36px;
}

.pagination > button.active {
  font-weight: bold;
  background: var(--color-bg);
  color: var(--color-text);
}
</style>
