<template>
  <div class="inflatable-card">
    <div class="inflatable-card__deflated-content" @click="onInflate" ref="deflatedContent">
      <slot name="deflated" />
    </div>
    <transition name="inflate" :duration="400">
      <div v-if="inflate" class="inflatable-card__inflated-content" @click="onDeflate" ref="inflatedContent">
        <div class="inflatable-card__inflated-inner-content">
          <slot name="inflated" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inflate = ref(false);
const deflatedContent = ref();
const inflatedContent = ref();
const deflatedContentWidth = ref();
const deflatedContentHeight = ref();

const inflatedContentWidth = computed(() => {
  if (deflatedContentWidth.value) {
    return `${deflatedContentWidth.value}px`;
  }
  return '100%';
});

const inflatedContentHeight = computed(() => {
  if (deflatedContentHeight.value) {
    return `${deflatedContentHeight.value}px`;
  }
  return '100%';
});

const inflatedPosition = computed(() => {
  const element = deflatedContent.value;
  if (element) {
    return {
      top: `${element.offsetTop}px`,
      left: `${element.offsetLeft}px`
    };
  }
  return {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  };
});

function onInflate() {
  inflate.value = true;
  deflatedContentWidth.value = deflatedContent.value?.clientWidth;
  deflatedContentHeight.value = deflatedContent.value?.clientHeight;
}

function onDeflate() {
  inflate.value = false;
}
</script>

<style lang="scss" scoped>
.inflatable-card {
  $inflate-transition-duration: 300ms;
  $inflate-inner-transition-duration: 100ms;

  &__deflated-content, &__inflated-content {
    background-color: var(--color-primary);
    color: white;
  }
  
  &__deflated-content {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    transition: transform 200ms ease;
    
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
    
    &:active {
      transform: scale(1);
    }
  }

  &__inflated-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    right:0;
    left:0;
    bottom:0;
    border-radius: 0;
  }

  // TODO - bad naming here
  &__inflated-inner-content {
    height: 100%;
    width: 100%;
  }

  .inflate-enter-from, .inflate-leave-to {
    border-radius: 5px;
    width: v-bind(inflatedContentWidth);
    height: v-bind(inflatedContentHeight);
    top: calc(v-bind('inflatedPosition.top') );
    left: calc(v-bind('inflatedPosition.left') );

    .inflatable-card__inflated-inner-content {
      opacity: 0;
    }
  }

  .inflate-enter-active, .inflate-leave-active {
    transition: all $inflate-transition-duration ease;

    .inflatable-card__inflated-inner-content {
      // TODO: Remove the transition here and try to get the "reveal" effect
      transition: all $inflate-inner-transition-duration ease;
    }
  }

  .inflate-enter-active {
    .inflatable-card__inflated-inner-content {
      transition-delay: $inflate-transition-duration;
    }
  }

  .inflate-leave-active {
    transition-delay: $inflate-inner-transition-duration;
  }
}
</style>