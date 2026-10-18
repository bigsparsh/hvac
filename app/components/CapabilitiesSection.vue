<script setup lang="ts">
import { capabilities } from '~/data/company'
</script>

<template>
  <section id="capabilities" class="scroll-mt-20 border-y bg-muted/40 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Our Capabilities
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          From first call to <span class="text-brand-gradient">lifelong support</span>
        </h2>
        <p class="mt-4 text-muted-foreground">
          A single, accountable team takes your project through every stage.
        </p>
      </div>

      <ol class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(step, i) in capabilities"
          :key="step"
          class="relative rounded-2xl border bg-card p-6"
        >
          <span class="text-sm font-bold text-brand-gradient">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="mt-2 font-semibold">{{ step }}</p>
          <ArrowRight
            v-if="i < capabilities.length - 1"
            class="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-brand-green lg:block"
            aria-hidden="true"
          />
        </li>
      </ol>
    </div>
  </section>
</template>
