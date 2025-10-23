export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-[hsl(var(--muted))]/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} KAALIS — Magazine culture & style.</p>
      </div>
    </footer>
  )
}
