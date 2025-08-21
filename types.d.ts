import { ColorVariants } from '@/utils/colorUtils'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      baseBlack: ColorVariants
      baseBlue: ColorVariants
      baseGreen: ColorVariants
      baseRed: ColorVariants
      baseCyan: ColorVariants

      // cores estáticas
      primaryColor: string
      secondaryColor: string
      thirdColor: string
      forthColor: string
      textColor: string

      yellow: string
      yellow2: string
      blue: string
      blue2: string
      gray: string
      gray2: string
      orange: string
      orange2: string
      black: string
      red: string
      redHover: string
      error: string
      green: string
      green2: string
      neonBlue: string
      neonGree: string

      // suporte a nested objects (como neon no darkTheme)
      neon?: {
        pink1: string
        pink2: string
        green1: string
        green2: string
        blue1: string
        blue2: string
      }
    }
  }
}

declare interface ProjectType {
  id: number
  title: string
  description: string
  thumbnail: string
  galery: string[]
  link: string
}
