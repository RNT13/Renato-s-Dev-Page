import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const AvatarImg = styled.img`
  position: relative;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  top: -120px;
  z-index: 1;

  ${media.md} {
    width: 220px;
    height: 220px;
  }

  ${media.sm} {
    width: 200px;
    height: 200px;
  }
`
export const AvatarName = styled.h2`
  margin-top: -70px;
  margin-bottom: 16px;
  font-size: 3.5em;

  ${media.md} {
    font-size: 3em;
  }

  ${media.sm} {
    font-size: 2.5em;
  }
`
