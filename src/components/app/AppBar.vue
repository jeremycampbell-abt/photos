<template>
  <div class="app-bar">
    <h1 class="app-bar__title">Photos</h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-bar {
  height: var(--app-bar-height);
  background-color: var(--color-primary);
  padding-inline: 1rem;
  position: sticky;

  &__title {
    display: flex;
    height: 100%;
    align-items: center;
    color: white;
    font-weight: 700;
  }
}
</style>
