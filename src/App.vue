<script setup>
import InflatableCardStage from '@/components/inflatable-card/InflatableCardStage.vue';
import PhotoCard from '@/components/photo-card/PhotoCard.vue';
</script>

<template>
  <InflatableCardStage>
    <div class="photo-cards">
      <PhotoCard
        src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
      />
      <PhotoCard src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg" />
      <PhotoCard src="https://wallpapers.microsoft.design/images/wallpapers.jpg" />
      <PhotoCard
        src="https://www.ytechb.com/wp-content/uploads/2022/08/Windows-365-Wallpapers.webp"
      />
      <PhotoCard
        src="https://www.pixelstalk.net/wp-content/uploads/images6/3D-Wallpaper-Desktop.jpg"
      />
      <PhotoCard
        src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
      />
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
