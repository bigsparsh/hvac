<script setup lang="ts">
import { coreBusiness } from '~/data/company'
import { Zap, Snowflake, Server, Wind, Wrench } from '@lucide/vue'

const icons: Record<string, any> = {
  zap: Zap,
  snowflake: Snowflake,
  server: Server,
  wind: Wind,
  wrench: Wrench
}
</script>

<template>
  <section id="services" class="scroll-mt-20 border-y bg-muted/40 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Our Core Business
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Five pillars of <span class="text-brand-gradient">critical infrastructure</span>
        </h2>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(area, i) in coreBusiness"
          :key="area.title"
          class="group relative overflow-hidden rounded-2xl border bg-card p-7 transition-shadow hover:shadow-lg"
          :class="i === 0 ? 'lg:col-span-2' : ''"
        >
          <div class="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand-gradient opacity-10 transition-opacity group-hover:opacity-20" />

          <div class="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
            <component :is="icons[area.icon]" class="size-6" />
          </div>
          <h3 class="mt-5 text-xl font-semibold">{{ area.title }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="item in area.items"
              :key="item"
              class="rounded-full border bg-muted/60 px-3 py-1 text-sm text-muted-foreground"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
