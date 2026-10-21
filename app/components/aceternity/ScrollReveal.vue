<script setup lang="ts">
import { cn } from 'cn'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  /** Tag to render — use "li" inside ol/ul lists. */
  as?: string
  /** Stagger delay (ms) before the reveal animation starts. */
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  delay: 0,
  direction: 'up'
})

const el = ref<HTMLElement | null>(null)
const shown = ref(false)

const { stop } = useIntersectionObserver(
  el,
  ([entry]) => {
    if (entry?.isIntersecting) {
      shown.value = true
      stop()
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

onMounted(() => {
  // Reduced-motion users get the content immediately, with no animation.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
  }
})

const directionClass = computed(
  () =>
    ({ up: 'reveal-up', left: 'reveal-left', right: 'reveal-right', scale: 'reveal-scale' })[
      props.direction
    ]
)
</script>

<template>
  <!--
    Reveal uses a one-shot CSS animation (fill-mode: backwards) rather than a
    transition, so the stagger delay never bleeds into hover transitions on
    the same element, and hover transforms work normally once it has run.
  -->
  <component
    :is="as"
    ref="el"
    :class="
      cn(
        shown ? ['reveal-anim', directionClass] : 'reveal-pending',
        'transition-all duration-300 ease-out',
        props.class
      )
    "
    :style="shown ? { animationDelay: `${delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>

<style scoped>
.reveal-pending {
  opacity: 0;
}

.reveal-anim {
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: backwards;
}

.reveal-up.reveal-anim {
  animation-name: reveal-up;
}

.reveal-left.reveal-anim {
  animation-name: reveal-left;
}

.reveal-right.reveal-anim {
  animation-name: reveal-right;
}

.reveal-scale.reveal-anim {
  animation-name: reveal-scale;
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes reveal-left {
  from {
    opacity: 0;
    transform: translateX(-2.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes reveal-right {
  from {
    opacity: 0;
    transform: translateX(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes reveal-scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-anim {
    animation: none;
  }
}
</style>
