<template>
  <footer class="bg-heritage-navy-dark py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="font-body text-sm text-white/80">
        © {{ year }} Pangasinan Heritage.
      </p>
      <p class="font-body text-sm text-white/60 mt-1">
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

</script>