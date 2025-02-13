import { lighten } from 'polished'
import styled from 'styled-components'
import { Colors, TitleH3 } from '../../Styles/globalStyle'

const FooterContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lighten(0.2, Colors.bgColor)};
`

const Footer = () => {
  return (
    <FooterContainer>
      <TitleH3>&copy; RNT projects - all rights reserved 2024</TitleH3>
    </FooterContainer>
  )
}

export default Footer
