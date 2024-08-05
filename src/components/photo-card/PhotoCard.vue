<template>
  <InflatableCard class="photo-card">
    <template #deflated>
      <div class="photo-card__deflated-content">
        <div class="photo-card__text">Hello</div>
        <div class="photo-card__cancel">X</div>
      </div>
    </template>
    <template #inflated>
      <div class="photo-card__inflated-content">
        <div class="photo-card__text">Hello</div>
        <div class="photo-card__cancel">X</div>
      </div>
    </template>
  </InflatableCard>
</template>

<script setup>
import InflatableCard from '@/components/inflatable-card';
</script>

<style lang="scss" scoped>
.photo-card {
  &__deflated-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__inflated-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    height: 100%;

    .photo-card__text {
      font-size: 6rem;
    }
  }

  &__cancel {
    color: var(--color-secondary);
  }
}
</style>
