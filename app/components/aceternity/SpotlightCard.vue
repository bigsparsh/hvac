<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

interface Props {
  /** Overlay an animated brand-gradient border beam. */
  beam?: boolean
}

defineProps<Props>()

const cardRef = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside } = useMouseInElement(cardRef)

const spotlightStyle = computed(() => {
  if (isOutside.value) {
    return { opacity: 0 }
  }
  return {
    opacity: 1,
    background: `radial-gradient(600px circle at ${elementX.value}px ${elementY.value}px, rgba(144, 194, 38, 0.15), transparent 40%)`
  }
})
</script>

<template>
  <div
    ref="cardRef"
    class="group relative h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl"
  >
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
      :style="spotlightStyle"
    />
    <BorderBeam v-if="beam" :duration="5" />
    <div class="relative z-10 h-full">
      <slot />
    </div>
  </div>
</template>
