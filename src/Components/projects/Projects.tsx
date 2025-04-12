import { AnimatedDiv, GlobalContainer } from '../../styles/GlobalStyle'
import {
    ProjectButton,
    ProjectList,
    ProjectListItem,
    ProjectsH2
} from './ProjectStyles'

const Projects: React.FC = () => {
  return (
    <GlobalContainer>
      <ProjectsH2>Projects:</ProjectsH2>
      <ProjectList>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://rnt-page.vercel.app/">
              Visit the project &quot;rnt_page&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://baltazarte.vercel.app/">
              Visit the project &quot;Baltazarte&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://restaurante-exemplo.vercel.app/">
              Visit the project &quot;Restaurante&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://sorteadorgruntrenato-phi.vercel.app/">
              Visit the project &quot;Sorteador&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://filmes-series-gh2h.vercel.app/">
              Visit the project &quot;Filmes-series+&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://aniversario-iota-kohl.vercel.app/">
              Visit the project &quot;Aniversário&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://calculadora-vue-azure.vercel.app/">
              Visit the project &quot;calculadora vue&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://todo-vue-three-gilt.vercel.app/">
              Visit the project &quot;todo list vue&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://github-perfil-rnt13.vercel.app/">
              Visit the project &quot;Perfil Github&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
        <ProjectListItem>
          <AnimatedDiv
            whileInView={{ opacity: 1, scale: 1.0 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ProjectButton href="https://calculadora-imc-opal-ten.vercel.app/">
              Visit the project &quot;calculadora IMC&quot;
            </ProjectButton>
          </AnimatedDiv>
        </ProjectListItem>
      </ProjectList>
    </GlobalContainer>
  )
}
export default Projects
