"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative w-9 h-9 rounded-full border border-border" disabled>
        <div className="h-4 w-4" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full border border-border hover:border-primary transition-all duration-300 hover:element-glow-effect group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Show Sun icon in Dark Mode, Moon icon in Light Mode */}
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"} group-hover:text-glow`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"} group-hover:text-glow`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
