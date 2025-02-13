import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { GlobalContainer, TitleH2, TitleH3 } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'

const LanguagesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LanguagesListItem = styled.li`
  max-width: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const LanguagesListImg = styled.img`
  margin: 0px 24px 24px 0px;

  ${media.md} {
    margin: 0px 12px 12px 0px;
  }

  ${media.md} {
    margin: 0px 6px 6px 0px;
  }
`

const Languages: React.FC = () => {
  return (
    <GlobalContainer>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <TitleH2>Languages:</TitleH2>
        <LanguagesList>
          <LanguagesListItem>
            <LanguagesListImg
              src="./src/images/Brazil flag.png"
              alt="Brazil flag"
            />
            <TitleH3>Portuguese - Native </TitleH3>
          </LanguagesListItem>
          <LanguagesListItem>
            <LanguagesListImg src="./src/images/USA flag.png" alt="USA flag" />
            <TitleH3>English - Advanced </TitleH3>
          </LanguagesListItem>
        </LanguagesList>
      </motion.div>
    </GlobalContainer>
  )
}

export default Languages
