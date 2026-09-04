<template>
  <div>
    <!-- Hero -->
    <section class="relative h-screen flex items-center overflow-hidden">
      <AtomsImage
        v-for="(photo, i) in heroPhotos"
        :key="photo"
        :src="photo"
        alt="Scenic views of Pangasinan"
        :width="2560"
        :height="1440"
        :rounded="false"
        quality="90"
        class="absolute inset-0 w-full h-full"
        :style="{ opacity: i === activePhoto ? 1 : 0, transition: 'opacity 1.8s ease-in-out' }"
      />
      <div class="absolute inset-0 bg-heritage-navy-dark/50" />

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <AtomsTypography variant="eyebrow" color="text-heritage-gold" class="tracking-[0.3em] block mb-4">
          Philippines · Pangasinan
        </AtomsTypography>
        <h1 class="!text-5xl sm:!text-7xl !leading-[1.05] mb-2">
          <span class="font-display italic font-normal text-white">Discover the Heritage</span>
          <span class="font-display italic font-normal text-white/80 text-3xl sm:text-4xl align-middle mx-1">of</span>
          <span class="font-display font-bold text-heritage-gold">Pangasinan</span>
        </h1>
        <AtomsTypography variant="body" color="text-white/90" class="mt-6 max-w-xl mx-auto">
          Explore the stories, traditions, landmarks, and cultural treasures that shape the identity of Pangasinan.
        </AtomsTypography>
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <AtomsButton variant="secondary" icon="heroicons:arrow-right" icon-position="right" @click="navigateTo('/destinations')">
            Explore Destinations
          </AtomsButton>
          <AtomsButton variant="outline-light" @click="navigateTo('/heritage')">
            Learn Our Heritage
          </AtomsButton>
        </div>
      </div>

      <div class="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 z-10">
        <AtomsTypography variant="caption" color="text-white/70" class="tracking-[0.3em] text-[10px]">
          Scroll to Explore
        </AtomsTypography>
        <AtomsIcon name="heroicons:chevron-down" size="sm" color="text-white/70" />
      </div>

      <div class="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-heritage-navy-dark/50 pointer-events-none" />
    </section>

    <!-- Category pills -->
    <section class="bg-mist- max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AtomsTypography variant="caption" color="text-heritage-navy font-semibold uppercase tracking-wide" class="text-xs block mb-3">
        Browse by Category
      </AtomsTypography>
      <div class="flex flex-wrap gap-3">
        <button
          type="button"
          class="px-4 py-2 rounded-full text-sm font-body font-medium transition-colors"
          :class="activeCategory === null ? 'bg-heritage-navy text-white' : 'bg-white border border-line text-ink hover:border-heritage-navy'"
          @click="activeCategory = null"
        >
          All
        </button>
        <button
          v-for="cat in categories" :key="cat" type="button"
          class="px-4 py-2 rounded-full text-sm font-body font-medium transition-colors"
          :class="activeCategory === cat ? 'bg-heritage-navy text-white' : 'bg-white border border-line text-ink hover:border-heritage-navy'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Top destinations -->
    <section class="bg-mist- max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
      <div class="flex items-center justify-between mb-4">
        <div>
          <AtomsTypography variant="caption" color="text-heritage-navy font-semibold uppercase tracking-wide" class="text-xs block mb-1">
            Top Destinations
          </AtomsTypography>
          <AtomsTypography variant="heading" color="text-ink" class="text-xl">Must-Visit Destinations</AtomsTypography>
        </div>
        <NuxtLink to="/destinations" class="hidden sm:inline-flex items-center gap-1 text-sm font-body font-semibold text-heritage-navy hover:text-heritage-gold-dark transition-colors">
          View All Destinations
          <AtomsIcon name="heroicons:arrow-right" size="sm" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MoleculesHeritageCard v-for="(dest, i) in topDestinations" :key="dest.to" v-reveal="i * 80" v-bind="dest" />
      </div>
    </section>

    <!-- More to explore: Heritage & Culture -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex items-center justify-between mb-3">
        <AtomsTypography variant="caption" color="text-heritage-navy font-semibold uppercase tracking-wide" class="text-xs block">
          More to Explore
        </AtomsTypography>
        <NuxtLink to="/heritage" class="hidden sm:inline-flex items-center gap-1 text-sm font-body font-semibold text-heritage-navy hover:text-heritage-gold-dark transition-colors">
          View All Heritage &amp; Culture
          <AtomsIcon name="heroicons:arrow-right" size="sm" />
        </NuxtLink>
      </div>
      <div class="bg-white rounded-2xl px-4 sm:px-6 sm:grid sm:grid-cols-2 sm:gap-x-10 divide-y divide-line sm:divide-y-0">
        <MoleculesDestinationListItem
          v-for="(item, i) in moreHeritage" :key="item.name" v-bind="item"
          v-reveal="i * 80"
          class="sm:border-b sm:border-line"
        />
      </div>
      <div class="flex justify-center mt-6 sm:hidden">
        <NuxtLink to="/heritage" class="inline-flex items-center gap-1 text-sm font-body font-semibold text-heritage-navy hover:text-heritage-gold-dark transition-colors">
          View All Heritage &amp; Culture
          <AtomsIcon name="heroicons:arrow-right" size="sm" />
        </NuxtLink>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-heritage-navy/5 border border-heritage-navy/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
        <div class="w-12 h-12 rounded-full bg-heritage-navy flex items-center justify-center flex-shrink-0">
          <AtomsIcon name="heroicons:envelope" size="md" color="text-white" />
        </div>
        <div class="flex-1 text-center sm:text-left">
          <AtomsTypography variant="subheading" color="text-ink" class="text-base">Stay Updated!</AtomsTypography>
          <AtomsTypography variant="body" color="text-slate" class="text-sm mt-1">
            Subscribe to our newsletter for the latest updates on destinations, events, and travel tips in Pangasinan.
          </AtomsTypography>
        </div>
        <form class="flex w-full sm:w-auto gap-2" @submit.prevent="subscribed = true">
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email" v-model="email" type="email" required
            placeholder="Enter your email"
            class="flex-1 sm:w-56 border border-line rounded-lg px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-heritage-navy"
          >
          <AtomsButton type="submit" variant="primary">Subscribe</AtomsButton>
        </form>
      </div>
      <p v-if="subscribed" class="text-sm font-body text-heritage-navy mt-3 text-center sm:text-left">
        Thanks — you're subscribed with {{ email }}.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { destinations, festivals } from '~/data/destinations'

