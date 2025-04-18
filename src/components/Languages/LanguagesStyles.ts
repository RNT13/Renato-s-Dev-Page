import { styled } from 'styled-components'
import { TitleH2 } from '../../styles/globalStyle'
import { media } from '../../styles/media'

export const LanguagesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LanguagesListItem = styled.li`
  max-width: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const LanguagesListImg = styled.img`
  margin: 0px 24px 24px 0px;

  ${media.md} {
    margin: 0px 12px 12px 0px;
  }

  ${media.md} {
    margin: 0px 6px 6px 0px;
  }
`
export const LanguagesH2 = styled(TitleH2)`
  margin: 100px 0px 36px 0px;
`
