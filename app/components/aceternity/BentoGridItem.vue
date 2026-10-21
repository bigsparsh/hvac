<script setup lang="ts">
import { cn } from 'cn'

interface Props {
  title: string
  description?: string
  icon?: any
  class?: string
}

defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'group/bento relative row-span-1 flex h-full flex-col justify-between space-y-4 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg',
      $props.class
    )"
  >
    <div class="transition duration-200 group-hover/bento:translate-x-2">
      <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand-gradient on-gradient transition-transform duration-300 group-hover/bento:-rotate-6 group-hover/bento:scale-110">
        <component :is="icon" v-if="icon" class="size-6" />
        <FontAwesomeIcon v-else :icon="['fas', 'bolt']" class="size-6" />
      </div>
      <div class="mb-2 mt-2 font-bold text-lg text-foreground">
        {{ title }}
      </div>
      <div class="font-normal text-sm text-muted-foreground">
        {{ description }}
      </div>
      <ul v-if="$slots.default" class="mt-4 flex flex-wrap gap-2">
        <slot />
      </ul>
    </div>
  </div>
</template>
