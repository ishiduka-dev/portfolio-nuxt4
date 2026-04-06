<script setup lang="ts">
const musicList = [
  'Neon Rain',
  'Lucia Street',
  'Signal Lost',
  'Midnight Protocol'
]
</script>

<template>
  <div class="release">
    <img src="/images/latest_release.png" />
    <div class="release__info">
      <p class="release__title">MIDNIGHT SIGNALS</p>
      <div>
        <p class="release__period">2026 Album</p>
        <UiFadeBorder color="var(--color-text)" />
        <ol class="release__list">
          <li v-for="(music, index) in musicList" :key="music">
            <span class="release__list-index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            {{ music }}
          </li>
        </ol>
      </div>
      <UiYoutubeButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.release {
  display: flex;
  gap: 24px;
}

.release > img {
  max-width: 300px;
  object-fit: contain;
}

.release__info {
  width: 100%;
}

.release__title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;

  margin: 0;

  color: var(--color-text);
  text-shadow:
    0 0 1px var(--color-neon-pink),
    0 0 4px var(--color-neon-pink),
    0 0 10px var(--color-neon-pink);
}

.release__title,
.release__period,
.release__list {
  color: var(--color-text);
}

.release__list {
  list-style: none;
  padding: 0;
}

.release__period {
  margin: 8px 0;
}

.release__list-index {
  margin-right: 8px;
}

@include sp {
  .release {
    flex-direction: column;
    align-items: center;
  }
}
</style>
