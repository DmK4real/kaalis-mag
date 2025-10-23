"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"

const TABS = [
  { href: "/culture", label: "Culture" },
  { href: "/style", label: "Style" },
  { href: "/personnalites", label: "Personnalités" },
  { href: "/lieux", label: "Lieux" },
  { href: "/agenda", label: "Agenda" },
]

export function StickyCategoryTabs() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <div className="sticky top-16 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex gap-3 overflow-x-auto py-3">
          {TABS.map((t) => (
            <div key={t.href} className="relative">
              <Link
                href={t.href}
                prefetch
                className={clsx(
                  "whitespace-nowrap rounded-md px-2 py-1 text-sm transition-colors",
                  isActive(t.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive(t.href) ? "page" : undefined}
              >
                {t.label}
              </Link>
              {isActive(t.href) && (
                <motion.div
                  layoutId="tabs-underline"
                  className="absolute -bottom-1 left-1 right-1 h-[2px] rounded bg-foreground"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
