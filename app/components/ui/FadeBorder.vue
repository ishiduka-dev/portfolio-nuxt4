<script setup lang="ts">
const { color } = defineProps<{
  color: string
}>()
</script>

<template>
  <div class="fade-border" :style="{ '--fade-border-color': color }" />
</template>

<style lang="css" scoped>
.fade-border {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 5%,
    var(--fade-border-color) 25%,
    var(--fade-border-color) 75%,
    transparent 95%
  );
}
</style>