// Rotating hero background — cycles through photos with a slow crossfade.
// All images are stacked absolutely; only opacity changes, so this never
// conflicts with layout, scroll-reveal, or any other animation on the page.
const heroPhotos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bolinao_Falls%2C_Pangasinan.jpg/3840px-Bolinao_Falls%2C_Pangasinan.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Christ_the_Savior_at_Hundred_Island_National_Park.jpg/3840px-Christ_the_Savior_at_Hundred_Island_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
  'https://outoftownblog.com/wp-content/uploads/2020/02/Our-Lady-of-Manaoag-Church-photo-by-Jsinglador-via-Wikipedia-CC.jpeg',
]
const activePhoto = ref(0)
let rotateTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  rotateTimer = setInterval(() => {
    activePhoto.value = (activePhoto.value + 1) % heroPhotos.length
  }, 6000)
})
onUnmounted(() => {
  if (rotateTimer) clearInterval(rotateTimer)
})

const categories = ['Beaches & Islands', 'Nature & Adventure', 'Historical & Cultural', 'Wellness & Relaxation', 'Religious Sites']
const activeCategory = ref<string | null>(null)
const email = ref('')
const subscribed = ref(false)

const topDestinations = computed(() =>
  destinations.filter((d) => ['hundred-islands', 'cape-bolinao', 'balungao-hotspring'].includes(d.slug)).map((d) => ({ ...d, to: `/destinations/${d.slug}` }))
)

// "More to Explore" now surfaces heritage & culture content (festivals)
// instead of more destinations. tagColorClass matches the gold/navy month
// badge style used for festivals on the Heritage page, instead of the
// destination category color (which would otherwise default to purple
// for an arbitrary 'Historical & Cultural' category that doesn't really apply).
const moreHeritage = computed(() =>
  festivals.map((f) => ({
    name: f.name,
    description: f.description,
    image: f.image,
    tag: f.month,
    tagColorClass: 'bg-heritage-gold text-heritage-navy',
    to: '/heritage',
  }))
)
</script>