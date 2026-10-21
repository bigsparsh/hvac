<script setup lang="ts">
/** Thin gradient reading-progress bar, pinned to the bottom edge of the header. */
const progress = ref(0)

function update() {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? (doc.scrollTop / max) * 100 : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-muted/50"
    aria-hidden="true"
  >
    <div
      class="h-full bg-brand-gradient transition-[width] duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
