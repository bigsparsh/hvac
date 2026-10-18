<script setup lang="ts">
const colorMode = useColorMode()
const open = ref(false)

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (v: boolean) => { colorMode.value = v ? 'dark' : 'light' }
})

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#partners' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="#" class="flex items-center gap-2.5">
        <img src="/logo.png" alt="Thermosync logo" class="h-9 w-auto">
        <span class="text-xl font-bold tracking-tight">Thermosync</span>
      </a>

      <nav class="hidden items-center gap-6 lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="isDark = !isDark"
        >
          <Sun v-if="isDark" class="size-5" />
          <Moon v-else class="size-5" />
        </Button>

        <Button as-child class="hidden bg-brand-gradient sm:inline-flex">
          <a href="#contact">Get a Free Consultation</a>
        </Button>

        <Button variant="ghost" size="icon" class="lg:hidden" aria-label="Toggle menu" @click="open = !open">
          <X v-if="open" class="size-5" />
          <Menu v-else class="size-5" />
        </Button>
      </div>
    </div>

    <nav v-if="open" class="border-t px-4 pb-4 lg:hidden">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        @click="open = false"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
