import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "laudos.ai - IA para Laudos Radiológicos | Convênios de Saúde",
  description:
    "Gere laudos radiológicos precisos instantaneamente com nossa API de IA. Integração com sistemas hospitalares e convênios de saúde. Confiado por grandes redes de saúde brasileiras.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
