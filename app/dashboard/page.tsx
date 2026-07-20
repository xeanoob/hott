"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex min-h-screen items-center justify-center bg-[#fbfbf9] font-sans text-sm tracking-widest uppercase">Chargement...</div>;
  }

  if (!session) return null;

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfbf9]">
      <SiteHeader />
      
      <main className="flex-1 px-6 pt-40 pb-24 md:px-20 max-w-7xl mx-auto w-full">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-black mb-16">
          Bonjour, {session.user?.name || "Cher(e) Client(e)"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Menu latéral */}
          <div className="col-span-1 flex flex-col gap-6">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-black/40 border-b border-black/10 pb-3">Mon Compte</h4>
            <Link href="#infos" className="font-sans text-sm font-semibold text-black hover:text-[#c5a880] transition-colors">Mes Informations</Link>
            <Link href="#commandes" className="font-sans text-sm font-semibold text-black/60 hover:text-black transition-colors">Mes Commandes</Link>
            <Link href="#adresses" className="font-sans text-sm font-semibold text-black/60 hover:text-black transition-colors">Carnet d'Adresses</Link>
            
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-left mt-8 font-sans text-xs font-semibold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
            >
              Me déconnecter
            </button>
          </div>

          {/* Contenu principal */}
          <div className="col-span-1 md:col-span-3">
            <div className="bg-white p-10 md:p-14 border border-black/5 shadow-sm">
              <h2 className="font-sans text-lg font-semibold tracking-wide text-black mb-8 border-b border-black/10 pb-4">
                Mes Informations Personnelles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">Nom Complet</span>
                  <span className="font-sans text-sm font-medium text-black">{session.user?.name || "Non renseigné"}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">Adresse Email</span>
                  <span className="font-sans text-sm font-medium text-black">{session.user?.email}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">Mot de passe</span>
                  <span className="font-sans text-sm font-medium text-black">********</span>
                </div>
              </div>

              <button className="mt-12 border border-black px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors">
                Modifier mes informations
              </button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
