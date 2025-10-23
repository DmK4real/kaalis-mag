export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl text-primary">
      {children}
    </h2>
  )
}
