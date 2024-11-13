import i18n from '@nuxtjs/i18n'// https://nuxt.com/docs/api/configuration/nuxt-config

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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/sitemap'],
  site: { 
    url: 'https://terminuscalculator.uk', 
    name: 'Terminus Calculator (BO6): Solve Zombies Mode Puzzles Instantly!' 
  }, 
  i18n:{
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'zh', name: '中文', language: 'zh-CN', file: 'zh.json' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.json' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.json' },
      { code: 'de', name: 'Deutsch', language: 'de-DE', file: 'de.json' },
      { code: 'ru', name: 'Русский', language: 'ru-RU', file: 'ru.json' },
      { code: 'ja', name: '日本語', language: 'ja-JP', file: 'ja.json' },
      { code: 'ar', name: 'العربية', language: 'ar-SA', file: 'ar.json' },
      { code: 'ko', name: '한국어', language: 'ko-KR', file: 'ko.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_and_default',
  },
  css: ['~/assets/main.css'],
  devtools: { enabled: true }
})
