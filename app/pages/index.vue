<script setup lang="ts">
const videoIdList = [
  { id: 'IcrbM1l_BoI', title: 'Wake Me Up' },
  { id: 'cHHLHGNpCSA', title: 'Waiting For Love' },
  { id: 'UtF6Jej8yb4', title: 'The Nights' }
]
</script>

<template>
  <div class="home">
    <HomeHeroImage />
    <div class="home__info">
      <section>
        <UiSectionTitle title="LATEST RELEASE" />
        <HomeLatestRelease />
      </section>
      <section>
        <UiSectionTitle title="MUSIC VIDEOS" />
        <ClientOnly>
          <div class="home__video-section">
            <UiYouTubePlayer
              v-for="video in videoIdList"
              :key="video.id"
              :video-id="video.id"
              :title="video.title"
              class="home__video"
            />
          </div>
        </ClientOnly>
      </section>
      <section>
        <UiSectionTitle title="TOUR DATES" />
        <HomeTourDate />
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
  margin-bottom: 48px;
}

.home__video-section {
  display: flex;
  justify-content: space-between;
}
</style>
