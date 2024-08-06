<template>
  <InflatableCard class="photo-card">
    <template #deflated>
      <div class="photo-card__deflated-content">
        <img class="photo-card__deflated-image" :src="props.src" />
      </div>
    </template>
    <template #inflated>
      <div class="photo-card__inflated-content">
        <img class="photo-card__inflated-image" :src="props.src" />
      </div>
    </template>
  </InflatableCard>
</template>

<script setup>
import InflatableCard from '@/components/inflatable-card';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.photo-card {
  --inflatable-card-background-color: transparent;
}
</style>

<style lang="scss" scoped>
.photo-card {
  &__deflated-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__deflated-image,
  &__inflated-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__deflated-image {
    max-height: 200px;
  }

  &__inflated-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    height: 100%;
  }

  &__cancel {
    color: var(--color-secondary);
  }
}
</style>
