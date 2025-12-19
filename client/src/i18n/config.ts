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

async function loadLanguageResources(lang: string) {
  if (loadedLanguages.has(lang)) return;
  
  try {
    const [common, nav, home, pages, treatments, blog] = await Promise.all([
      import(`../locales/${lang}/common.json`),
      import(`../locales/${lang}/nav.json`),
      import(`../locales/${lang}/home.json`),
      import(`../locales/${lang}/pages.json`),
      import(`../locales/${lang}/treatments.json`),
      import(`../locales/${lang}/blog.json`),
    ]);
    
    i18n.addResourceBundle(lang, 'common', common.default, true, true);
    i18n.addResourceBundle(lang, 'nav', nav.default, true, true);
    i18n.addResourceBundle(lang, 'home', home.default, true, true);
    i18n.addResourceBundle(lang, 'pages', pages.default, true, true);
    i18n.addResourceBundle(lang, 'treatments', treatments.default, true, true);
    i18n.addResourceBundle(lang, 'blog', blog.default, true, true);
    
    loadedLanguages.add(lang);
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
  }
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

i18n.on('languageChanged', (lng) => {
  if (lng !== 'en' && !loadedLanguages.has(lng)) {
    loadLanguageResources(lng);
  }
});

const detectedLang = i18n.language?.split('-')[0] || 'en';
if (detectedLang !== 'en' && languages.some(l => l.code === detectedLang)) {
  loadLanguageResources(detectedLang);
}

export default i18n;
