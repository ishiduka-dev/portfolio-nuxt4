<script setup lang="ts">
import LatestRelease from '~/components/home/LatestRelease.vue'
</script>

<template>
  <div class="home">
    <HomeHeroImage />
    <div class="home__info">
      <section class="home__section">
        <UiSectionTitle title="LATEST RELEASE" />
        <LatestRelease />
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__info {
  max-width: 1200px;
  width: 100%;
}

.home__info > section {
  margin: 0 48px;
}
</style>
