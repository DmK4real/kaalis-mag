'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV } from '@/lib/nav'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl">Kaalis</Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-4 text-sm">
          {NAV.map(item => {
            const active = pathname.startsWith(item.href)
            return (
              <Link key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded-2xl ${active ? 'bg-black text-white' : 'hover:bg-zinc-100'}`}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile */}
        <button className="md:hidden rounded-2xl border px-3 py-1 text-sm" onClick={() => setOpen(v => !v)}>
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <nav className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {NAV.map(item => {
              const active = pathname.startsWith(item.href)
              return (
                <Link key={item.href} href={item.href}
                  className={`px-3 py-2 rounded-2xl ${active ? 'bg-black text-white' : 'hover:bg-zinc-100'}`}
                  onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
