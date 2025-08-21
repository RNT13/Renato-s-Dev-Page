import { media, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet}, ${media.mobile} {
    height: 80vh;
  }
`

export const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`

export const HeroInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.baseBlack.light50};

  h1 {
    color: ${({ theme }) => theme.colors.baseBlue.light50};
    margin-bottom: 10px;

    span {
      color: ${({ theme }) => theme.colors.baseBlue.base};
    }
  }

  ${media.tablet}, ${media.mobile} {
    font-size: 12px;
  }
`

export const HeroSocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    padding: 12px;
    svg {
      width: 28px;
      height: 28px;
      color: ${({ theme }) => theme.colors.baseBlack.light50};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.baseBlue.base};
        transform: scale(1.3);
        transition: ${transitions.default};
      }
    }
  }

  ${media.mobile} {
    button {
      padding: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const HeroArrow = styled.div`
  position: absolute;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: -70px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);

  transition: ${transitions.default};

  span {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.baseBlue.light50};
  }

  svg {
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.colors.baseBlue.base};

    &:hover {
      transform: scale(1.2);
      transition: ${transitions.default};
    }

    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  ${media.mobile} {
    bottom: -40px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`
