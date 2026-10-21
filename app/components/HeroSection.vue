<script setup lang="ts">
import { company } from '~/data/company'

const stats = [
  { value: '7+', label: 'Major Projects Delivered' },
  { value: '5', label: 'Technology Partners' },
  { value: '10+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Network' }
]
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32">
    <AuroraBackground class="absolute inset-0" />
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-4xl text-center">
        <div class="relative mb-6 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl">
          <BorderBeam :duration="6" />
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-brand-green opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-brand-green" />
          </span>
          Engineering solutions for mission-critical environments
        </div>

        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <TextReveal text="Power & Cooling Services" class="justify-center" />
          <span class="block text-brand-gradient mt-2">For Critical Spaces</span>
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
          {{ company.legalName }} — end-to-end critical power, precision cooling, data center
          infrastructure, and HVAC solutions, from design through commissioning and after-sales support.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            as-child
            size="lg"
            class="btn-shine w-full bg-brand-gradient on-gradient transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-green/30 sm:w-auto"
          >
            <a href="#contact">Get a Free Consultation</a>
          </Button>
          <Button
            as-child
            size="lg"
            variant="outline"
            class="w-full border-brand-green/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-green hover:bg-brand-gradient-soft sm:w-auto"
          >
            <a href="#services">Explore Our Services</a>
          </Button>
        </div>
      </div>

      <dl class="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <ScrollReveal v-for="(stat, i) in stats" :key="stat.label" :delay="i * 90" class="h-full">
          <div
            class="group relative h-full overflow-hidden rounded-2xl border bg-card/70 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-green/40 hover:shadow-lg"
          >
            <div
              class="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-5"
              aria-hidden="true"
            />
            <div class="relative">
              <dd class="text-3xl font-bold text-brand-gradient sm:text-4xl">{{ stat.value }}</dd>
              <dt class="mt-1 text-sm text-muted-foreground">{{ stat.label }}</dt>
            </div>
          </div>
        </ScrollReveal>
      </dl>
    </div>
  </section>
</template>
