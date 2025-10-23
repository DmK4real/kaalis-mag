import Link from "next/link"

export function LinkInline({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-accent underline underline-offset-2 hover:underline-offset-4"
    >
      {children}
    </Link>
  )
}
