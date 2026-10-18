<script setup lang="ts">
import { contacts, address } from '~/data/company'
import { Phone, MapPin, Mail } from '@lucide/vue'
</script>

<template>
  <section id="contact" class="relative scroll-mt-20 border-t bg-muted/40 py-24">
    <div class="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Contact Us
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Let's discuss your <span class="text-brand-gradient">critical infrastructure</span>
        </h2>
        <p class="mt-4 text-muted-foreground">
          Your search for a client-centered organization that can help with data center design
          or HVAC framework establishment ends here.
        </p>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-5">
        <div class="space-y-8 lg:col-span-2">
          <div class="flex gap-3">
            <MapPin class="mt-0.5 size-5 shrink-0 text-brand-green" aria-hidden="true" />
            <div>
              <h3 class="font-semibold">Office Address</h3>
              <p class="mt-1 text-sm leading-relaxed text-muted-foreground">{{ address }}</p>
            </div>
          </div>

          <Separator />

          <div v-for="contact in contacts" :key="contact.email" class="flex gap-3">
            <Phone class="mt-0.5 size-5 shrink-0 text-brand-green" aria-hidden="true" />
            <div>
              <h3 class="font-semibold">{{ contact.name }}</h3>
              <p class="text-xs uppercase tracking-wider text-muted-foreground">{{ contact.role }}</p>
              <div class="mt-1.5 space-y-1">
                <a
                  v-for="phone in contact.phones"
                  :key="phone"
                  :href="`tel:${phone.replace(/\s/g, '')}`"
                  class="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {{ phone }}
                </a>
                <a
                  :href="`mailto:${contact.email}`"
                  class="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {{ contact.email }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border bg-card shadow-sm lg:col-span-3">
          <EnquiryForm />
        </div>
      </div>
    </div>
  </section>
</template>
