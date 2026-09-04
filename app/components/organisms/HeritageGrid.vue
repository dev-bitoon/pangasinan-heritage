<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <MoleculesSearchForm @search="handleSearch" />

    <div class="flex flex-wrap gap-3 mt-6" role="group" aria-label="Filter by category">
      <button
        type="button"
        class="px-4 py-2 rounded-full text-sm font-body font-medium transition-colors"
        :class="activeCategory === null
          ? 'bg-heritage-navy text-white'
          : 'bg-white border border-line text-ink hover:border-heritage-navy'"
        @click="activeCategory = null"
      >
        All
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        class="px-4 py-2 rounded-full text-sm font-body font-medium transition-colors"
        :class="activeCategory === cat
          ? 'bg-heritage-navy text-white'
          : 'bg-white border border-line text-ink hover:border-heritage-navy'"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="flex items-center justify-between mt-8 mb-4">
      <AtomsTypography variant="heading" color="text-ink" class="text-xl">
        Must-Visit Destinations
      </AtomsTypography>
      <AtomsTypography variant="caption" color="text-slate">
        {{ filteredDestinations.length }} destinations found
      </AtomsTypography>
    </div>

          <div v-if="filteredDestinations.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MoleculesHeritageCard
        v-for="(dest, i) in filteredDestinations"
        :key="dest.to"
        v-reveal="i * 80"
        v-bind="dest"
      />
    </div>

    <div v-else class="text-center py-16">
      <AtomsTypography variant="body" color="text-slate">
        No destinations match this filter yet.
      </AtomsTypography>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type Destination = {
  name: string
  municipality: string
  description: string
  image: string
  category: string
  to: string
  rating?: number
  reviewCount?: number
}

const props = defineProps<{
  destinations: Destination[]
}>()

const categories = ['Beaches & Islands', 'Nature & Adventure', 'Historical & Cultural', 'Wellness & Relaxation', 'Religious Sites']
const activeCategory = ref<string | null>(null)
const searchQuery = ref('')

function handleSearch(payload: { query: string, category: string }) {
  searchQuery.value = payload.query
  if (payload.category) activeCategory.value = payload.category
}

// Filters run client-side against the destinations prop passed in from
// the page. For a real deployment this would instead call a JAMstack
// content API (see report) — kept client-side here for demo purposes.
const filteredDestinations = computed(() => {
  return props.destinations.filter((d) => {
    const matchesCategory = !activeCategory.value || d.category === activeCategory.value
    const matchesQuery = !searchQuery.value || d.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesQuery
  })
})
</script>