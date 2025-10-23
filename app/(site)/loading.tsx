export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8 animate-pulse">
      {/* hero */}
      <div className="h-[460px] w-full rounded-2xl bg-muted" />
      {/* grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid gap-3">
            <div className="h-64 w-full rounded-2xl bg-muted" />
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-6 w-3/4 rounded bg-muted" />
            <div className="h-3 w-2/3 rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
