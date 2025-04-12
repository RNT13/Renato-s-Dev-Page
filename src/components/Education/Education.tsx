import { AnimatedDiv, GlobalContainer } from "../../styles/globalStyle"
import { EducationDetail, EducationH2, EducationImg, EducationItem, EducationList, TitleH3Styled } from "./EducationStyles"


const Education: React.FC = () => {
  return (
    <GlobalContainer>
      <AnimatedDiv
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <EducationH2>Education:</EducationH2>
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
      </AnimatedDiv>
    </GlobalContainer>
  )
}

export default Education
