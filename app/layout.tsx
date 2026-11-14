import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/header/header"
import { Footer } from "./components/footer/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Luma.",
  description: "",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${plusJakartaSans.variable} font-inter h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
