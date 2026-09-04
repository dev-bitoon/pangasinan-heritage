<template>
  <form
    class="bg-white rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-3 lg:items-center"
    @submit.prevent="$emit('search', formState)"
  >
           <div class="flex-1 flex items-center gap-2 border border-line rounded-lg px-3 py-2.5">
         <label for="destination-search" class="sr-only">Search destinations</label>
         <AtomsIcon name="heroicons:magnifying-glass" size="sm" color="text-slate" />
         <input
           id="destination-search"
           v-model="formState.query"
           type="text"
           placeholder="Search destinations..."
           class="flex-1 outline-none font-body text-sm text-ink placeholder:text-slate"
         >
       </div>

    <select
      v-model="formState.category"
      class="border border-line rounded-lg px-3 py-2.5 font-body text-sm text-ink outline-none focus:border-heritage-navy"
    >
      <option value="">All Categories</option>
      <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
    </select>

    <select
      v-model="formState.municipality"
      class="border border-line rounded-lg px-3 py-2.5 font-body text-sm text-ink outline-none focus:border-heritage-navy"
    >
      <option value="">All Municipalities</option>
      <option v-for="m in municipalities" :key="m" :value="m">{{ m }}</option>
    </select>

    <select
      v-model="formState.sort"
      class="border border-line rounded-lg px-3 py-2.5 font-body text-sm text-ink outline-none focus:border-heritage-navy"
    >
      <option value="recommended">Sort by: Recommended</option>
      <option value="rating">Sort by: Highest Rated</option>
      <option value="name">Sort by: Name (A-Z)</option>
    </select>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

withDefaults(defineProps<{
  categories?: string[]
  municipalities?: string[]
}>(), {
  categories: () => ['Beaches & Islands', 'Nature & Adventure', 'Historical & Cultural', 'Wellness & Relaxation', 'Religious Sites'],
  municipalities: () => ['Alaminos', 'Bolinao', 'Balungao', 'Dasol', 'Calasiao', 'Burgos', 'Manaoag'],
})

defineEmits<{ search: [payload: typeof formState] }>()

const formState = reactive({
  query: '',
  category: '',
  municipality: '',
  sort: 'recommended',
})
</script>