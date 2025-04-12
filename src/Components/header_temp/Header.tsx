import { HeaderContainer, Logo, Title } from './HeaderStyles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/images/code-tech.png" alt="Logo" />
      <Title>Renato&apos;s Dev Page</Title>
    </HeaderContainer>
  )
}

export default Header
