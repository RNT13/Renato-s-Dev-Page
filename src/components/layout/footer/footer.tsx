'use client'

import Logo from '@/components/ui/Logo/Logo'
import { MinorTextH4, TitleH3 } from '@/styles/globalStyles'
import { FooterContainer, FooterContent } from './footerStyles'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent className="container">
        <Logo />
        <TitleH3>&copy; RNT projects</TitleH3>
        <TitleH3>{new Date().getFullYear()} all rights reserved </TitleH3>
        <MinorTextH4>Created by RNT</MinorTextH4>
      </FooterContent>
    </FooterContainer>
  )
}
