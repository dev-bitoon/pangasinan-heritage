<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'display-xl' | 'display-lg' | 'heading' | 'subheading' | 'body' | 'caption' | 'eyebrow'

const props = withDefaults(defineProps<{
  variant?: Variant
  as?: string
  color?: string
}>(), {
  variant: 'body',
  as: undefined,
  color: undefined,
})

// Maps each variant to its tag + Tailwind classes.
// `as` lets a caller override the semantic tag (e.g. force an h2 to render
// with display-xl styling) without losing accessible heading structure.
const variantMap: Record<Variant, { tag: string; classes: string }> = {
  'display-xl': { tag: 'h1', classes: 'font-display text-4xl sm:text-5xl font-bold leading-tight' },
  'display-lg': { tag: 'h1', classes: 'font-display text-3xl sm:text-4xl font-bold leading-tight' },
  heading:      { tag: 'h2', classes: 'font-display text-2xl sm:text-3xl font-bold leading-snug' },
  subheading:   { tag: 'h3', classes: 'font-display text-xl font-semibold leading-snug' },
  body:         { tag: 'p',  classes: 'font-body text-base leading-relaxed' },
  caption:      { tag: 'span', classes: 'font-body text-sm leading-normal' },
  eyebrow:      { tag: 'span', classes: 'font-body text-xs font-semibold uppercase tracking-wider' },
}

const tag = computed(() => props.as ?? variantMap[props.variant].tag)
const classes = computed(() => [variantMap[props.variant].classes, props.color])
</script>