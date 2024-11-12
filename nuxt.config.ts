// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5J6KHBT6SE',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5J6KHBT6SE');
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  devtools: { enabled: true }
})
