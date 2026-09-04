export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    // GitHub Pages serves this site from
    // https://YOUR_USERNAME.github.io/pangasinan-heritage/
    // so every asset/link needs this subpath prefix, or it will 404.
    baseURL: '/pangasinan-heritage/',
    head: {
      htmlAttrs: {
        lang: 'en', // fixes: <html> element does not have a [lang] attribute
      },
      title: 'Pangasinan Heritage Digital Showcase', // fixes: Document doesn't have a <title> element
      titleTemplate: '%s · Pangasinan Heritage Digital Showcase',
      meta: [
        { name: 'description', content: 'Explore the heritage, culture, and destinations of Pangasinan, Philippines.' }, // fixes: Document does not have a meta description
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
  },
})