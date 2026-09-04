<template>
  <article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div class="relative">
      <AtomsImage
        :src="image"
        :alt="name"
        :width="400"
        :height="220"
        :rounded="false"
        class="w-full h-48"
        :style="{ viewTransitionName: `destination-image-${slugFromTo}` }"
      />
      <span
        class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-semibold text-white"
        :class="categoryBg"
      >
        {{ category }}
      </span>
      <button
        type="button"
        class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
        :aria-label="`Save ${name} to favorites`"
        @click="$emit('save')"
      >
        <AtomsIcon name="heroicons:bookmark" size="sm" color="text-heritage-navy" />
      </button>
    </div>

    <div class="p-4">
      <div class="flex items-center gap-1 text-slate mb-1">
        <AtomsIcon name="heroicons:map-pin" size="sm" />
        <AtomsTypography variant="caption" color="text-slate">{{ municipality }}</AtomsTypography>
      </div>

      <AtomsTypography variant="subheading" color="text-ink" class="mb-2">
        {{ name }}
      </AtomsTypography>

      <AtomsTypography variant="body" color="text-slate" class="text-sm mb-4 line-clamp-2">
        {{ description }}
      </AtomsTypography>

      <div class="flex items-center justify-between">
        <div v-if="rating" class="flex items-center gap-1">
          <AtomsIcon name="heroicons:star-solid" size="sm" color="text-heritage-gold" />
          <AtomsTypography variant="caption" color="text-ink font-semibold">{{ rating }}</AtomsTypography>
          <AtomsTypography v-if="reviewCount" variant="caption" color="text-slate">({{ reviewCount }})</AtomsTypography>
        </div>
        <NuxtLink
          :to="to"
          class="inline-flex items-center gap-1 font-body text-sm font-semibold text-heritage-navy hover:text-heritage-gold-dark transition-colors"
        >
          Learn More
          <span class="sr-only"> about {{ name }}</span>
          <AtomsIcon name="heroicons:arrow-right" size="sm" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Category = 'Beaches & Islands' | 'Nature & Adventure' | 'Historical & Cultural' | 'Wellness & Relaxation' | 'Religious Sites'

const props = defineProps<{
  name: string
  municipality: string
  description: string
  image: string
  category: Category
  to: string
  rating?: number
  reviewCount?: number
}>()

defineEmits<{ save: [] }>()

// Maps each category to its accent color token, matching the
// Color Tokens atom exactly — one source of truth for category color.
const categoryColorMap: Record<Category, string> = {
  'Beaches & Islands': 'bg-cat-beaches',
  'Nature & Adventure': 'bg-cat-nature',
  'Historical & Cultural': 'bg-cat-historical',
  'Wellness & Relaxation': 'bg-cat-wellness',
  'Religious Sites': 'bg-cat-religious',
}

const categoryBg = computed(() => categoryColorMap[props.category])

// Extracts the slug from the `to` link (e.g. "/destinations/hundred-islands"
// -> "hundred-islands") so this card's image can be matched to the same
// photo on the detail page for the shared-element transition.
const slugFromTo = computed(() => props.to.split('/').pop())
</script>