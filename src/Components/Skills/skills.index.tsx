import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GlobalContainer, TitleH2, TitleH3 } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'

const SkillsList = styled.ul`
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
const SkillListItem = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SkillsListImg = styled.img`
  width: 50px;
  transition: transform 0.3s ease;
  margin: 8px 50px 16px 50px;

  &:hover {
    transform: scale(1.5);
  }
`

const Skills: React.FC = () => {
  return (
    <GlobalContainer>
      <TitleH2>Web Development tools:</TitleH2>
      <SkillsList>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/HTML5-icon.png" alt="HTML 5-icon" />
            <TitleH3>HTML 5</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/CSS3-icon.png" alt="CSS 3-icon" />
            <TitleH3>CSS 3</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/JS-icon.png" alt="JavaScript-icon" />
            <TitleH3>JavaScript</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/Node js.png" alt="Node.JS-icon" />
            <TitleH3>Node.JS</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/python.png" alt="Python-icon" />
            <TitleH3>Python</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/sass-icon.png" alt="SASS-icon" />
            <TitleH3>SASS</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/less-icon.png" alt="LESS-icon" />
            <TitleH3>LESS</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/Bootstrap-icon.png"
              alt="Bootstrap-icon"
            />
            <TitleH3>Bootstrap</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/Gulp-icon.png" alt="Gulp-icon" />
            <TitleH3>Gulp</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/grunt-icon.png" alt="Grunt-icon" />
            <TitleH3>Grunt</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/vuejs-icon.png" alt="Vue-icon" />
            <TitleH3>Vue JS</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/React-icon.webp" alt="React-icon" />
            <TitleH3>React</TitleH3>
          </SkillListItem>
        </motion.div>
        <motion.div
          whileInView={{
            rotateY: 0,
            transition: { duration: 0.5 }
          }}
          initial={{ rotateY: -180 }}
          style={{ transform: 'rotateY(-180deg)' }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/typescript-icon.png"
              alt="Typescript-icon"
            />
            <TitleH3>Typescript</TitleH3>
          </SkillListItem>
        </motion.div>
      </SkillsList>
    </GlobalContainer>
  )
}

export default Skills
