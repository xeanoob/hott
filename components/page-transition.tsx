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
    // If the transition was started by a link click, we end it when the route changes.
    // We add a tiny delay so the next page has a moment to render before the curtain lifts.
    if (isAnimating) {
      const timer = setTimeout(() => {
        endTransition()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [pathname, isAnimating, endTransition])

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
