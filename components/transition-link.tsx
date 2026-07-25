"use client"

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { useTransitionStore } from "../lib/store/useTransitionStore"

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode
  href: string
}

export function TransitionLink({ children, href, onClick, ...props }: TransitionLinkProps) {
  const startTransition = useTransitionStore((state) => state.startTransition)
  const isAnimating = useTransitionStore((state) => state.isAnimating)
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If we're already animating, or it's opening in a new tab, or has a modifier key, let it act normally.
    if (isAnimating || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || props.target === "_blank") {
      if (onClick) onClick(e)
      return
    }
    
    // For local route transitions:
    e.preventDefault()
    if (onClick) onClick(e)
    
    startTransition()
    
    // Wait for the curtain to drop down completely (0.8s) before changing the route.
    setTimeout(() => {
      router.push(href)
    }, 800)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
