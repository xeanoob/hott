"use client"

import { useEffect } from "react"
import { initializeTranslationStore } from "./useTranslationStore"

export function TranslationInit() {
  useEffect(() => {
    initializeTranslationStore()
  }, [])
  
  return null
}
