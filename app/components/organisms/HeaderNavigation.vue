<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-transparent border-b border-transparent"
  >
    <!-- Scrim: on non-home pages, always fully visible (those pages don't
         have a full-height dark hero to lean on). On the home page, it
         starts invisible and fades in once the user scrolls past the
         hero — the hero's own overlay covers the top, this covers the rest. -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-heritage-navy/50 to-heritage-navy/50 pointer-events-none transition-opacity duration-300"
      :class="(!isHome || isScrolled) ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <NuxtLink to="/" class="flex items-center gap-2">
          <AtomsIcon name="heroicons:map" size="lg" color="text-white" />
          <div class="leading-tight">
            <AtomsTypography variant="subheading" color="text-white" class="text-base">
              Pangasinan
            </AtomsTypography>
            <AtomsTypography variant="caption" color="text-white/80" class="text-[10px] uppercase tracking-wide block">
              Heritage Digital Showcase
            </AtomsTypography>
          </div>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <MoleculesNavigationItem
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :active="item.to === currentPath"
            light
          >
            {{ item.label }}
          </MoleculesNavigationItem>
        </nav>

        <div class="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            class="hidden sm:flex text-white hover:text-heritage-gold transition-colors"
          >
            <AtomsIcon name="heroicons:magnifying-glass" size="md" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            class="md:hidden text-white transition-colors"
            @click="mobileOpen = !mobileOpen"
          >
            <AtomsIcon name="heroicons:bars-3" size="md" />
          </button>
        </div>
      </div>
    </div>

    <nav
      v-if="mobileOpen"
      class="md:hidden border-t border-line px-4 py-3 flex flex-col gap-4 bg-white shadow-lg"
      aria-label="Mobile navigation"
    >
      <MoleculesNavigationItem
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :active="item.to === currentPath"
      >
        {{ item.label }}
      </MoleculesNavigationItem>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mobileOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const route = useRoute()
const currentPath = computed(() => route.path)
const isHome = computed(() => route.path === '/')

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Heritage & Culture', to: '/heritage' },
]
</script>