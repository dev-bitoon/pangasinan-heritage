<template>
  <div>
    <!-- Festivals -->
    <section class="bg-mist pt-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <AtomsTypography variant="caption" color="text-heritage-gold-dark font-semibold uppercase tracking-wide" class="text-xs block mb-1">
          Living Traditions
        </AtomsTypography>
        <AtomsTypography variant="heading" color="text-ink" class="text-2xl mb-6">
          Festivals &amp; Celebrations
        </AtomsTypography>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="f in festivals" :key="f.name" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="relative">
              <AtomsImage :src="f.image" :alt="f.name" :width="400" :height="220" :rounded="false" class="w-full h-48" />
              <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-heritage-gold text-heritage-navy text-xs font-body font-semibold">
                {{ f.month }}
              </span>
            </div>
            <div class="p-4">
              <div class="flex items-center gap-1 text-slate mb-1">
                <AtomsIcon name="heroicons:map-pin" size="sm" />
                <AtomsTypography variant="caption" color="text-heritage-gold-dark" class="text-xs uppercase tracking-wide font-semibold">{{ f.municipality }}</AtomsTypography>
              </div>
              <AtomsTypography variant="subheading" color="text-ink" class="mb-2 text-lg">{{ f.name }}</AtomsTypography>
              <AtomsTypography variant="body" color="text-slate" class="text-sm">{{ f.description }}</AtomsTypography>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Traditional Crafts & Cuisine -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14">
      <AtomsTypography variant="caption" color="text-heritage-gold-dark font-semibold uppercase tracking-wide" class="text-xs block mb-1">
        Made &amp; Made With Love
      </AtomsTypography>
      <AtomsTypography variant="heading" color="text-ink" class="text-2xl mb-6">
        Traditional Crafts &amp; Cuisine
      </AtomsTypography>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in craftsAndCuisine" :key="item.name" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div class="relative">
            <AtomsImage :src="item.image" :alt="item.name" :width="300" :height="200" :rounded="false" class="w-full h-36" />
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-heritage-navy text-xs font-body font-semibold">
              {{ item.category }}
            </span>
          </div>
          <div class="p-4">
            <p class="flex items-center gap-1 text-slate text-xs font-body mb-1">
              <AtomsIcon name="heroicons:map-pin" size="sm" /> {{ item.municipality }}
            </p>
            <AtomsTypography variant="subheading" color="text-ink" class="text-base mb-1">{{ item.name }}</AtomsTypography>
            <AtomsTypography variant="body" color="text-slate" class="text-sm">{{ item.description }}</AtomsTypography>
          </div>
        </div>
      </div>
    </section>

    <!-- Cuisine strip -->
  </div>
</template>

<script setup lang="ts">
import { festivals, craftsAndCuisine } from '~/data/destinations'
</script>