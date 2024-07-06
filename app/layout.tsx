import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeCraft by PDX98',
  description:
    'Discover innovative web solutions by PDX98 in Portland. Explore cutting-edge projects and modern web development techniques in this portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <link
          rel='icon'
          href='/jsm-logo.png'
          sizes='any'
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
