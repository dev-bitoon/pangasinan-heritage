export default defineNuxtPlugin((nuxtApp) => {
  // IntersectionObserver only exists in the browser — guard it so this
  // plugin can register safely during server-side rendering too.
  let observer: IntersectionObserver | undefined

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    // Required so Vue's server renderer doesn't crash looking for this
    // during SSR — the directive does nothing on the server, only in the browser.
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
      observer?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})