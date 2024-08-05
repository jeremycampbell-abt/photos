<script setup>
import InflatableCardStage from '@/components/inflatable-card/InflatableCardStage.vue';
import PhotoCard from '@/components/photo-card/PhotoCard.vue';

const stageStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
</script>

<template>
  <div :style="{ width: '100%', height: '100%' }">
    <InflatableCardStage :style="stageStyle">
      <PhotoCard
        src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
        :style="{ width: '20rem' }"
      />
      <PhotoCard
        src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
        :style="{ width: '20rem' }"
      />
      <PhotoCard
        src="https://wallpapers.microsoft.design/images/wallpapers.jpg"
        :style="{ width: '20rem' }"
      />
      <PhotoCard
        src="https://www.ytechb.com/wp-content/uploads/2022/08/Windows-365-Wallpapers.webp"
        :style="{ width: '20rem' }"
      />
      <PhotoCard
        src="https://www.pixelstalk.net/wp-content/uploads/images6/3D-Wallpaper-Desktop.jpg"
        :style="{ width: '20rem' }"
      />
      <PhotoCard
        src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
        :style="{ width: '20rem' }"
      />
    </InflatableCardStage>
  </div>
</template>

<style scoped></style>
