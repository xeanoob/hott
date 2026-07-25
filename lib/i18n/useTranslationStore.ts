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
    const match = document.cookie.match(new RegExp('(^| )NEXT_LOCALE=([^;]+)'))
    if (match && (match[2] === "fr" || match[2] === "en")) {
      return match[2] as Locale
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
