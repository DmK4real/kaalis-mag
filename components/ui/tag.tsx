import clsx from "clsx"

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-block rounded-full bg-secondary text-secondary-foreground px-2 py-0.5 text-xs uppercase tracking-wide", className)}>
      {children}
    </span>
  )
}
