"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/store/useCartStore"
import Image from "next/image"
import { TransitionLink } from "@/components/transition-link"
import { useTranslationStore } from "@/lib/i18n/useTranslationStore"

export default function CheckoutPage() {
  const { dict } = useTranslationStore()
  const cartItems = useCartStore((state) => state.items)
  const cartTotal = useCartStore((state) => state.getCartTotal())
  
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep((s) => (s + 1) as 1 | 2 | 3)
    } else {
      setIsSuccess(true)
      useCartStore.getState().clearCart?.() // Assume clearCart exists or fails silently
    }
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#f9f8f6] flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg"
        >
          <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-black mb-4 uppercase tracking-[0.15em]">
            Commande Confirmée
          </h1>
          <p className="font-sans text-sm text-black/60 leading-relaxed mb-12">
            Nous avons bien reçu votre commande. Un e-mail de confirmation contenant les détails de votre achat vous a été envoyé. Le privilège de l'équitation sans compromis commence bientôt.
          </p>
          <TransitionLink
            href="/"
            className="inline-block border border-black px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Retour à l'accueil
          </TransitionLink>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f9f8f6] flex flex-col md:flex-row">
      {/* Left Column: Form */}
      <div className="flex-1 px-6 py-12 md:px-16 md:py-24 overflow-y-auto">
        <div className="max-w-xl mx-auto">
          <TransitionLink href="/" className="inline-block mb-16 opacity-40 hover:opacity-100 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </TransitionLink>

          <div className="flex gap-4 border-b border-black/10 pb-4 mb-12 font-sans text-xs uppercase tracking-widest font-semibold">
            <button onClick={() => setStep(1)} className={`transition-colors ${step >= 1 ? "text-black" : "text-black/30"}`}>1. Informations</button>
            <span className="text-black/20">/</span>
            <button onClick={() => setStep(2)} disabled={step < 2} className={`transition-colors ${step >= 2 ? "text-black" : "text-black/30"}`}>2. Livraison</button>
            <span className="text-black/20">/</span>
            <button onClick={() => setStep(3)} disabled={step < 3} className={`transition-colors ${step === 3 ? "text-black" : "text-black/30"}`}>3. Paiement</button>
          </div>

          <form onSubmit={handleNext} className="space-y-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="font-serif text-2xl text-black">Vos Coordonnées</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Prénom</label>
                      <input required type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Nom</label>
                      <input required type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Email</label>
                    <input required type="email" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Téléphone</label>
                    <input required type="tel" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="font-serif text-2xl text-black">Livraison</h2>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Adresse</label>
                    <input required type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Appartement, suite, etc. (optionnel)</label>
                    <input type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Code Postal</label>
                      <input required type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Ville</label>
                      <input required type="text" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="font-serif text-2xl text-black">Paiement Sécurisé</h2>
                  <div className="border border-black/10 bg-white p-6 relative">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-30">
                      <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><rect width="32" height="20" rx="3" fill="#222"/><circle cx="11.5" cy="10" r="6.5" fill="#EB001B"/><circle cx="20.5" cy="10" r="6.5" fill="#F79E1B" fillOpacity="0.8"/></svg>
                      <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><rect width="32" height="20" rx="3" fill="#1A1F71"/><path d="M12.5 14L10 6h2l1.5 6L16 6h2l-2.5 8h-3z" fill="#fff"/></svg>
                    </div>
                    <div className="flex flex-col gap-2 mt-6">
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Numéro de carte</label>
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors tracking-widest" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">Date d'expiration</label>
                        <input required type="text" placeholder="MM/AA" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/50">CVC</label>
                        <input required type="text" placeholder="123" className="w-full border-b border-black/20 bg-transparent py-3 font-sans text-sm outline-none focus:border-black transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              className="w-full bg-black text-white font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] py-5 transition-colors hover:bg-black/80"
            >
              {step === 3 ? `Payer ${cartTotal}€` : "Continuer"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="w-full md:w-[450px] bg-[#f5f3ef] border-l border-black/5 px-6 py-12 md:px-12 md:py-24 flex flex-col">
        <h3 className="font-serif text-2xl text-black mb-8">Récapitulatif</h3>
        
        <div className="flex-1 overflow-y-auto mb-8">
          {cartItems.length === 0 ? (
            <p className="font-sans text-sm text-black/50">Votre panier est vide.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="font-sans text-sm font-medium">{item.name}</span>
                    <span className="font-sans text-xs text-black/50 mt-1">Qté: {item.quantity}</span>
                    <span className="font-sans text-sm mt-auto">{item.price}€</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-black/10 pt-6 space-y-4 font-sans text-sm text-black/60">
          <div className="flex justify-between">
            <span>Sous-total</span>
            <span>{cartTotal}€</span>
          </div>
          <div className="flex justify-between">
            <span>Livraison (Express)</span>
            <span>Offerte</span>
          </div>
          <div className="flex justify-between border-t border-black/10 pt-4 mt-4 font-semibold text-black text-lg">
            <span>Total</span>
            <span>{cartTotal}€</span>
          </div>
        </div>
      </div>
    </main>
  )
}
