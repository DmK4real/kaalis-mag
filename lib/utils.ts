export function paginate<T>(items: T[], page: number, perPage: number) {
  const total = items.length
  const pages = Math.max(1, Math.ceil(total / perPage))
  const current = Math.min(Math.max(1, page), pages)
  const start = (current - 1) * perPage
  const end = start + perPage
  return {
    items: items.slice(start, end),
    total,
    pages,
    current,
  }
}
