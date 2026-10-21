<script setup lang="ts">
import { cn } from 'cn'

interface Props {
  /** Seconds for one full cycle. */
  duration?: number
  pauseOnHover?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), { duration: 35, pauseOnHover: true })
</script>

<template>
  <div :class="cn('group relative overflow-hidden', props.class)">
    <!-- Edge fades so content appears to enter/leave the viewport -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent sm:w-24"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent sm:w-24"
      aria-hidden="true"
    />

    <!--
      Two identical copies, each with a trailing gap equal to the inter-item
      gap, so translating the track by -50% lands seamlessly.
    -->
    <div
      class="marquee-track flex w-max"
      :class="pauseOnHover && 'group-hover:[animation-play-state:paused]'"
      :style="{ '--marquee-duration': `${duration}s` }"
    >
      <div class="flex shrink-0 items-center gap-5 pr-5">
        <slot />
      </div>
      <div class="flex shrink-0 items-center gap-5 pr-5" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  animation: marquee-scroll var(--marquee-duration, 35s) linear infinite;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
