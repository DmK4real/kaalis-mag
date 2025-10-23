"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/culture", label: "Culture" },
  { href: "/style", label: "Style" },
  { href: "/personnalites", label: "Personnalités" },
  { href: "/lieux", label: "Lieux" },
  { href: "/agenda", label: "Agenda" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo Kaalis */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-kaalis.svg"
            alt="Kaalis"
            width={28}
            height={28}
            priority
          />
          <span className="sr-only">Kaalis</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Link
            href="/menu"
            className="rounded-xl border px-3 py-1 text-sm hover:bg-muted"
          >
            Menu
          </Link>
        </div>
      </div>
    </header>
  )
}
