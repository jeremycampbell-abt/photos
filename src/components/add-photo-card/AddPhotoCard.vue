<template>
  <InflatableCard v-model:inflate="inflate" class="add-photo-card" inner-fade>
    <template #deflated>
      <div class="add-photo-card__deflated-content">
        <span> + </span>
      </div>
    </template>
    <template #inflated>
      <div class="add-photo-card__inflated-content">
        <div class="add-photo-card__form">
          <div class="add-photo-card__form-title">Add images</div>
          <textarea v-model="textAreaModel" placeholder="Urls" rows="10" />
          <button @click="addImages">Add</button>
        </div>
      </div>
    </template>
  </InflatableCard>
</template>

<script setup>
import { ref } from 'vue';
import InflatableCard from '@/components/inflatable-card';

const emit = defineEmits(['addImages']);

const textAreaModel = ref('');
const inflate = ref(false);

function addImages() {
  emit(
    'addImages',
    textAreaModel.value.split('\n').filter((str) => str.trim()),
  );
  inflate.value = false;
}
</script>

<style lang="scss" scoped>
.add-photo-card {
  --deflated-background-color: var(--color-neutral-light);
  --inflated-background-color: white;

  &__deflated-content {
    font-size: 3rem;
    line-height: 3.2rem;
    color: var(--color-neutral);
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__inflated-content {
    color: var(--color-neutral);
    min-height: 200px;
    min-width: 200px;
    padding: 0.5rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__form-title {
    font-size: 3rem;
    font-weight: 600;
  }
}
</style>
