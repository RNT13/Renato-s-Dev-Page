import React from 'react'
import { AnimatedDiv, GlobalContainer, TitleH3 } from '../../styles/GlobalStyle'
import {
    LanguagesH2,
    LanguagesList,
    LanguagesListImg,
    LanguagesListItem
} from './LanguagesStyles'

const Languages: React.FC = () => {
  return (
    <GlobalContainer>
      <AnimatedDiv
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <LanguagesH2>Languages:</LanguagesH2>
        <LanguagesList>
          <LanguagesListItem>
            <LanguagesListImg src="/images/Brazil flag.png" alt="Brazil flag" />
            <TitleH3>Portuguese - Native </TitleH3>
          </LanguagesListItem>
          <LanguagesListItem>
            <LanguagesListImg src="/images/USA flag.png" alt="USA flag" />
            <TitleH3>English - Advanced </TitleH3>
          </LanguagesListItem>
        </LanguagesList>
      </AnimatedDiv>
    </GlobalContainer>
  )
}

export default Languages
