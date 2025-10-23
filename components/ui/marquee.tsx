"use client"

import { useReducedMotion, motion } from "framer-motion"

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion()
  const speed = reduce ? 0 : 35 // px/s

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-muted/40">
      <motion.div
        className="flex gap-8 py-3 [--w:1200px] min-w-[var(--w)]"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 20, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-sm text-muted-foreground">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
