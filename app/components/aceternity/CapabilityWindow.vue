<script setup lang="ts">
/**
 * A small "work window" — the frame the capability scene plays inside.
 * Deliberately app-like: a title bar with the capability name, the live
 * scene, and a status line so the visitor can read what is happening.
 */
interface Props {
  /** Scene key passed through to CapabilityScene. */
  scene: string
  /** Capability name shown in the window title bar. */
  label: string
  /** Short line describing the work in progress. */
  status: string
  class?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl border bg-card shadow-xl shadow-black/5"
    :class="$props.class"
  >
    <!-- title bar -->
    <div class="flex items-center gap-2 border-b bg-muted/60 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-red-400/70" />
      <span class="size-2.5 rounded-full bg-amber-400/70" />
      <span class="size-2.5 rounded-full bg-emerald-400/70" />
      <span class="ml-2 truncate text-xs font-semibold tracking-wide text-foreground">
        {{ label }}
      </span>
      <span
        class="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-gradient-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-lime"
      >
        <span class="size-1.5 animate-pulse rounded-full bg-current" />
        in progress
      </span>
    </div>

    <!-- the scene: re-created on every change so its animation replays -->
    <div class="relative aspect-[8/5] max-h-[42vh] w-full overflow-hidden">
      <CapabilityScene :key="scene" :scene="scene" class="scene-in p-4" />
    </div>

    <!-- status line -->
    <div class="flex items-center gap-3 border-t px-4 py-3">
      <p class="truncate text-xs text-muted-foreground">{{ status }}</p>
      <span class="ml-auto shrink-0 font-mono text-[10px] text-muted-foreground/70">
        {{ scene }}
      </span>
    </div>

    <!-- progress -->
    <div class="h-1 w-full overflow-hidden bg-muted">
      <div class="progress h-full w-1/3 bg-brand-gradient" />
    </div>
  </div>
</template>

<style scoped>
.progress {
  animation: progress 2.4s ease-in-out infinite;
}

@keyframes progress {
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(400%);
  }
}

.scene-in {
  animation: scene-in 0.45s ease-out both;
}

@keyframes scene-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem) scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
