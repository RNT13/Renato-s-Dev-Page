import { colorHSLVariants } from '@/utils/colorUtils'
import { DefaultTheme } from 'styled-components'

export const media = {
  pc: '@media (max-width: 1024px)',
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 480px)'
}

export const transitions = {
  default: 'all 0.2s ease',
  slow: 'all 0.8s ease'
}

export const baseBlack = colorHSLVariants(0, 0, 8)
export const baseBlue = colorHSLVariants(220, 80, 50)
export const baseGreen = colorHSLVariants(100, 100, 50)
export const baseRed = colorHSLVariants(0, 100, 50)
export const baseCyan = colorHSLVariants(180, 150, 50)

export const theme: DefaultTheme = {
  colors: {
    baseBlack,
    baseBlue,
    baseGreen,
    baseRed,
    baseCyan,
    primaryColor: '#011627',
    secondaryColor: '#023864',
    thirdColor: '#0d6efd',
    forthColor: '#E25010',
    textColor: '#fff',
    yellow: '#ffff00',
    yellow2: '#E1A32A',
    blue: '#0000FF',
    blue2: '#1E90FF',
    gray: '#666666',
    gray2: '#a1a1a1',
    orange: '#ff4500',
    orange2: '#ff7f50',
    black: '#000',
    red: '#FF0000',
    redHover: '#FF4837',
    error: '#AB2E46',
    green: '#008000',
    green2: '#44BD32',
    neonBlue: '#00FFD5 ',
    neonGree: '#00FF6A '
  }
}

export const darkTheme = {
  colors: {
    primaryColor: '#13161b',
    secondaryColor: '#1c1f25',
    background: '#2F2F2F',
    inputColor: '#0d0e12',
    white: '#121212',
    blue: '#0d6efd',
    blue2: '#0000FF',
    red: '#FF3347',
    green: '#28a745',
    orange: '#ff4500',
    yellow: '#fffF00',
    shadow: '#000',
    grey: '#a1a1a1',
    textColor: '#f1f1f1',
    neon: {
      pink1: '#FF1493',
      pink2: '#FF00FF',
      green1: '#39FF14',
      green2: '#00FF7F',
      blue1: '#00BFFF',
      blue2: '#00FFFF'
    }
  }
}

export const lightTheme = {
  colors: {
    primaryColor: '#666666',
    secondaryColor: '#a1a1a1',
    background: '#808080',
    inputColor: '#f1f1f1',
    white: '#ffffff',
    blue: '#3a86ff',
    blue2: '#0000FF',
    red: '#FF0000',
    green: '#34d399',
    orange: '#ff4500',
    yellow: '#ffff00',
    shadow: '#000',
    grey: '#a1a1a1',
    textColor: '#13161b',
    neon: {
      pink1: '#FF1493',
      pink2: '#FF00FF',
      green1: '#39FF14',
      green2: '#00FF7F',
      blue1: '#00FFFF',
      blue2: '#00BFFF'
    }
  }
}

export const themeConfig = {
  light: lightTheme,
  dark: darkTheme
}
