import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { Providers } from '@/components/providers'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { GlobalStyles } from '@/styles/globalStyles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RNT Portfolio',
  description: 'RNT Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
