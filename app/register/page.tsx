"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Une erreur est survenue.");
        setIsLoading(false);
      } else {
        // Auto-login après inscription réussie
        await signIn("credentials", {
          email,
          password,
          callbackUrl: "/dashboard",
        });
      }
    } catch (err) {
      setError("Erreur de connexion.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbfbf9] px-6 py-12">
      <div className="w-full max-w-md bg-white p-12 shadow-sm border border-black/5">
        <div className="mb-10 flex flex-col items-center">
          <Link href="/">
            <Image src="/7-black.svg" alt="HOTT" width={586} height={185} unoptimized={true} className="h-10 w-auto mb-8 hover:opacity-80 transition-opacity" />
          </Link>
          <h1 className="font-sans text-xl font-semibold tracking-wide text-black text-center">
            CRÉER UN COMPTE
          </h1>
        </div>

        {error && (
          <div className="mb-6 rounded-md bg-red-50 p-4 text-center text-xs text-red-600 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60">
              Prénom et Nom
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-black/20 bg-transparent py-2 font-sans text-sm outline-none transition-colors focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-black/20 bg-transparent py-2 font-sans text-sm outline-none transition-colors focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-black/20 bg-transparent py-2 font-sans text-sm outline-none transition-colors focus:border-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full bg-black py-4 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-black/90 disabled:opacity-50"
          >
            {isLoading ? "Création en cours..." : "Créer mon compte"}
          </button>
        </form>

        <div className="my-8 flex items-center justify-between">
          <div className="h-[1px] w-full bg-black/10"></div>
          <span className="px-4 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">
            OU
          </span>
          <div className="h-[1px] w-full bg-black/10"></div>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex w-full items-center justify-center gap-3 border border-black/10 bg-white py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black transition-colors hover:bg-[#fbfbf9]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
        </div>

        <div className="mt-10 text-center font-sans text-xs font-medium text-black/60">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="font-semibold text-black underline-offset-4 hover:underline">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
