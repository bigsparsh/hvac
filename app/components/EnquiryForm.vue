<script setup lang="ts">
import { services } from '~/data/company'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const statusMessage = ref('')

async function submit() {
  status.value = 'loading'
  statusMessage.value = ''

  try {
    await $fetch('/api/enquiry', {
      method: 'POST',
      body: form
    })
    status.value = 'success'
    statusMessage.value = "Thanks! We've received your enquiry and will be in touch within one business day."
    Object.assign(form, { name: '', email: '', phone: '', company: '', service: '', message: '' })
  }
  catch (err: any) {
    status.value = 'error'
    statusMessage.value = err?.data?.statusMessage || 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <Card class="overflow-hidden border-0 shadow-none">
    <CardContent class="p-0">
      <form class="space-y-4 p-6 sm:p-8" @submit.prevent="submit">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-2">
            <Label for="name">Name *</Label>
            <Input id="name" v-model="form.name" required placeholder="Jane Smith" />
          </div>
          <div class="space-y-2">
            <Label for="company">Company</Label>
            <Input id="company" v-model="form.company" placeholder="Acme Data Centers Pvt Ltd" />
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="space-y-2">
            <Label for="email">Email *</Label>
            <Input id="email" v-model="form.email" type="email" required placeholder="jane@company.com" />
          </div>
          <div class="space-y-2">
            <Label for="phone">Phone</Label>
            <Input id="phone" v-model="form.phone" type="tel" placeholder="+91 98XXXXXXXX" />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="service">Service interested in</Label>
          <Select v-model="form.service">
            <SelectTrigger id="service" class="w-full">
              <SelectValue placeholder="Select a service (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="service in services" :key="service" :value="service">
                {{ service }}
              </SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <Label for="message">Message *</Label>
          <Textarea id="message" v-model="form.message" required rows="5" placeholder="Tell us about your requirement — site location, capacity, timeline…" />
        </div>

        <Button type="submit" size="lg" class="btn-shine w-full bg-brand-gradient on-gradient transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/30" :disabled="status === 'loading'">
          {{ status === 'loading' ? 'Sending…' : 'Send Enquiry' }}
        </Button>

        <p
          v-if="statusMessage"
          class="text-sm"
          :class="status === 'error' ? 'text-destructive' : 'text-primary'"
        >
          {{ statusMessage }}
        </p>
      </form>
    </CardContent>
  </Card>
</template>
