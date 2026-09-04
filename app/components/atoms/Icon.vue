<template>
  <Icon :name="name" :class="classes" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  name: string
  size?: Size
  color?: string
}>(), {
  size: 'md',
  color: 'currentColor',
})

const sizeClasses: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const classes = computed(() => [sizeClasses[props.size], props.color])
</script>