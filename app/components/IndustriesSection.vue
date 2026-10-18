<script setup lang="ts">
import { Database, Monitor, Landmark, Hotel, HeartPulse, Factory, Warehouse, Building2, SunMedium, GraduationCap } from '@lucide/vue'

import { industries } from '~/data/company'

const icons: Record<string, any> = {
  'Data Centers': Database,
  'IT & ITeS': Monitor,
  'Banking & Financial Services': Landmark,
  'Service & Hospitality': Hotel,
  'Healthcare': HeartPulse,
  'Manufacturing': Factory,
  'Warehousing & Logistics': Warehouse,
  'Commercial Buildings': Building2,
  'Solar Industries': SunMedium,
  'Education & Research': GraduationCap
}
</script>

<template>
  <section id="industries" class="scroll-mt-20 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Industries We Serve
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted across <span class="text-brand-gradient">10+ sectors</span>
        </h2>
      </div>

      <ul class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <li
          v-for="industry in industries"
          :key="industry"
          class="group flex flex-col items-center gap-3 rounded-2xl border bg-card px-4 py-7 text-center transition-all hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-md"
        >
          <span class="flex size-12 items-center justify-center rounded-xl bg-brand-gradient-soft bg-card text-brand-green-dark transition-colors group-hover:bg-brand-gradient group-hover:text-white dark:text-brand-lime">
            <component :is="icons[industry]" class="size-6" />
          </span>
          <span class="text-sm font-medium">{{ industry }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
