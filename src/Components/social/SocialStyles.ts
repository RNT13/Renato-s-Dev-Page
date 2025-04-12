import { styled } from 'styled-components'
import { media } from '../../styles/Media'

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`

export const SocialLinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0;
  list-style: none;
`

export const SosialLinkImg = styled.img`
  width: 45px;
  transition: transform 0.3s ease;
  margin: 8px 50px 16px 50px;

  &:hover {
    transform: scale(1.7);
  }

  ${media.md} {
    margin: 8px 20px 16px 20px;
  }

  ${media.sm} {
    margin: 8px 10px 16px 10px;
  }
`
