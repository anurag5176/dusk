import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/lib/theme-provider"
import { CursorSpotlight } from "@/components/cursor-spotlight"

export const metadata: Metadata = {
  title: "Dusk AI - Intelligent Automation. Exponential Growth.",
  description: "Revolutionary business automation solutions powered by cutting-edge AI technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background text-foreground antialiased theme-transition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="dusk-ai-theme"
        >
          <CursorSpotlight />
          <Header />
          <main className="min-h-screen theme-transition">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
