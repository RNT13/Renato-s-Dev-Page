import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  transition: ${transitions.default};
  background-image: linear-gradient(180deg, ${({ theme }) => theme.colors.baseBlack.dark}, ${({ theme }) => theme.colors.baseBlue.dark40});
  z-index: 12;

  &.sticky {
    border-bottom: 3px solid ${theme.colors.baseBlue.base};
  }
`

export const HeaderContent = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  ${media.tablet}, ${media.mobile} {
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const HeaderLogo = styled.div`
  svg {
    width: 150px;
    height: 50px;
  }
`

export const HeaderNav = styled.div`
  ul {
    display: flex;
    gap: 16px;
    list-style: none;

    li {
      button {
        color: ${theme.colors.baseBlue.light50};
        text-decoration: none;

        &:hover {
          color: ${theme.colors.baseBlue.light};
        }
      }
    }
  }
`
