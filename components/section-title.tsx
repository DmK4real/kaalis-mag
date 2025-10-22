export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6">
      {children}
    </h2>
  )
}
