<template>
  <NuxtLink :to="to" class="flex items-center gap-4 py-4 group">
    <AtomsImage :src="image" :alt="name" :width="80" :height="80" class="w-20 h-20 flex-shrink-0" />
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <AtomsTypography variant="subheading" color="text-ink" class="text-base">{{ name }}</AtomsTypography>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-body font-semibold text-white" :class="tagColorClass ?? categoryBg">
          {{ tag }}
        </span>
      </div>
      <AtomsTypography variant="body" color="text-slate" class="text-sm line-clamp-1">{{ description }}</AtomsTypography>
      <div v-if="rating" class="flex items-center gap-1 mt-1">
        <AtomsIcon name="heroicons:star-solid" size="sm" color="text-heritage-gold" />
        <AtomsTypography variant="caption" color="text-ink font-semibold">{{ rating }}</AtomsTypography>
        <AtomsTypography v-if="reviewCount" variant="caption" color="text-slate">({{ reviewCount }})</AtomsTypography>
      </div>
    </div>
    <AtomsIcon name="heroicons:chevron-right" size="md" color="text-slate group-hover:text-heritage-navy transition-colors" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Category = 'Beaches & Islands' | 'Nature & Adventure' | 'Historical & Cultural' | 'Wellness & Relaxation' | 'Religious Sites'

const props = defineProps<{
  name: string
  description: string
  image: string
  tag: string
  category?: Category
  // Optional explicit class for the tag badge (e.g. 'bg-heritage-gold text-heritage-navy'
  // to match the Heritage page's month badges). Falls back to the category
  // color map when omitted, so existing destination usages are unaffected.
  tagColorClass?: string
  to: string
  rating?: number
  reviewCount?: number
}>()

const categoryColorMap: Record<Category, string> = {
  'Beaches & Islands': 'bg-cat-beaches',
  'Nature & Adventure': 'bg-cat-nature',
  'Historical & Cultural': 'bg-cat-historical',
  'Wellness & Relaxation': 'bg-cat-wellness',
  'Religious Sites': 'bg-cat-religious',
}

const categoryBg = computed(() => props.category ? categoryColorMap[props.category] : '')
</script>