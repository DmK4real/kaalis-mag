// lib/utils.ts
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Fusionne correctement les classes Tailwind + variantes CVA */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
