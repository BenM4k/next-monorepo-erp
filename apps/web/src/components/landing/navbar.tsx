"use client"
import { BankIcon, XIcon } from "@phosphor-icons/react"
import { Button } from "@workspace/ui/components/button"
import { useState } from "react"
import Qlogo from "./Qlogo"
import Link from "next/link"

const navLinks = ["Features", "Solutions", "Pricing", "Resources"]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Qlogo className="h-9 w-9" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Quantix
          </span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link href="/auth/sign-up">Start Free Trial</Link>
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon size={24} /> : <BankIcon size={24} />}
        </button>
      </div>

      {open && (
        <div className="space-y-3 border-b border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
