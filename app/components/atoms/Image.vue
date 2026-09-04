<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="['object-cover', rounded ? 'rounded-lg' : '']"
    :style="style"
    loading="lazy"
    format="webp"
    quality="80"
    :sizes="sizes"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width?: number | string
  height?: number | string
  rounded?: boolean
  style?: string | Record<string, string>
  sizes?: string
}>(), {
  rounded: true,
  sizes: 'sm:100vw md:50vw lg:400px',
})
</script>