import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-black/10 bg-white px-6 py-24 md:px-20 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          
          {/* Logo & Intro */}
          <div className="flex flex-col items-start gap-6 md:col-span-2">
            <Image 
              src="/hott-logo.svg" 
              alt="HOTT Logo" 
              width={200} 
              height={50} 
              className="h-12 w-auto self-start object-left" 
            />
            <p className="max-w-xs font-sans text-sm font-medium leading-relaxed text-black/50">
              Accessoires innovants pour l'équitation. L'élégance absolue, fondée sur le bien-être animal.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-beige">Explorer</h4>
            <Link href="#technologie" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              Technologie WARMBIT
            </Link>
            <Link href="#philosophie" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              Notre Philosophie
            </Link>
            <Link href="#boutique" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              Boutique
            </Link>
          </div>

          {/* Informations Légales */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-beige">Légal</h4>
            <Link href="#" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              Mentions Légales
            </Link>
            <Link href="#" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              CGV
            </Link>
            <Link href="#" className="font-sans text-sm font-medium text-black/60 transition-colors hover:text-black">
              Politique de Confidentialité
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 flex flex-col items-center justify-between border-t border-black/10 pt-8 md:flex-row">
          <p className="font-sans text-xs font-medium text-black/40">
            &copy; {new Date().getFullYear()} HOTT. Tous droits réservés.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="font-sans text-xs font-medium uppercase tracking-widest text-black/40 transition-colors hover:text-black">Instagram</a>
            <a href="#" className="font-sans text-xs font-medium uppercase tracking-widest text-black/40 transition-colors hover:text-black">Facebook</a>
            <a href="#" className="font-sans text-xs font-medium uppercase tracking-widest text-black/40 transition-colors hover:text-black">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
