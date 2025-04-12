import { AnimatedDiv, GlobalContainer, TitleH3 } from '../../styles/globalStyle'
import {
  SkillListItem,
  SkillsH2,
  SkillsList,
  SkillsListImg
} from './SkillsStyles'

const Skills: React.FC = () => {
  return (
    <GlobalContainer>
      <SkillsH2>Web Development tools:</SkillsH2>
      <SkillsList>
        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/HTML5-icon.png" alt="HTML 5-icon" />
            <TitleH3>HTML 5</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/CSS3-icon.png" alt="CSS 3-icon" />
            <TitleH3>CSS 3</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/JS-icon.png" alt="JavaScript-icon" />
            <TitleH3>JavaScript</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/Node js.png" alt="Node.JS-icon" />
            <TitleH3>Node.JS</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/python.png" alt="Python-icon" />
            <TitleH3>Python</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/sass-icon.png" alt="SASS-icon" />
            <TitleH3>SASS</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/less-icon.png" alt="LESS-icon" />
            <TitleH3>LESS</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/Bootstrap-icon.png"
              alt="Bootstrap-icon"
            />
            <TitleH3>Bootstrap</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/Gulp-icon.png" alt="Gulp-icon" />
            <TitleH3>Gulp</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/grunt-icon.png" alt="Grunt-icon" />
            <TitleH3>Grunt</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/vuejs-icon.png" alt="Vue-icon" />
            <TitleH3>Vue JS</TitleH3>
          </SkillListItem>
        </AnimatedDiv>
        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/React-icon.webp" alt="React-icon" />
            <TitleH3>React</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/typescript-icon.png"
              alt="Typescript icon"
            />
            <TitleH3>Typescript</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/framerMotion-icon.svg"
              alt="Framer Motion icon"
            />
            <TitleH3>Framer Motion</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/git-icon.png" alt="Git icon" />
            <TitleH3>Git</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/i18next-icon.webp" alt="i18next icon" />
            <TitleH3>I18next</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/jquery-icon.png" alt="jquery icon" />
            <TitleH3>jquery</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/npm-icon.png" alt="npm icon" />
            <TitleH3>NPM</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/styledComponent-icon.png"
              alt="styled component icon"
            />
            <TitleH3>
              Styled <br /> Component
            </TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg
              src="/images/tailwindcss-icon.png"
              alt="Tailwind CSS icon"
            />
            <TitleH3>Tailwind CSS</TitleH3>
          </SkillListItem>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, transition: { duration: 0.5 } }}
        >
          <SkillListItem>
            <SkillsListImg src="/images/vite-icon.png" alt="Vite icon" />
            <TitleH3>Vite</TitleH3>
          </SkillListItem>
        </AnimatedDiv>
      </SkillsList>
    </GlobalContainer>
  )
}

export default Skills
