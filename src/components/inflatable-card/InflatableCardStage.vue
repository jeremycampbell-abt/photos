<template>
  <div class="inflatable-card-stage">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.inflatable-card-stage {
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: start;
}
</style>
