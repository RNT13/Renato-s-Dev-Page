'use client'

import Button from '@/components/ui/Button/Button'
import Logo from '@/components/ui/Logo/Logo'
import { useEffect, useState } from 'react'
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNav } from './headerStyles'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSticky])

  return (
    <HeaderContainer className={isSticky ? 'sticky' : ''}>
      <HeaderContent className="container">
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <HeaderNav>
          <ul>
            <li>
              <Button href="#home" title="Home" variant="ghost" size="sm">
                Home
              </Button>
            </li>
            <li>
              <Button href="#about" title="About" variant="ghost" size="sm">
                About
              </Button>
            </li>
            <li>
              <Button href="#skills" title="Skills" variant="ghost" size="sm">
                Skills
              </Button>
            </li>
            <li>
              <Button href="#projects" title="Projects" variant="ghost" size="sm">
                Projects
              </Button>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  )
}
