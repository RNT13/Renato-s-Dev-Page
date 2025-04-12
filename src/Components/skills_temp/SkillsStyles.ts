import { styled } from 'styled-components'
import { TitleH2 } from '../../styles/GlobalStyle'
import { media } from '../../styles/Media'

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0;
  list-style: none;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const SkillListItem = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SkillsListImg = styled.img`
  width: 55px;
  transition: transform 0.3s ease;
  margin: 8px 50px 16px 50px;

  &[alt='styled component icon'] {
    width: 80px;
    margin: 0px;
  }

  &:hover {
    transform: scale(1.5);
  }
`

export const SkillsH2 = styled(TitleH2)`
  margin: 100px 0px 36px 0px;
`
