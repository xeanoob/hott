import { create } from "zustand"

interface TransitionStore {
  isAnimating: boolean
  startTransition: () => void
  endTransition: () => void
}

export const useTransitionStore = create<TransitionStore>((set) => ({
  isAnimating: false,
  startTransition: () => set({ isAnimating: true }),
  endTransition: () => set({ isAnimating: false }),
}))
