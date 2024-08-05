<template>
  <InflatableCard class="photo-card">
    <template #deflated>
      <div class="photo-card__deflated-content">
        <div class="photo-card__deflated-image" />
      </div>
    </template>
    <template #inflated>
      <div class="photo-card__inflated-content">
        <div class="photo-card__inflated-image" :style="{ backgroundImage: props.src }" />
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

const cssUrl = `url(${props.src})`;
</script>

<style lang="scss">
.photo-card {
  --inflatable-card-background-color: transparent;

  .inflatable-card {
    &__deflated-content,
    &__inflated-content {
      background-image: v-bind(cssUrl);
      background-position: center;
      background-repeat: no-repeat;
    }

    &__deflated-content {
      background-size: contain;
    }

    &__inflated-content {
      background-size: contain;
    }
  }
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
    height: 200px;
  }

  &__deflated-image,
  &__inflated-image {
    width: 100%;
    height: 100%;
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
