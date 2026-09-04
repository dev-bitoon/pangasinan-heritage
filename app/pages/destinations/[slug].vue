<template>
  <div v-if="destination">
    <!-- Hero -->
    <section class="relative h-80 sm:h-96 flex items-end overflow-hidden">
            <AtomsImage
        :src="destination.image"
        :alt="destination.name"
        :width="1600"
        :height="700"
        :rounded="false"
        class="absolute inset-0 w-full h-full"
        :style="{ viewTransitionName: `destination-image-${destination.slug}` }"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-heritage-navy-dark/90 via-heritage-navy-dark/30 to-transparent" />

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        <nav class="text-white/80 text-sm font-body mb-3" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="mx-2">›</span>
          <NuxtLink to="/destinations" class="hover:text-white">Destinations</NuxtLink>
          <span class="mx-2">›</span>
          <span class="text-white">{{ destination.name }}</span>
        </nav>
        <span class="inline-block px-3 py-1 rounded-full text-xs font-body font-semibold text-white mb-3" :class="categoryBg">
          {{ destination.category }}
        </span>
        <AtomsTypography variant="display-lg" color="text-white">{{ destination.name }}</AtomsTypography>
        <div class="flex items-center gap-4 mt-2">
          <span class="flex items-center gap-1 text-white/90 text-sm font-body">
            <AtomsIcon name="heroicons:map-pin" size="sm" /> {{ destination.municipality }}
          </span>
          <span class="flex items-center gap-1 text-white/90 text-sm font-body">
            <AtomsIcon name="heroicons:star-solid" size="sm" color="text-heritage-gold" />
            {{ destination.rating }} ({{ destination.reviewCount }} reviews)
          </span>
        </div>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Main content -->
      <div class="lg:col-span-2 space-y-8">
        <div>
          <AtomsTypography variant="heading" color="text-ink" class="text-xl mb-3">About this place</AtomsTypography>
          <AtomsTypography variant="body" color="text-slate">{{ destination.longDescription }}</AtomsTypography>
        </div>

        <div>
          <AtomsTypography variant="heading" color="text-ink" class="text-xl mb-3">Highlights</AtomsTypography>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li v-for="h in destination.highlights" :key="h" class="flex items-start gap-2">
              <AtomsIcon name="heroicons:check-circle" size="sm" color="text-heritage-gold-dark" class="mt-0.5 flex-shrink-0" />
              <AtomsTypography variant="body" color="text-ink" class="text-sm">{{ h }}</AtomsTypography>
            </li>
          </ul>
        </div>

        <div>
          <AtomsTypography variant="heading" color="text-ink" class="text-xl mb-3">Gallery</AtomsTypography>
          <div class="grid grid-cols-3 gap-3">
            <AtomsImage v-for="(img, i) in destination.gallery" :key="i" :src="img" :alt="`${destination.name} photo ${i + 1}`" :width="260" :height="180" class="w-full h-28 sm:h-36" />
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="space-y-4">
        <div class="bg-white border border-line rounded-2xl p-5">
          <AtomsTypography variant="subheading" color="text-ink" class="text-base mb-4">Plan Your Visit</AtomsTypography>

          <div class="space-y-4">
            <div class="flex gap-3">
              <AtomsIcon name="heroicons:calendar-days" size="sm" color="text-heritage-navy" class="mt-0.5 flex-shrink-0" />
              <div>
                <AtomsTypography variant="caption" color="text-slate" class="text-xs uppercase tracking-wide block">Best Time to Visit</AtomsTypography>
                <AtomsTypography variant="body" color="text-ink" class="text-sm">{{ destination.bestTimeToVisit }}</AtomsTypography>
              </div>
            </div>
            <div class="flex gap-3">
              <AtomsIcon name="heroicons:ticket" size="sm" color="text-heritage-navy" class="mt-0.5 flex-shrink-0" />
              <div>
                <AtomsTypography variant="caption" color="text-slate" class="text-xs uppercase tracking-wide block">Entrance Fee</AtomsTypography>
                <AtomsTypography variant="body" color="text-ink" class="text-sm">{{ destination.entranceFee }}</AtomsTypography>
              </div>
            </div>
            <div class="flex gap-3">
              <AtomsIcon name="heroicons:map" size="sm" color="text-heritage-navy" class="mt-0.5 flex-shrink-0" />
              <div>
                <AtomsTypography variant="caption" color="text-slate" class="text-xs uppercase tracking-wide block">How to Get There</AtomsTypography>
                <AtomsTypography variant="body" color="text-ink" class="text-sm">{{ destination.howToGetThere }}</AtomsTypography>
              </div>
            </div>
          </div>

          <AtomsButton variant="primary" class="w-full justify-center mt-5" icon="heroicons:map-pin">
            View on Map
          </AtomsButton>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="max-w-3xl mx-auto px-4 py-20 text-center">
    <AtomsTypography variant="heading" color="text-ink">Destination not found</AtomsTypography>
    <AtomsButton variant="primary" class="mt-4" @click="navigateTo('/destinations')">Back to Destinations</AtomsButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getDestinationBySlug } from '~/data/destinations'

const route = useRoute()
const destination = computed(() => getDestinationBySlug(route.params.slug as string))

const categoryColorMap: Record<string, string> = {
  'Beaches & Islands': 'bg-cat-beaches',
  'Nature & Adventure': 'bg-cat-nature',
  'Historical & Cultural': 'bg-cat-historical',
  'Wellness & Relaxation': 'bg-cat-wellness',
  'Religious Sites': 'bg-cat-religious',
}
const categoryBg = computed(() => destination.value ? categoryColorMap[destination.value.category] : '')
</script>