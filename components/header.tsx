import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl">Kaalis</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/lieux">Lieux</Link>
          <Link href="/personnalites">Personnalités</Link>
          <Link href="/style">Style</Link>
          <Link href="/culture">Culture & Opinion</Link>
          <Link href="/communaute">Communauté</Link>
        </nav>
      </div>
    </header>
  )
}
