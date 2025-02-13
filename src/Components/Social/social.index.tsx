import { motion } from 'framer-motion'
import styled from 'styled-components'
import { media } from '../../Styles/media'

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`

const SocialLinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0;
  list-style: none;
`

const SosialLinkImg = styled.img`
  width: 45px;
  transition: transform 0.3s ease;
  margin: 8px 50px 16px 50px;

  &:hover {
    transform: scale(1.7);
  }

  ${media.md} {
    margin: 8px 20px 16px 20px;
  }

  ${media.sm} {
    margin: 8px 10px 16px 10px;
  }
`

const Social: React.FC = () => {
  return (
    <motion.div
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
                src="src/images/instagram.svg"
                alt="logo do instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/renato-luiz-0b072b247/">
              <SosialLinkImg
                src="src/images/linkedin.svg"
                alt="logo do linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/RNT13">
              <SosialLinkImg src="src/images/github.svg" alt="logo do github" />
            </a>
          </li>
          <li>
            <a href="mailto:renatornt18@gmail.com">
              <SosialLinkImg src="src/images/mail.svg" alt="logo do e-mail" />
            </a>
          </li>
        </SocialLinkList>
      </SocialContainer>
    </motion.div>
  )
}
export default Social
