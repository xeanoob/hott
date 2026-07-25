"use client"

import { create } from "zustand"
import fr from "../../dictionaries/fr.json"
import en from "../../dictionaries/en.json"

export type Locale = "fr" | "en"
export type Dictionary = typeof fr

interface TranslationStore {
  locale: Locale
  dict: Dictionary
  setLocale: (locale: Locale) => void
}

const getInitialLocale = (): Locale => {
  if (typeof document !== "undefined") {
    // 1. Check if the user already has a saved preference in cookies
    const match = document.cookie.match(new RegExp('(^| )NEXT_LOCALE=([^;]+)'))
    if (match && (match[2] === "fr" || match[2] === "en")) {
      return match[2] as Locale
    }
    
    // 2. If no cookie, check the browser's language/locale settings
    if (typeof navigator !== "undefined" && navigator.language) {
      if (navigator.language.toLowerCase().startsWith('fr')) {
        return 'fr'
      }
      // For any other country/location, default to English
      return 'en'
    }
  }
  return "fr"
}

export const useTranslationStore = create<TranslationStore>((set) => ({
  locale: "fr", // Initial server render is always fr to avoid hydration mismatch, then we sync
  dict: fr,
  setLocale: (locale: Locale) => {
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`
    }
    set({ locale, dict: locale === "en" ? en : fr })
  }
}))

export const initializeTranslationStore = () => {
  const initialLocale = getInitialLocale()
  if (initialLocale !== "fr") {
    useTranslationStore.getState().setLocale(initialLocale)
  }
}
