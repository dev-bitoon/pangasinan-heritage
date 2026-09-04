<template>
  <div>
    <!-- Hero -->
    <section class="bg-mist pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"></div>
    </section>

    <!-- Search + Grid, pulled up over the hero like the reference -->
    <OrganismsHeritageGrid :destinations="destinations" />
  </div>
</template>

<script setup lang="ts">
import { destinations as allDestinations } from '~/data/destinations'
const destinations = allDestinations.map((d) => ({ ...d, to: `/destinations/${d.slug}` }))
</script>