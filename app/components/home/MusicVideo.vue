<script setup lang="ts">
const videoIdList = [
  { id: 'IcrbM1l_BoI', title: 'Wake Me Up' },
  { id: 'cHHLHGNpCSA', title: 'Waiting For Love' },
  { id: 'UtF6Jej8yb4', title: 'The Nights' }
]
</script>

<template>
  <ClientOnly>
    <div class="music-video">
      <UiYouTubePlayer
        v-for="video in videoIdList"
        :key="video.id"
        :video-id="video.id"
        :title="video.title"
        class="music-video__content"
      />
    </div>
  </ClientOnly>
</template>

<style lang="css" scoped>
.music-video {
  display: flex;
  justify-content: space-between;
}
</style>
