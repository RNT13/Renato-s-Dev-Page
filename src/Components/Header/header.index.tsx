import { lighten } from 'polished'
import styled from 'styled-components'
import { Colors } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'

const HeaderContainer = styled.header`
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

const Logo = styled.img`
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

const Title = styled.h1`
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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/images/code-tech.png" alt="Logo" />
      <Title>Renato&apos;s Dev Page</Title>
    </HeaderContainer>
  )
}

export default Header
