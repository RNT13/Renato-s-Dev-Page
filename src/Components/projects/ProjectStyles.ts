import { lighten } from 'polished'
import { styled } from 'styled-components'
import { Colors, TitleH2 } from '../../styles/GlobalStyle'
import { media } from '../../styles/media'

export const ProjectList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProjectListItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProjectButton = styled.a`
  width: 600px;
  max-width: 100%;
  height: 60px;
  padding: 8px 14px;
  margin: 0px 0px 6px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: ${Colors.textColor};
  background-color: ${Colors.secondaryColor};
  text-transform: uppercase;
  border-radius: 15px;
  letter-spacing: 1px;
  text-decoration: none;
  border: 1px solid ${Colors.secondaryColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${lighten(0.2, Colors.secondaryColor)};
    color: ${Colors.bgColor};
  }

  ${media.md} {
    width: 500px;
    max-width: 100%;
  }

  ${media.sm} {
    width: 100%;
    max-width: 100%;
  }
`
export const ProjectsH2 = styled(TitleH2)`
  margin: 100px 0px 36px 0px;
`
