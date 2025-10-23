"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"



export function ActiveLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname === href || pathname.startsWith(href + "/")

  return (
    <div className="relative">
      <Link
        href={href}
        prefetch
        aria-current={active ? "page" : undefined}
        className={clsx(
  "px-2 py-1 text-sm transition",
  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
)}
      >
        {label}
      </Link>
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-0.5 left-1 right-1 h-[2px] rounded bg-foreground"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
    </div>
  )
}

