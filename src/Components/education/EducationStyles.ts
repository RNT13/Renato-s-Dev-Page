import { styled } from 'styled-components'
import { TitleH2, TitleH3 } from '../../styles/GlobalStyle'
import { media } from '../../styles/Media'

export const EducationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EducationItem = styled.li`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const EducationDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const EducationImg = styled.img`
  margin: 0px 16px 16px 0px;

  ${media.md} {
    margin: 0px 8px 8px 0px;
  }

  ${media.sm} {
    margin: 0px 4px 0px 0px;
  }
`
export const TitleH3Styled = styled(TitleH3)`
  flex: 1;
  text-align: left;
`
export const EducationH2 = styled(TitleH2)`
  margin: 100px 0px 36px 0px;
`
