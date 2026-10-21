<script setup lang="ts">
import {
  Database,
  Monitor,
  Landmark,
  Hotel,
  HeartPulse,
  Factory,
  Warehouse,
  Building2,
  SunMedium,
  GraduationCap,
  Layers,
  ArrowUpRight
} from '@lucide/vue'

import { industries } from '~/data/company'

const icons: Record<string, any> = {
  'Data Centers': Database,
  'IT & ITeS': Monitor,
  'Banking & Financial Services': Landmark,
  'Service & Hospitality': Hotel,
  Healthcare: HeartPulse,
  Manufacturing: Factory,
  'Warehousing & Logistics': Warehouse,
  'Commercial Buildings': Building2,
  'Solar Industries': SunMedium,
  'Education & Research': GraduationCap
}

/** Two anchor sectors get the full spotlight treatment, the rest are tiles. */
const featured = computed(() => industries.filter(i => i.featured))
const sectors = computed(() => industries.filter(i => !i.featured))
</script>

<template>
  <section id="industries" class="relative scroll-mt-20 overflow-hidden py-24">
    <!-- soft brand glow so the section is not a flat block of white -->
    <div
      class="pointer-events-none absolute -top-28 left-[10%] size-72 rounded-full bg-brand-green/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-32 right-[6%] size-80 rounded-full bg-brand-teal/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl">
          <Layers class="size-3 text-brand-green" />
          Industries We Serve
        </div>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted across <span class="text-brand-gradient">10+ sectors</span>
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          From mission-critical data halls to campus comfort — the same engineering discipline,
          the same single point of accountability.
        </p>
      </div>

      <!-- anchor sectors -->
      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <ScrollReveal
          v-for="(industry, i) in featured"
          :key="industry.name"
          :delay="i * 120"
          direction="up"
          class="h-full"
        >
          <SpotlightCard beam class="h-full">
            <div class="flex h-full flex-col p-5 sm:p-7">
              <div class="flex items-start justify-between gap-4">
                <span class="flex size-14 items-center justify-center rounded-2xl bg-brand-gradient on-gradient shadow-lg shadow-brand-green/20">
                  <component :is="icons[industry.name]" class="size-7" />
                </span>
                <ArrowUpRight
                  class="size-6 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-green"
                />
              </div>

              <h3 class="mt-6 text-xl font-bold tracking-tight">
                {{ industry.name }}
              </h3>
              <p class="mt-2 text-sm text-muted-foreground">
                {{ industry.description }}
              </p>

              <ul class="mt-5 flex flex-wrap gap-2">
                <li
                  v-for="tag in industry.tags"
                  :key="tag"
                  class="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>

      <!-- the wider sector board -->
      <ul class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ScrollReveal
          v-for="(industry, i) in sectors"
          :key="industry.name"
          as="li"
          :delay="(i % 4) * 90"
          direction="scale"
          class="h-full"
        >
          <article
            class="group relative h-full overflow-hidden rounded-2xl border bg-card p-4 transition-all duration-300 sm:p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/5"
          >
            <!-- the card fills with the brand gradient on hover -->
            <div
              class="pointer-events-none absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div class="relative z-10 flex h-full gap-4 sm:block">
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card bg-brand-gradient-soft text-brand-green-dark transition-colors duration-300 group-hover:bg-white/25 group-hover:text-[var(--on-gradient)] dark:text-brand-lime"
              >
                <component :is="icons[industry.name]" class="size-5" />
              </span>

              <div class="min-w-0 flex-1">
                <h3 class="font-semibold leading-tight transition-colors duration-300 group-hover:text-[var(--on-gradient)]">
                  {{ industry.name }}
                </h3>
                <p class="mt-2 text-[13px] text-muted-foreground transition-colors duration-300 group-hover:text-[var(--on-gradient-muted)] sm:text-sm">
                  {{ industry.description }}
                </p>

                <ul class="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                  <li
                    v-for="tag in industry.tags"
                    :key="tag"
                    class="rounded-full border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-[var(--on-gradient)]"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </ul>
    </div>
  </section>
</template>
