import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../locales/en/common.json';
import enNav from '../locales/en/nav.json';
import enHome from '../locales/en/home.json';
import enPages from '../locales/en/pages.json';
import enTreatments from '../locales/en/treatments.json';

import trCommon from '../locales/tr/common.json';
import trNav from '../locales/tr/nav.json';
import trHome from '../locales/tr/home.json';
import trPages from '../locales/tr/pages.json';
import trTreatments from '../locales/tr/treatments.json';

import esCommon from '../locales/es/common.json';
import esNav from '../locales/es/nav.json';
import esHome from '../locales/es/home.json';
import esPages from '../locales/es/pages.json';
import esTreatments from '../locales/es/treatments.json';

import deCommon from '../locales/de/common.json';
import deNav from '../locales/de/nav.json';
import deHome from '../locales/de/home.json';
import dePages from '../locales/de/pages.json';
import deTreatments from '../locales/de/treatments.json';

import frCommon from '../locales/fr/common.json';
import frNav from '../locales/fr/nav.json';
import frHome from '../locales/fr/home.json';
import frPages from '../locales/fr/pages.json';
import frTreatments from '../locales/fr/treatments.json';

import itCommon from '../locales/it/common.json';
import itNav from '../locales/it/nav.json';
import itHome from '../locales/it/home.json';
import itPages from '../locales/it/pages.json';
import itTreatments from '../locales/it/treatments.json';

import roCommon from '../locales/ro/common.json';
import roNav from '../locales/ro/nav.json';
import roHome from '../locales/ro/home.json';
import roPages from '../locales/ro/pages.json';
import roTreatments from '../locales/ro/treatments.json';

import ruCommon from '../locales/ru/common.json';
import ruNav from '../locales/ru/nav.json';
import ruHome from '../locales/ru/home.json';
import ruPages from '../locales/ru/pages.json';
import ruTreatments from '../locales/ru/treatments.json';

import arCommon from '../locales/ar/common.json';
import arNav from '../locales/ar/nav.json';
import arHome from '../locales/ar/home.json';
import arPages from '../locales/ar/pages.json';
import arTreatments from '../locales/ar/treatments.json';

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

const resources = {
  en: { common: enCommon, nav: enNav, home: enHome, pages: enPages, treatments: enTreatments },
  tr: { common: trCommon, nav: trNav, home: trHome, pages: trPages, treatments: trTreatments },
  es: { common: esCommon, nav: esNav, home: esHome, pages: esPages, treatments: esTreatments },
  de: { common: deCommon, nav: deNav, home: deHome, pages: dePages, treatments: deTreatments },
  fr: { common: frCommon, nav: frNav, home: frHome, pages: frPages, treatments: frTreatments },
  it: { common: itCommon, nav: itNav, home: itHome, pages: itPages, treatments: itTreatments },
  ro: { common: roCommon, nav: roNav, home: roHome, pages: roPages, treatments: roTreatments },
  ru: { common: ruCommon, nav: ruNav, home: ruHome, pages: ruPages, treatments: ruTreatments },
  ar: { common: arCommon, nav: arNav, home: arHome, pages: arPages, treatments: arTreatments },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'nav', 'home', 'pages', 'treatments'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
