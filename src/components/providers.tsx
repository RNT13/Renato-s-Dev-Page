'use client'

import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
