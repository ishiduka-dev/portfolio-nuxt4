<script setup lang="ts">
const tourList = [
  { venue: 'TOKYO', date: 'May 14, 2026' },
  { venue: 'OSAKA', date: 'June 03, 2026' },
  { venue: 'SEOUL', date: 'July 11, 2026' }
]
</script>

<template>
  <div class="tour">
    <template v-for="(tour, index) in tourList" :key="tour.date">
      <div class="tour__info">
        <p class="tour__venue">{{ tour.venue }}</p>
        <p class="tour__date">{{ tour.date }}</p>
      </div>
      <span v-if="index !== tourList.length - 1" class="tour__neon-line" />
    </template>
  </div>
</template>

<style lang="css" scoped>
.tour {
  color: var(--color-text);
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.tour__info {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.tour__venue,
.tour__date {
  margin: 0;
}

.tour__venue {
  font-size: 1.5rem;
}

.tour__neon-line {
  width: 2px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--color-neon-blue) 50%,
    transparent 100%
  );
  box-shadow:
    0 0 5px var(--color-neon-blue),
    0 0 10px var(--color-neon-blue),
    0 0 20px var(--color-neon-blue);
}
</style>
