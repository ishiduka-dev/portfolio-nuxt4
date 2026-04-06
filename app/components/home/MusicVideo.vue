<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const { isTablet } = useBreakpoint()

const videoIdList = [
  { id: 'IcrbM1l_BoI', title: 'Wake Me Up' },
  { id: 'cHHLHGNpCSA', title: 'Waiting For Love' },
  { id: 'UtF6Jej8yb4', title: 'The Nights' }
]
</script>

<template>
  <ClientOnly>
    <!-- SP: Swiper -->
    <Swiper
      v-if="isTablet"
      :slides-per-view="1"
      :loop="true"
      :modules="[Navigation]"
      navigation
    >
      <SwiperSlide v-for="video in videoIdList" :key="video.id">
        <UiYouTubePlayer
          :video-id="video.id"
          :title="video.title"
          class="music-video__content"
        />
      </SwiperSlide>
    </Swiper>

    <!-- PC: Grid -->
    <div v-else class="music-video">
      <UiYouTubePlayer
        v-for="video in videoIdList"
        :key="video.id"
        :video-id="video.id"
        :title="video.title"
      />
    </div>
  </ClientOnly>
</template>

<style lang="css" scoped>
.music-video {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
