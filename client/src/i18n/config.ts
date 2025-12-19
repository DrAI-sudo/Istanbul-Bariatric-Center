import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../locales/en/common.json';
import enNav from '../locales/en/nav.json';
import enHome from '../locales/en/home.json';
import enPages from '../locales/en/pages.json';
import enTreatments from '../locales/en/treatments.json';
import enBlog from '../locales/en/blog.json';

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'ro', name: 'Română', flag: '🇷🇴', dir: 'ltr' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

const loadedLanguages = new Set(['en']);

const localeLoaders: Record<string, () => Promise<{
  common: { default: Record<string, unknown> };
  nav: { default: Record<string, unknown> };
  home: { default: Record<string, unknown> };
  pages: { default: Record<string, unknown> };
  treatments: { default: Record<string, unknown> };
  blog: { default: Record<string, unknown> };
}>> = {
  tr: async () => ({
    common: await import('../locales/tr/common.json'),
    nav: await import('../locales/tr/nav.json'),
    home: await import('../locales/tr/home.json'),
    pages: await import('../locales/tr/pages.json'),
    treatments: await import('../locales/tr/treatments.json'),
    blog: await import('../locales/tr/blog.json'),
  }),
  es: async () => ({
    common: await import('../locales/es/common.json'),
    nav: await import('../locales/es/nav.json'),
    home: await import('../locales/es/home.json'),
    pages: await import('../locales/es/pages.json'),
    treatments: await import('../locales/es/treatments.json'),
    blog: await import('../locales/es/blog.json'),
  }),
  de: async () => ({
    common: await import('../locales/de/common.json'),
    nav: await import('../locales/de/nav.json'),
    home: await import('../locales/de/home.json'),
    pages: await import('../locales/de/pages.json'),
    treatments: await import('../locales/de/treatments.json'),
    blog: await import('../locales/de/blog.json'),
  }),
  fr: async () => ({
    common: await import('../locales/fr/common.json'),
    nav: await import('../locales/fr/nav.json'),
    home: await import('../locales/fr/home.json'),
    pages: await import('../locales/fr/pages.json'),
    treatments: await import('../locales/fr/treatments.json'),
    blog: await import('../locales/fr/blog.json'),
  }),
  it: async () => ({
    common: await import('../locales/it/common.json'),
    nav: await import('../locales/it/nav.json'),
    home: await import('../locales/it/home.json'),
    pages: await import('../locales/it/pages.json'),
    treatments: await import('../locales/it/treatments.json'),
    blog: await import('../locales/it/blog.json'),
  }),
  ro: async () => ({
    common: await import('../locales/ro/common.json'),
    nav: await import('../locales/ro/nav.json'),
    home: await import('../locales/ro/home.json'),
    pages: await import('../locales/ro/pages.json'),
    treatments: await import('../locales/ro/treatments.json'),
    blog: await import('../locales/ro/blog.json'),
  }),
  ru: async () => ({
    common: await import('../locales/ru/common.json'),
    nav: await import('../locales/ru/nav.json'),
    home: await import('../locales/ru/home.json'),
    pages: await import('../locales/ru/pages.json'),
    treatments: await import('../locales/ru/treatments.json'),
    blog: await import('../locales/ru/blog.json'),
  }),
  ar: async () => ({
    common: await import('../locales/ar/common.json'),
    nav: await import('../locales/ar/nav.json'),
    home: await import('../locales/ar/home.json'),
    pages: await import('../locales/ar/pages.json'),
    treatments: await import('../locales/ar/treatments.json'),
    blog: await import('../locales/ar/blog.json'),
  }),
};

export async function loadLanguageResources(lang: string): Promise<boolean> {
  if (loadedLanguages.has(lang)) return true;
  
  const loader = localeLoaders[lang];
  if (!loader) {
    console.error(`No loader found for language: ${lang}`);
    return false;
  }
  
  try {
    const modules = await loader();
    
    i18n.addResourceBundle(lang, 'common', modules.common.default, true, true);
    i18n.addResourceBundle(lang, 'nav', modules.nav.default, true, true);
    i18n.addResourceBundle(lang, 'home', modules.home.default, true, true);
    i18n.addResourceBundle(lang, 'pages', modules.pages.default, true, true);
    i18n.addResourceBundle(lang, 'treatments', modules.treatments.default, true, true);
    i18n.addResourceBundle(lang, 'blog', modules.blog.default, true, true);
    
    loadedLanguages.add(lang);
    return true;
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
    return false;
  }
}

export async function changeLanguage(lang: string): Promise<void> {
  if (lang !== 'en') {
    await loadLanguageResources(lang);
  }
  await i18n.changeLanguage(lang);
}

const resources = {
  en: { common: enCommon, nav: enNav, home: enHome, pages: enPages, treatments: enTreatments, blog: enBlog },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'nav', 'home', 'pages', 'treatments', 'blog'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

const detectedLang = i18n.language?.split('-')[0] || 'en';
if (detectedLang !== 'en' && languages.some(l => l.code === detectedLang)) {
  loadLanguageResources(detectedLang).then(() => {
    i18n.changeLanguage(detectedLang);
  });
}

export default i18n;
