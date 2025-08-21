import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, ${({ theme }) => theme.colors.baseBlack.dark}, ${({ theme }) => theme.colors.baseBlue.dark40});
`

export const FooterContent = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    height: 50px;
  }
`
