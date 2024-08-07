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
    <Transition name="inflate" :duration="600" @after-leave="afterDeflate">
      <div
        v-if="inflate"
        class="inflatable-card__inflated-content"
        :class="{ 'inflatable-card__inflated-content--fade': props.innerFade }"
        ref="inflatedContent"
      >
        <div
          class="inflatable-card__inflated-card"
          :class="{ 'inflatable-card__inflated-card--fade': props.innerFade }"
        >
          <div
            class="inflatable-card__inflated-card-content"
            :class="{ 'inflatable-card__inflated-card-content--fade': props.innerFade }"
          >
            <slot name="inflated" />
          </div>
        </div>
        <div class="inflatable-card__scrim" @click="onDeflate" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inflate = defineModel('inflate', {
  type: Boolean,
});

const props = defineProps({
  innerFade: {
    type: Boolean,
  },
});

const emit = defineEmits(['deflated']);

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

function afterDeflate() {
  deflated.value = true;
  emit('deflated');
}
</script>

<style lang="scss">
.inflatable-card {
  --deflated-background-color: white;
  --inflated-background-color: var(--color-neutral-light);
}
</style>

<style lang="scss" scoped>
.inflatable-card {
  $inflate-transition-duration: 400ms;
  $inflate-inner-transition-duration: 200ms;

  &__deflated-content {
    width: 100%;
    transition: transform 200ms ease;
    background-color: var(--deflated-background-color);

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
    max-width: 100%;
    max-height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__inflated-card {
    background-color: var(--inflated-background-color);
    max-height: var(--app-content-height);
    max-width: 100%; // probably need to make this less than 100%
    box-shadow: 0px 10px 20px -6px rgba(94, 94, 94, 0.75);
    z-index: 101;
    border-radius: 5px;
  }

  &__scrim {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(94, 94, 94, 0.3);
    z-index: 100;
  }

  .inflate-enter-from,
  .inflate-leave-to {
    // TODO: Try to change this to a scale transition?
    // TODO: Stagger the animation here - position first, then width and height
    max-width: v-bind(inflatedContentWidth);
    max-height: v-bind(inflatedContentHeight);
    top: calc(v-bind('inflatedPosition.top'));
    left: calc(v-bind('inflatedPosition.left'));

    .inflatable-card__inflated-card {
      max-width: v-bind(inflatedContentWidth);
      max-height: v-bind(inflatedContentHeight);
      border-radius: 0px;
    }

    .inflatable-card__inflated-card--fade {
      background-color: var(--deflated-background-color);
    }

    .inflatable-card__inflated-card-content--fade,
    .inflatable-card__scrim {
      opacity: 0;
    }
  }

  .inflate-enter-active,
  .inflate-leave-active {
    transition: all $inflate-transition-duration ease;
    overflow: hidden;

    .inflatable-card__inflated-card {
      transition:
        border-radius $inflate-transition-duration ease,
        max-width $inflate-transition-duration ease,
        max-height $inflate-transition-duration ease;
    }

    .inflatable-card__inflated-card--fade {
      transition:
        border-radius $inflate-transition-duration ease,
        max-width $inflate-transition-duration ease,
        max-height $inflate-transition-duration ease,
        background-color $inflate-transition-duration ease;
    }

    .inflatable-card__inflated-card-content--fade {
      // TODO: Remove the transition here and try to get the "reveal" effect
      transition:
        opacity $inflate-inner-transition-duration ease,
        background-color $inflate-inner-transition-duration ease;
    }

    .inflatable-card__scrim {
      transition: opacity $inflate-transition-duration ease;
    }
  }

  .inflate-enter-active {
    .inflatable-card__inflated-card-content--fade {
      transition-delay: $inflate-transition-duration;
    }
  }

  .inflate-leave-active.inflatable-card__inflated-content--fade {
    transition-delay: $inflate-inner-transition-duration;

    .inflatable-card__inflated-card {
      transition-delay: $inflate-inner-transition-duration;
    }
  }
}
</style>
