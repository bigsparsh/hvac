<script setup lang="ts">
import { company, contacts, address } from '~/data/company'
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-brand-green opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-brand-green" />
          </span>
          Engineering solutions for mission-critical environments
        </p>

        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
          Power &amp; Cooling Services
          <span class="block text-brand-gradient">For Critical Spaces</span>
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-muted-foreground">
          {{ company.legalName }} — end-to-end critical power, precision cooling, data center
          infrastructure, and HVAC solutions, from design through commissioning and after-sales support.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as-child size="lg" class="w-full bg-brand-gradient sm:w-auto">
            <a href="#contact">
              Get a Free Consultation
              <ArrowRight class="ml-2 size-4" />
            </a>
          </Button>
          <Button as-child size="lg" variant="outline" class="w-full sm:w-auto">
            <a href="#services">Explore Our Services</a>
          </Button>
        </div>
      </div>

      <dl class="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div
          v-for="stat in [
            { value: '7+', label: 'Major Projects Delivered' },
            { value: '5', label: 'Technology Partners' },
            { value: '10+', label: 'Industries Served' },
            { value: '24/7', label: 'Support Network' }
          ]"
          :key="stat.label"
          class="rounded-2xl border bg-card/60 p-6 text-center backdrop-blur"
        >
          <dd class="text-3xl font-bold text-brand-gradient sm:text-4xl">{{ stat.value }}</dd>
          <dt class="mt-1 text-sm text-muted-foreground">{{ stat.label }}</dt>
        </div>
      </dl>
    </div>
  </section>
</template>
