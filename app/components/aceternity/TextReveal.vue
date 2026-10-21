<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>()
const words = computed(() => props.text.split(' '))
</script>

<template>
  <div class="flex flex-wrap">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="mr-2 mt-2 animate-fade-in-up text-foreground"
      :style="{ animationDelay: `${index * 50}ms` }"
    >
      {{ word }}
    </span>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
  opacity: 0;
}
</style>
