<script setup>
import { useSessionStorage } from '@vueuse/core';
import InflatableCardStage from '@/components/inflatable-card/InflatableCardStage.vue';
import PhotoCard from '@/components/photo-card/PhotoCard.vue';
import AddPhotoCard from '@/components/add-photo-card/AddPhotoCard.vue';
import AppBar from '@/components/app/AppBar.vue';

const images = useSessionStorage('images', []);

function addImages(imageUrls) {
  images.value.push(...imageUrls);
}
</script>

<template>
  <AppBar />

  <InflatableCardStage>
    <div class="photo-cards">
      <AddPhotoCard @add-images="addImages" />
      <PhotoCard v-for="image in images" :key="image" :src="image" />
    </div>
  </InflatableCardStage>
</template>

<style lang="scss" scoped>
.photo-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 1920px;
  padding: 2rem;
}
</style>
