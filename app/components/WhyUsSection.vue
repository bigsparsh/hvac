<script setup lang="ts">
import { whyUs } from '~/data/company'
import { Award, BadgeCheck, Users, Workflow, ShieldCheck, Leaf, Headphones } from '@lucide/vue'

const reasonIcons = [BadgeCheck, Users, Workflow, ShieldCheck, Leaf, Headphones]
</script>

<template>
  <section id="why-us" class="scroll-mt-20 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl">
          <Award class="size-3 text-brand-green" />
          Why Thermosync JMK?
        </div>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Built for <span class="text-brand-gradient">uptime, efficiency &amp; value</span>
        </h2>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal
          v-for="(reason, i) in whyUs"
          :key="reason.title"
          :delay="i * 80"
          direction="scale"
          class="h-full"
        >
          <SpotlightCard class="h-full p-7">
            <div class="flex items-start gap-3">
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient on-gradient shadow-lg shadow-brand-green/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              >
                <component :is="reasonIcons[i]" class="size-6" />
              </span>
              <div>
                <span class="text-xs font-bold text-brand-gradient">{{ String(i + 1).padStart(2, '0') }}</span>
                <h3 class="text-lg font-semibold">{{ reason.title }}</h3>
              </div>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-muted-foreground">{{ reason.body }}</p>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
