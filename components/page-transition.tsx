"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTransitionStore } from "../lib/store/useTransitionStore"

export function PageTransition() {
  const isAnimating = useTransitionStore((state) => state.isAnimating)
  const endTransition = useTransitionStore((state) => state.endTransition)
  const pathname = usePathname()
  
  // When pathname changes, we ensure the transition curtain is lifted
  useEffect(() => {
    // We only lift the curtain when the route ACTUALLY changes.
    if (useTransitionStore.getState().isAnimating) {
      const timer = setTimeout(() => {
        endTransition()
      }, 300) // Small delay to allow the new page to render before lifting the curtain
      return () => clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, endTransition])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key="transition-curtain"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-black"
        />
      )}
    </AnimatePresence>
  )
}
