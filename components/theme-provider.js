"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider forcedTheme="dark" enableSystem={false} attribute="class">
      {children}
    </NextThemesProvider>
  )
} 