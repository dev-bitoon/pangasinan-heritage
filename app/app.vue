<template>
  <div class="min-h-screen bg-mist flex flex-col">
    <div
      class="fixed top-0 left-0 h-[3px] z-[100]"
      style="background: linear-gradient(90deg, #F0A500, #C4870A)"
      :style="{ width: loading ? '100%' : '0%', opacity: loading ? 1 : 0, transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out' }"
    />

    <OrganismsHeaderNavigation />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <OrganismsFooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Only drives the loading bar now — the actual page/element morph is
// handled entirely natively by the View Transitions API (see
// nuxt.config.ts experimental.viewTransition), with zero interference
// from our own animation logic.
const route = useRoute()
const loading = ref(false)

watch(
  () => route.fullPath,
  () => {
    loading.value = true
    setTimeout(() => { loading.value = false }, 500)
  }
)
</script>