import styled from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 320px;
  background-image: url('/images/fundo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
`

const Hero = () => {
  return <HeroContainer />
}

export default Hero
