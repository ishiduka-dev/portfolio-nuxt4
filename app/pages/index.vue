<template>
  <div class="home">
    <HomeHeroImage />
    <div class="home__info">
      <section id="latest-release">
        <UiSectionTitle title="LATEST RELEASE" />
        <HomeLatestRelease />
      </section>
      <section id="music-video">
        <UiSectionTitle title="MUSIC VIDEOS" />
        <HomeMusicVideo />
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
</style>
