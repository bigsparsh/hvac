<script setup lang="ts">
import { cn } from 'cn'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('relative flex flex-col items-center justify-center bg-background', props.class)">
    <div class="absolute inset-0 overflow-hidden">
      <!--
        Aurora bands in the Thermosync palette (lime green -> teal).
        Light mode multiplies over the background so the greens stay greens;
        dark mode screens so they glow. (Previously `invert` + `difference`
        pushed everything toward blue/violet complements.)
      -->
      <div
        class="aurora absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--brand-green-500)_10%,var(--brand-teal-400)_15%,var(--brand-green-300)_20%,var(--brand-teal-300)_25%,var(--brand-lime-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-multiply dark:[background-image:var(--dark-gradient),var(--aurora)] dark:after:mix-blend-screen dark:after:[background-image:var(--dark-gradient),var(--aurora)]"
      />
    </div>
    <slot />
  </div>
</template>

<style scoped>
@keyframes aurora {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

/* The animation lives on the ::after layer — target it directly since
   `after:animate-aurora` never worked (not a real Tailwind utility). */
.aurora::after {
  content: '';
  animation: aurora 60s linear infinite;
}

.aurora {
  /* Thermosync lime green -> teal band stops */
  --brand-green-500: #90c226;
  --brand-green-300: #8bc64a;
  --brand-lime-400: #a3d13c;
  --brand-teal-400: #0ea5a4;
  --brand-teal-300: #2dd4bf;
  --white-gradient: repeating-linear-gradient(100deg, #fff, #fff 7%, transparent 10%, transparent 12%, #fff 16%);
  --dark-gradient: repeating-linear-gradient(100deg, #000, #000 7%, transparent 10%, transparent 12%, #000 16%);
}

@media (prefers-reduced-motion: reduce) {
  .aurora::after {
    animation: none;
  }
}
</style>
