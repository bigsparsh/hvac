<script setup lang="ts">
const open = ref(false)

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
  <header class="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl backdrop-saturate-150">
    <ScrollProgress />
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="relative">
          <img src="/logo.png" alt="Thermosync logo" class="h-9 w-auto transition-transform duration-300 group-hover:scale-105">
          <div class="absolute -inset-1 rounded-lg bg-brand-gradient opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30" />
        </div>
        <span class="text-xl font-bold tracking-tight">Thermosync</span>
      </a>

      <nav class="hidden items-center gap-6 lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <DarkModeToggle />
        
        <Button as-child class="btn-shine hidden bg-brand-gradient on-gradient transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-green/30 sm:inline-flex">
          <a href="#contact">
            <FontAwesomeIcon :icon="['fas', 'paper-plane']" class="mr-2 size-4" />
            Get a Free Consultation
          </a>
        </Button>

        <Button variant="ghost" size="icon" class="lg:hidden" aria-label="Toggle menu" @click="open = !open">
          <FontAwesomeIcon :icon="open ? ['fas', 'xmark'] : ['fas', 'bars']" class="size-5" />
        </Button>
      </div>
    </div>

    <nav v-if="open" class="border-t px-4 pb-4 lg:hidden bg-background/95 backdrop-blur-xl">
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
