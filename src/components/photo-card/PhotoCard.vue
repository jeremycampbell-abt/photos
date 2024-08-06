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
    max-width: 100%;
    object-fit: contain;
  }

  &__deflated-image {
    max-height: 200px;
  }

  &__inflated-image {
    max-height: 98dvh;
  }

  &__inflated-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
  }

  &__cancel {
    color: var(--color-secondary);
  }
}
</style>
