// tailwind.config.ts
import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "ka-culture": "hsl(var(--ka-culture))",
        "ka-style": "hsl(var(--ka-style))",
        "ka-lieux": "hsl(var(--ka-lieux))",
        "ka-perso": "hsl(var(--ka-perso))",
        "ka-agenda": "hsl(var(--ka-agenda))",
        "ka-info": "hsl(var(--ka-info))",
      },
      borderRadius: { xl: "var(--radius)" },
    },
  },
  plugins: [typography()],
}

export default config
