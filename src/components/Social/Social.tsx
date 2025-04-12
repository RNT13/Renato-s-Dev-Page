import { AnimatedDiv } from "../../styles/globalStyle"
import { SocialContainer, SocialLinkList, SosialLinkImg } from "./SocialStyles"


const Social: React.FC = () => {
  return (
    <AnimatedDiv
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <SocialContainer>
        <SocialLinkList>
          <li>
            <a href="https://www.instagram.com/renatominoita/">
              <SosialLinkImg
                src="/images/instagram.svg"
                alt="logo do instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/renato-luiz-0b072b247/">
              <SosialLinkImg
                src="/images/linkedin.svg"
                alt="logo do linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/RNT13">
              <SosialLinkImg src="/images/github.svg" alt="logo do github" />
            </a>
          </li>
          <li>
            <a href="mailto:renatornt18@gmail.com">
              <SosialLinkImg src="/images/mail.svg" alt="logo do e-mail" />
            </a>
          </li>
        </SocialLinkList>
      </SocialContainer>
    </AnimatedDiv>
  )
}
export default Social
