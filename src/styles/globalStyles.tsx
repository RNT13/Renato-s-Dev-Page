'use client'

import styled, { createGlobalStyle } from 'styled-components'
import { media } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.baseBlue.base} ${({ theme }) => theme.colors.baseBlack.light};
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;

    ${media.pc}, ${media.tablet}, ${media.mobile} {
      width: 95%;
    }
  }
`

export const Line = styled.span.attrs({ 'aria-hidden': true })`
  width: 80px;
  height: 2px;
  background: ${({ theme }) => theme.colors.baseBlack.light50};
  margin: 0 2px;
`

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.baseBlue.base};
  margin: 0 2px;
`

export const OverlayBlur = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 100;
`

export const OverlayDarck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`

export const CloseButton = styled.button`
  border-radius: 50%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.baseBlue.dark20};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.baseBlue.light};
    }
  }
`

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.baseBlack.light50};
`

export const TitleH3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.baseBlack.light50};
`

export const MinorTextH4 = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.baseBlack.light50};
`
