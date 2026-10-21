<script setup lang="ts">
import { contacts, address } from '~/data/company'
</script>

<template>
  <section id="contact" class="relative scroll-mt-20 border-t bg-muted/40 py-24 overflow-hidden">
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="size-3 text-brand-green" />
          Contact Us
        </div>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Let's discuss your <span class="text-brand-gradient">critical infrastructure</span>
        </h2>
        <p class="mt-4 text-muted-foreground">
          Your search for a client-centered organization that can help with data center design
          or HVAC framework establishment ends here.
        </p>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-5">
        <div class="space-y-8 lg:col-span-2">
          <ScrollReveal>
            <SpotlightCard class="p-6">
            <div class="flex gap-3">
              <div class="flex size-12 items-center justify-center rounded-xl bg-brand-gradient on-gradient shrink-0">
                <FontAwesomeIcon :icon="['fas', 'location-dot']" class="size-5" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">Office Address</h3>
                <p class="mt-1 text-sm leading-relaxed text-muted-foreground">{{ address }}</p>
              </div>
            </div>
          </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal
            v-for="(contact, i) in contacts"
            :key="contact.email"
            :delay="80 + i * 80"
          >
            <SpotlightCard class="p-6">
              <div class="flex gap-3">
                <div class="flex size-12 items-center justify-center rounded-xl bg-brand-gradient on-gradient shrink-0">
                  <FontAwesomeIcon :icon="['fas', 'user-tie']" class="size-5" />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-lg">{{ contact.name }}</h3>
                  <p class="text-xs uppercase tracking-wider text-muted-foreground">{{ contact.role }}</p>
                  <div class="mt-3 space-y-2">
                    <a
                      v-for="phone in contact.phones"
                      :key="phone"
                      :href="`tel:${phone.replace(/\s/g, '')}`"
                      class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-green"
                    >
                      <FontAwesomeIcon :icon="['fas', 'phone']" class="size-3.5" />
                      {{ phone }}
                    </a>
                    <a
                      :href="`mailto:${contact.email}`"
                      class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-green"
                    >
                      <FontAwesomeIcon :icon="['fas', 'envelope']" class="size-3.5" />
                      {{ contact.email }}
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        <ScrollReveal class="lg:col-span-3">
          <SpotlightCard beam class="h-full">
            <EnquiryForm />
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
