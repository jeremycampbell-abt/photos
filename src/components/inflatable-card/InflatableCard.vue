<template>
  <div class="inflatable-card">
    <div
      class="inflatable-card__deflated-content"
      :class="{ 'inflatable-card__deflated-content--hidden': !deflated }"
      @click="onInflate"
      ref="deflatedContent"
    >
      <slot name="deflated" />
    </div>
    <transition name="inflate" :duration="400" @after-leave="deflated = true">
      <div
        v-if="inflate"
        class="inflatable-card__inflated-content"
        @click="onDeflate"
        ref="inflatedContent"
      >
        <div
          class="inflatable-card__inflated-inner-content"
          :class="{ 'inflatable-card__inflated-inner-content--fade': props.innerFade }"
        >
          <slot name="inflated" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  innerFade: {
    type: Boolean,
  },
});

const inflate = ref(false);
const deflated = ref(true);
const deflatedContent = ref();
const inflatedContent = ref();
const deflatedContentWidth = ref();
const deflatedContentHeight = ref();
const inflatedContentWidth = ref('100%');
const inflatedContentHeight = ref('100%');

const defaultPosition = {
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
};
const inflatedPosition = ref(defaultPosition);

function setInflatedPositioning() {
  inflatedContentWidth.value = deflatedContentWidth.value
    ? `${deflatedContentWidth.value}px`
    : '100%';
  inflatedContentHeight.value = deflatedContentHeight.value
    ? `${deflatedContentHeight.value}px`
    : '100%';

  const element = deflatedContent.value;
  inflatedPosition.value = element
    ? {
        top: `${element.offsetTop}px`,
        left: `${element.offsetLeft}px`,
      }
    : defaultPosition;
}

function onInflate() {
  inflate.value = true;
  deflated.value = false;
  deflatedContentWidth.value = deflatedContent.value?.clientWidth;
  deflatedContentHeight.value = deflatedContent.value?.clientHeight;
  setInflatedPositioning();
}

function onDeflate() {
  inflate.value = false;
}
</script>

<style lang="scss">
.inflatable-card {
  --inflatable-card-background-color: var(--color-neutral-light);
}
</style>

<style lang="scss" scoped>
.inflatable-card {
  $inflate-transition-duration: 300ms;
  $inflate-inner-transition-duration: 100ms;

  &__deflated-content,
  &__inflated-content {
    background-color: var(--inflatable-card-background-color);
    color: white;
    border-radius: 5px;
  }

  &__deflated-content {
    width: 100%;
    transition: transform 200ms ease;

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }

    &--hidden {
      opacity: 0;
    }
  }

  &__inflated-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  // TODO - bad naming here
  &__inflated-inner-content {
    height: 100%;
    width: 100%;
  }

  .inflate-enter-from,
  .inflate-leave-to {
    width: v-bind(inflatedContentWidth);
    height: v-bind(inflatedContentHeight);
    top: calc(v-bind('inflatedPosition.top'));
    left: calc(v-bind('inflatedPosition.left'));

    .inflatable-card__inflated-inner-content--fade {
      opacity: 0;
    }
  }

  .inflate-enter-active,
  .inflate-leave-active {
    transition: all $inflate-transition-duration ease;

    .inflatable-card__inflated-inner-content--fade {
      // TODO: Remove the transition here and try to get the "reveal" effect
      transition: all $inflate-inner-transition-duration ease;
    }
  }

  .inflate-enter-active {
    .inflatable-card__inflated-inner-content--fade {
      transition-delay: $inflate-transition-duration;
    }
  }

  .inflate-leave-active {
    transition-delay: $inflate-inner-transition-duration;
  }
}
</style>
