<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <section id="about" class="scroll-mt-20 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
            About Us
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering reliability for
            <span class="text-brand-gradient">mission-critical environments</span>
          </h2>
          <div class="mt-6 space-y-4 text-muted-foreground">
            <p v-for="(para, i) in company.about" :key="i">{{ para }}</p>
          </div>
        </div>

        <div class="rounded-2xl border bg-brand-gradient-soft bg-card p-8">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
            What Do We Do?
          </p>
          <h3 class="mt-2 text-2xl font-bold tracking-tight">
            Your trusted end-to-end solution provider
          </h3>
          <div class="mt-5 space-y-4 text-muted-foreground">
            <p v-for="(para, i) in company.whatWeDo" :key="i">{{ para }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
