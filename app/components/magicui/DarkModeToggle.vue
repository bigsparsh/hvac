<script setup lang="ts">
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (v: boolean) => {
    const next = v ? 'dark' : 'light'
    // `preference` is the persisted value: the color-mode module watches it,
    // writes it to localStorage and re-applies it on every route change
    // (its router `afterEach` hook resets `value` back to `preference`).
    // Setting `value` alone would therefore snap back to the configured
    // preference as soon as a nav link is clicked.
    colorMode.preference = next
    colorMode.value = next
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="group relative overflow-hidden rounded-full transition-all duration-300 hover:bg-accent/80"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <div class="relative flex items-center justify-center">
      <FontAwesomeIcon
        :icon="['fas', 'sun']"
        class="absolute size-5 rotate-0 scale-100 transition-all duration-500 ease-out group-hover:scale-110 dark:-rotate-90 dark:scale-0"
      />
      <FontAwesomeIcon
        :icon="['fas', 'moon']"
        class="absolute size-5 rotate-90 scale-0 transition-all duration-500 ease-out group-hover:scale-110 dark:rotate-0 dark:scale-100"
      />
    </div>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
