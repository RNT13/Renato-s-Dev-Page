import { motion } from 'framer-motion'
import styled, { createGlobalStyle } from 'styled-components'
import { media } from './media'

export const Colors = {
  bgColor: '#02040c',
  secondaryColor: '#079992',
  textColor: '#fff'
}

export const EstiloGlobal: React.FC = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  html, body {
    background-color: ${Colors.bgColor};
    overflow-x:hidden;
  }
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.textColor};

  ${media.sm} {
    padding: 0 10px;
  }
`

export const TitleH2 = styled.h2`
  font-size: 1.7em;
  margin: 36px 0 36px 0;
  width: 100%;
  text-align: center;

  ${media.md} {
    font-size: 1.5em;
  }

  ${media.sm} {
    font-size: 1.2em;
  }
`

export const TitleH3 = styled.h3`
  font-size: 1.3em;
  margin: 0 0 24px 0;
  width: 100%;
  text-align: center;

  ${media.md} {
    font-size: 1.1em;
    margin: 0 0 12px 0;
  }

  ${media.sm} {
    font-size: 1em;
    margin: 0 0 6px 0;
  }
`
export const AnimatedDiv = styled(motion.div)`
  overflow-x: hidden;
  max-width: 100%;
`

export default EstiloGlobal
