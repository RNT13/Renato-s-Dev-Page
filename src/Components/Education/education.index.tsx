import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GlobalContainer, TitleH2, TitleH3 } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'

const EducationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EducationItem = styled.li`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const EducationDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const EducationImg = styled.img`
  margin: 0px 16px 16px 0px;

  ${media.md} {
    margin: 0px 8px 8px 0px;
  }

  ${media.sm} {
    margin: 0px 4px 0px 0px;
  }
`
const TitleH3Styled = styled(TitleH3)`
  flex: 1;
  text-align: left;
`

const Education: React.FC = () => {
  return (
    <GlobalContainer>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <TitleH2>Education:</TitleH2>
        <EducationList>
          <EducationItem>
            <EducationDetail>
              <EducationImg src="/images/school.png" alt="" />
              <TitleH3Styled>Full Stack Python Development</TitleH3Styled>
            </EducationDetail>
            <EducationDetail>
              <EducationImg src="/images/location.png" alt="" />
              <TitleH3Styled>EBAC - Brazil</TitleH3Styled>
            </EducationDetail>
            <EducationDetail>
              <EducationImg src="/images/calendar.png" alt="" />
              <TitleH3Styled>07/2024 to 07/2025</TitleH3Styled>
            </EducationDetail>
          </EducationItem>
        </EducationList>
      </motion.div>
    </GlobalContainer>
  )
}

export default Education
