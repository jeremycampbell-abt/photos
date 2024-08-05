<script setup>
import InflatableCardStage from '@/components/inflatable-card/InflatableCardStage.vue';
import PhotoCard from '@/components/photo-card/PhotoCard.vue';

const stageStyle = {
  height: '600px',
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
  <div :style="{ width: '100%' }">
    <InflatableCardStage :style="stageStyle">
      <PhotoCard :style="{ width: '20rem' }" />
      <PhotoCard :style="{ width: '20rem' }" />
      <PhotoCard :style="{ width: '20rem' }" />
      <PhotoCard :style="{ width: '20rem' }" />
      <PhotoCard :style="{ width: '20rem' }" />
      <PhotoCard :style="{ width: '20rem' }" />
    </InflatableCardStage>
  </div>
</template>

<style scoped></style>
