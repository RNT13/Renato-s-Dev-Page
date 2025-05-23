import { lighten } from 'polished'
import { styled } from 'styled-components'
import { Colors } from '../../styles/globalStyle'
import { media } from '../../styles/media'

export const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lighten(0.2, Colors.bgColor)};

  ${media.md} {
  }

  ${media.sm} {
  }
`

export const Logo = styled.img`
  height: 60px;
  width: auto;
  margin-right: 8px;

  ${media.md} {
    height: 50px;
  }

  ${media.sm} {
    height: 40px;
  }
`

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-transform: uppercase;

  ${media.md} {
    font-size: 2.3em;
  }

  ${media.sm} {
    font-size: 1.8em;
  }
`
