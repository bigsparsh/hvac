<script setup lang="ts">
import { cn } from 'cn'

interface Props {
  /** Seconds for one full orbit around the border. */
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), { duration: 4 })
</script>

<template>
  <div
    aria-hidden="true"
    :class="cn('pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]', props.class)"
  >
    <!--
      A 1px ring revealed through a mask, painted with a rotating conic
      gradient (brand green -> teal). The angle is a registered @property so
      it can animate (see main.css).
    -->
    <div
      class="beam absolute inset-0 rounded-[inherit]"
      :style="{ animationDuration: `${duration}s` }"
    />
  </div>
</template>

<style scoped>
.beam {
  padding: 1px;
  background: conic-gradient(
    from var(--beam-angle),
    transparent 0deg,
    transparent 295deg,
    #90c226 325deg,
    #0ea5a4 350deg,
    transparent 360deg
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation-name: beam-rotate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes beam-rotate {
  to {
    --beam-angle: 360deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .beam {
    animation: none;
  }
}
</style>
