<template>
  <div class="p-6 bg-white">
    <h2 class="font-display text-2xl font-bold text-ink mb-4">Color Tokens</h2>

    <div class="mb-6">
      <p class="font-body text-sm font-semibold text-slate uppercase tracking-wide mb-2">Brand</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div v-for="swatch in brandColors" :key="swatch.name" class="rounded-lg overflow-hidden border border-line">
          <div class="h-16" :class="swatch.class"></div>
          <div class="p-2 bg-white">
            <p class="font-body text-xs font-semibold text-ink">{{ swatch.name }}</p>
            <p class="font-body text-xs text-slate">{{ swatch.hex }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <p class="font-body text-sm font-semibold text-slate uppercase tracking-wide mb-2">Category Accents</p>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div v-for="swatch in categoryColors" :key="swatch.name" class="rounded-lg overflow-hidden border border-line">
          <div class="h-16" :class="swatch.class"></div>
          <div class="p-2 bg-white">
            <p class="font-body text-xs font-semibold text-ink">{{ swatch.name }}</p>
            <p class="font-body text-xs text-slate">{{ swatch.hex }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="font-body text-sm font-semibold text-slate uppercase tracking-wide mb-2">Neutrals</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div v-for="swatch in neutralColors" :key="swatch.name" class="rounded-lg overflow-hidden border border-line">
          <div class="h-16" :class="swatch.class"></div>
          <div class="p-2 bg-white">
            <p class="font-body text-xs font-semibold text-ink">{{ swatch.name }}</p>
            <p class="font-body text-xs text-slate">{{ swatch.hex }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Static token reference list — mirrors tailwind.config.js exactly.
// Keeping this in sync manually is intentional: it forces this component
// to double as documentation whenever the palette changes.
const brandColors = [
  { name: 'Heritage Navy', hex: '#0B2A4E', class: 'bg-heritage-navy' },
  { name: 'Navy Dark', hex: '#081B33', class: 'bg-heritage-navy-dark' },
  { name: 'Heritage Gold', hex: '#F0A500', class: 'bg-heritage-gold' },
  { name: 'Gold Dark', hex: '#C4870A', class: 'bg-heritage-gold-dark' },
]

const categoryColors = [
  { name: 'Beaches & Islands', hex: '#3B82F6', class: 'bg-cat-beaches' },
  { name: 'Nature & Adventure', hex: '#22C55E', class: 'bg-cat-nature' },
  { name: 'Historical & Cultural', hex: '#A855F7', class: 'bg-cat-historical' },
  { name: 'Wellness & Relaxation', hex: '#F97316', class: 'bg-cat-wellness' },
  { name: 'Religious Sites', hex: '#EAB308', class: 'bg-cat-religious' },
]

const neutralColors = [
  { name: 'Ink', hex: '#1A2233', class: 'bg-ink' },
  { name: 'Slate', hex: '#5B6472', class: 'bg-slate' },
  { name: 'Mist', hex: '#F5F7FA', class: 'bg-mist border border-line' },
  { name: 'Line', hex: '#E2E6EB', class: 'bg-line' },
]
</script>