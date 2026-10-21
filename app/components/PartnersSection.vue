<script setup lang="ts">
import { partners } from '~/data/company'
</script>

<template>
  <section id="partners" class="scroll-mt-20 border-y bg-muted/40 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Technology Partners
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Driving innovation through <span class="text-brand-gradient">world-class OEMs</span>
        </h2>
      </div>

      <Marquee :duration="30" class="mt-14">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md sm:w-64"
          :title="partner.name"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-h-14 w-auto max-w-full object-contain"
            loading="lazy"
          >
        </div>
      </Marquee>

      <p class="mt-8 text-center text-sm text-muted-foreground">
        Multi-brand solutions &amp; services — the right product and expertise for every application.
      </p>
    </div>
  </section>
</template>
