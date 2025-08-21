import { transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const GaleryItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

export const GaleryItemContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  img {
    object-fit: cover;
  }

  svg {
    display: none;
    position: absolute;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.baseBlue.base};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.baseBlue.light};
    transition: ${transitions.slow};

    img {
      opacity: 0.2;
      transition: ${transitions.slow};
    }

    svg {
      display: block;
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.colors.baseBlue.light};
      transition: ${transitions.slow};
    }
  }
`
