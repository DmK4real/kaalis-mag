// lib/shimmer.ts
export const shimmerDataURL =
  "data:image/svg+xml;base64," +
  Buffer.from(`<svg width="700" height="475" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs><linearGradient id="g"><stop stop-color="#eee" offset="20%" /><stop stop-color="#ddd" offset="50%" /><stop stop-color="#eee" offset="70%" /></linearGradient></defs>
  <rect width="700" height="475" fill="#eee" />
  <rect id="r" width="700" height="475" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-700" to="700" dur="1.2s" repeatCount="indefinite"  />
  </svg>`).toString("base64")
