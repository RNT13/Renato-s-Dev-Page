import { Dot, Line, OverlayDarck } from '@/styles/globalStyles'
import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail, MdKeyboardDoubleArrowDown } from 'react-icons/md'
import Button from '../Button/Button'
import { HeroArrow, HeroContainer, HeroContent, HeroInfo, HeroSocialLinks } from './HeroStyles'

type HeroProps = {
  id?: string
}

export default function Hero({ id }: HeroProps) {
  return (
    <HeroContainer id={id}>
      <Image src="/images/hero2.jpg" alt="hero" fill priority />
      <OverlayDarck />
      <HeroContent className="container">
        <HeroInfo>
          <h2>Olá Visitante!</h2>
          <h1>
            Meu nome é <span>Renato</span>
          </h1>
          <h3>Desenvolvedor Fullstack</h3>

          <HeroSocialLinks>
            <Line />
            <Dot />
            <Dot />
            <Dot />

            <li>
              <Button href="https://github.com/RNT13" target="_blank" rel="noopener noreferrer" title="Github" variant="ghost" size="sm">
                <FaGithub />
              </Button>
            </li>

            <li>
              <Button
                href="https://www.linkedin.com/in/renato-minoita/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
                variant="ghost"
                size="sm"
              >
                <FaLinkedin />
              </Button>
            </li>

            <li>
              <Button
                href="https://www.instagram.com/renatominoita/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                variant="ghost"
                size="sm"
              >
                <AiFillInstagram />
              </Button>
            </li>

            <li>
              <Button
                href="https://wa.me/55219852013111?text=Olá%20Renato,%20vi%20seu%20site%20e%20quero%20falar%20com%20você!"
                target="_blank"
                rel="noopener noreferrer"
                title="Whatsapp"
                variant="ghost"
                size="sm"
              >
                <IoLogoWhatsapp />
              </Button>
            </li>

            <li>
              <Button
                href="https://mail.google.com/mail/?view=cm&fs=1&to=renatornt13@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
                variant="ghost"
                size="sm"
              >
                <MdEmail />
              </Button>
            </li>

            <Dot />
            <Dot />
            <Dot />
            <Line />
          </HeroSocialLinks>

          <HeroArrow>
            <span>Scroll</span>
            <Dot />
            <Dot />
            <Dot />
            <MdKeyboardDoubleArrowDown />
          </HeroArrow>
        </HeroInfo>
      </HeroContent>
    </HeroContainer>
  )
}
