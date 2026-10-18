<script setup lang="ts">
import { whyUs } from '~/data/company'
</script>

<template>
  <section id="why-us" class="scroll-mt-20 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Why Thermosync JMK?
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Built for <span class="text-brand-gradient">uptime, efficiency &amp; value</span>
        </h2>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(reason, i) in whyUs"
          :key="reason.title"
          class="rounded-2xl border bg-card p-7 transition-shadow hover:shadow-lg"
        >
          <div class="flex items-center gap-3">
            <span class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-lg font-semibold">{{ reason.title }}</h3>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">{{ reason.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
