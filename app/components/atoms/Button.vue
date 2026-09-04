<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :href="href"
    :class="classes"
    :disabled="disabled"
  >
    <AtomsIcon v-if="icon && iconPosition === 'left'" :name="icon" size="sm" />
    <slot />
    <AtomsIcon v-if="icon && iconPosition === 'right'" :name="icon" size="sm" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  iconPosition: 'left',
})

// Renders as <a> when `href` is passed, <button> otherwise —
// so this one atom covers both nav links and form actions.
const tag = computed(() => (props.href ? 'a' : 'button'))

const base = 'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heritage-gold disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-heritage-navy text-white hover:bg-heritage-navy-dark',
  secondary: 'bg-heritage-gold text-heritage-navy hover:bg-heritage-gold-dark',
  ghost: 'bg-transparent text-heritage-navy border border-line hover:bg-mist',
  'outline-light': 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-2.5',
  lg: 'text-lg px-6 py-3',
}

const classes = computed(() => [base, variantClasses[props.variant], sizeClasses[props.size]])
</script>