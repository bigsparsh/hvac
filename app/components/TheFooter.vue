<script setup lang="ts">
import { company, contacts } from '~/data/company'
</script>

<template>
  <footer class="border-t bg-brand-slate text-white/80 dark:bg-background">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2.5">
            <img src="/logo.png" alt="Thermosync logo" class="h-9 w-auto">
            <span class="text-xl font-bold text-white dark:text-foreground">Thermosync</span>
          </div>
          <p class="mt-4 max-w-md text-sm leading-relaxed">
            {{ company.legalName }} — {{ company.tagline }}. End-to-end solutions covering system
            design, supply, installation, commissioning, and after-sales support.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white dark:text-foreground">Quick Links</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="link in [
              { label: 'About Us', href: '#about' },
              { label: 'Core Business', href: '#services' },
              { label: 'Why Thermosync', href: '#why-us' },
              { label: 'Industries', href: '#industries' },
              { label: 'Contact', href: '#contact' }
            ]" :key="link.href">
              <a :href="link.href" class="transition-colors hover:text-brand-lime">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white dark:text-foreground">Reach Us</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="contact in contacts" :key="contact.email">
              <p class="font-medium text-white dark:text-foreground">{{ contact.name }}</p>
              <a :href="`mailto:${contact.email}`" class="transition-colors hover:text-brand-lime">{{ contact.email }}</a>
              <p v-for="phone in contact.phones" :key="phone" class="text-white/70 dark:text-muted-foreground">{{ phone }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60 dark:border-border dark:text-muted-foreground">
        © {{ new Date().getFullYear() }} {{ company.legalName }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
