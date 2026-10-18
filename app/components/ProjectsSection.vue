<script setup lang="ts">
import { projects } from '~/data/company'
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Project Experience
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Major customers &amp; <span class="text-brand-gradient">delivered capacity</span>
        </h2>
      </div>

      <div class="mt-14 overflow-hidden rounded-2xl border bg-card">
        <!-- Desktop table -->
        <table class="hidden w-full text-left text-sm md:table">
          <thead>
            <tr class="border-b bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
              <th class="px-5 py-3.5 font-semibold">Customer</th>
              <th class="px-5 py-3.5 font-semibold">Solution Category</th>
              <th class="px-5 py-3.5 font-semibold">Capacity</th>
              <th class="px-5 py-3.5 font-semibold">Application</th>
              <th class="px-5 py-3.5 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(project, i) in projects"
              :key="project.customer"
              class="border-b transition-colors last:border-0 hover:bg-brand-gradient-soft"
            >
              <td class="px-5 py-4 font-medium">
                <span class="mr-2 inline-block size-1.5 rounded-full bg-brand-gradient align-middle" aria-hidden="true" />
                {{ project.customer }}
              </td>
              <td class="px-5 py-4">
                <span class="rounded-full border bg-muted/60 px-2.5 py-0.5 text-xs font-medium">{{ project.category }}</span>
              </td>
              <td class="px-5 py-4 text-muted-foreground">{{ project.capacity }}</td>
              <td class="px-5 py-4 text-muted-foreground">{{ project.application }}</td>
              <td class="px-5 py-4 text-muted-foreground">{{ project.location }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Mobile cards -->
        <ul class="divide-y md:hidden">
          <li v-for="project in projects" :key="project.customer" class="p-5">
            <p class="font-medium">{{ project.customer }}</p>
            <span class="mt-1 inline-block rounded-full border bg-muted/60 px-2.5 py-0.5 text-xs font-medium">
              {{ project.category }}
            </span>
            <dl class="mt-3 grid grid-cols-3 gap-2 text-sm">
              <div>
                <dt class="text-xs text-muted-foreground">Capacity</dt>
                <dd>{{ project.capacity }}</dd>
              </div>
              <div>
                <dt class="text-xs text-muted-foreground">Application</dt>
                <dd>{{ project.application }}</dd>
              </div>
              <div>
                <dt class="text-xs text-muted-foreground">Location</dt>
                <dd>{{ project.location }}</dd>
              </div>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
