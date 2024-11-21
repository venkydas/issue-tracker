import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <body>
        <NavBar />
        <main>{ children }</main>
      </body>
    </html>
  )
}
