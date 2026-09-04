<template>
  <NuxtLink :to="to" class="font-body text-sm font-medium transition-colors relative py-1" :class="linkClass">
    <slot />
    <span
      v-if="active"
      class="absolute left-0 -bottom-1 w-full h-0.5 bg-heritage-gold-dark rounded-full"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  to: string
  active?: boolean
  light?: boolean
}>(), {
  active: false,
  light: false,
})

// active always wins (gold), otherwise color depends on whether the
// header is floating over a photo (light) or on a solid background.
const linkClass = computed(() => {
  if (props.active) return 'text-heritage-gold-dark'
  return props.light ? 'text-white hover:text-heritage-gold' : 'text-ink hover:text-heritage-navy'
})
</script>