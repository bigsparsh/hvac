<script setup lang="ts">
import { coreBusiness } from '~/data/company'
import { Zap, Snowflake, Server, Wind, Wrench, Layers } from '@lucide/vue'

const icons = [Zap, Snowflake, Server, Wind, Wrench]
</script>

<template>
  <section id="services" class="scroll-mt-20 border-y bg-muted/40 py-24 relative overflow-hidden">
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl">
          <Layers class="size-3 text-brand-green" />
          Our Core Business
        </div>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Five pillars of <span class="text-brand-gradient">critical infrastructure</span>
        </h2>
      </div>

      <BentoGrid class="mt-14">
        <ScrollReveal
          v-for="(area, i) in coreBusiness"
          :key="area.title"
          :delay="i * 100"
          class="h-full"
          :class="i === 0 ? 'md:col-span-2' : ''"
        >
          <BentoGridItem
            class="h-full"
            :title="area.title"
            :description="area.items.slice(0, 3).join(' • ') + (area.items.length > 3 ? ' • ...' : '')"
            :icon="icons[i]"
          >
            <li
              v-for="item in area.items"
              :key="item"
              class="rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm transition-colors group-hover/bento:border-brand-green/40 group-hover/bento:text-foreground"
            >
              {{ item }}
            </li>
          </BentoGridItem>
        </ScrollReveal>
      </BentoGrid>
    </div>
  </section>
</template>
