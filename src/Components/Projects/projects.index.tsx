import { motion } from 'framer-motion'
import { lighten } from 'polished'
import styled from 'styled-components'
import { Colors, GlobalContainer, TitleH2 } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'

const ProjectList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectListItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectButton = styled.a`
  width: 600px;
  max-width: 100%;
  height: 60px;
  padding: 8px 14px;
  margin: 0px 0px 6px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: ${Colors.textColor};
  background-color: ${Colors.secondaryColor};
  text-transform: uppercase;
  border-radius: 15px;
  letter-spacing: 1px;
  text-decoration: none;
  border: 1px solid ${Colors.secondaryColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${lighten(0.2, Colors.secondaryColor)};
    color: ${Colors.bgColor};
  }

  ${media.md} {
    width: 500px;
    max-width: 100%;
  }

  ${media.sm} {
    width: 100%;
    max-width: 100%;
  }
`
const ProjectsH2 = styled(TitleH2)`
  margin: 100px 0px 36px 0px;
`

const Projects: React.FC = () => {
  return (
    <GlobalContainer>
      <ProjectsH2>Projects:</ProjectsH2>
      <ProjectList>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://rnt-page.vercel.app/">
              Visit the project &quot;rnt_page&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://baltazarte.vercel.app/">
              Visit the project &quot;Baltazarte&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://restaurante-exemplo.vercel.app/">
              Visit the project &quot;Restaurante&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://sorteadorgruntrenato-phi.vercel.app/">
              Visit the project &quot;Sorteador&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://filmes-series-gh2h.vercel.app/">
              Visit the project &quot;Filmes-series+&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://aniversario-iota-kohl.vercel.app/">
              Visit the project &quot;Aniversário&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://calculadora-vue-azure.vercel.app/">
              Visit the project &quot;calculadora vue&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://todo-vue-three-gilt.vercel.app/">
              Visit the project &quot;todo list vue&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://github-perfil-rnt13.vercel.app/">
              Visit the project &quot;Perfil Github&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
        <ProjectListItem>
          <motion.div
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://calculadora-imc-opal-ten.vercel.app/">
              Visit the project &quot;calculadora IMC&quot;
            </ProjectButton>
          </motion.div>
        </ProjectListItem>
      </ProjectList>
    </GlobalContainer>
  )
}
export default Projects
