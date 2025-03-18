import type React from "react"
import "./globals.css"
import { CartProvider } from "@/components/cart-context"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Graficamente Estampados",
  description: "Personaliza tus prendas con sublimación y bordado",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'