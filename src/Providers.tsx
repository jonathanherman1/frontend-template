import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactProps } from '@/types'

export const Providers = ({ children }: ReactProps) => {
  return (
    <NextUIProvider className="bg-background text-foreground">
      <NextThemesProvider attribute="class">
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
