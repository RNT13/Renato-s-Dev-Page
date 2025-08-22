'use client'

import Hero from '@/components/ui/Hero/Hero'
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard'
import Section from '@/components/ui/Section/Section'
import SkillItems from '@/components/ui/SkillItems/SkillItems'
import { projectsMock } from '@/data/projectsMock'
import { TitleH3 } from '@/styles/globalStyles'
import { MainContainer } from './homeStyles'

export default function Home() {
  return (
    <MainContainer>
      <Hero id="home" />

      <Section id="about" title="About">
        <TitleH3>
          <p>
            Sou um Desenvolvedor Full Stack Júnior apaixonado por tecnologia e movido por desafios. Tenho experiência com as principais ferramentas do
            ecossistema moderno de desenvolvimento web, atuando tanto no frontend quanto no backend.
          </p>
          <br />
          <p>
            Desde criança, sou fascinado por tecnologia — mas foi na programação que realmente me encontrei profissionalmente. Tenho grande interesse
            em aprender continuamente e busco evoluir todos os dias como desenvolvedor.
          </p>
          <br />
          <p>
            Atualmente, estou focado em me especializar cada vez mais na área de desenvolvimento de software, aprendendo e aplicando boas práticas de
            programação através de projetos pessoais e do curso de Desenvolvedor Full Stack pela EBAC.
          </p>
          <br />
          <p>
            Estou sempre desenvolvendo projetos práticos para fortalecer meus conhecimentos, além de acompanhar tendências da área para me manter
            atualizado com o mercado.
          </p>
          <br />
          <p>
            Busco oportunidades que me permitam crescer como desenvolvedor, contribuir com projetos inovadores e fazer parte de times que valorizam
            colaboração, criatividade e tecnologia de ponta.
          </p>
          <br />
          <p>🚀 Sempre em movimento, sempre aprendendo.</p>
        </TitleH3>
      </Section>

      <Section $grid $variant="skills" id="skills" title="Development tools:">
        <SkillItems src="/images/HTML5-icon.png" alt="HTML5-icon" title="HTML5" />
        <SkillItems src="/images/CSS3-icon.png" alt="CSS3-icon" title="CSS3" />
        <SkillItems src="/images/JS-icon.png" alt="JS-icon" title="JS" />
        <SkillItems src="/images/nodeJs.png" alt="nodejs-icon" title="Node JS" />
        <SkillItems src="/images/python.png" alt="python-icon" title="Python" />
        <SkillItems src="/images/sass-icon.png" alt="sass-icon" title="Sass" />
        <SkillItems src="/images/less-icon.png" alt="less-icon" title="Less" />
        <SkillItems src="/images/bootstrap-icon.png" alt="bootstrap-icon" title="Bootstrap" />
        <SkillItems src="/images/gulp-icon.png" alt="gulp-icon" title="Gulp" />
        <SkillItems src="/images/grunt-icon.png" alt="grunt-icon" title="Grunt" />
        <SkillItems src="/images/vuejs-icon.png" alt="vuejs-icon" title="Vue" />
        <SkillItems src="/images/react-icon.webp" alt="react-icon" title="React" />
        <SkillItems src="/images/nextjs-icon.png" alt="next-icon" title="Next" />
        <SkillItems src="/images/typescript-icon.png" alt="typescript-icon" title="Typescript" />
        <SkillItems src="/images/framerMotion-icon.svg" alt="framerMotion-icon" title="FramerMotion" />
        <SkillItems src="/images/git-icon.png" alt="git-icon" title="Git" />
        <SkillItems src="/images/i18next-icon.webp" alt="i18n-icon" title="I18n" />
        <SkillItems src="/images/jquery-icon.png" alt="jquery-icon" title="Jquery" />
        <SkillItems src="/images/npm-icon.png" alt="npm-icon" title="NPM" />
        <SkillItems src="/images/styledComponent-icon.png" alt="styledComponents-icon" title="StyledComponents" />
        <SkillItems src="/images/tailwindcss-icon.png" alt="tailwindcss-icon" title="Tailwindcss" />
        <SkillItems src="/images/vite-icon.png" alt="vite-icon" title="Vite" />
        <SkillItems src="/images/RTK Query.png" alt="RTKQuery-icon" title="RTKQuery" />
        <SkillItems src="/images/prisma.png" alt="prisma-icon" title="Prisma" />
        <SkillItems src="/images/figma-icon.webp" alt="figma-icon" title="Figma" />
        <SkillItems src="/images/restApi-icon.png" alt="rest-api-icon" title="REST API" />
        <SkillItems src="/images/jest-icon.svg" alt="jest-icon" title="Jest" />
        <SkillItems src="/images/cypress-icon.png" alt="cypress-icon" title="Cypress" />
      </Section>

      <Section $grid $variant="projects" id="projects" title="Projects">
        {projectsMock.map(projects => (
          <ProjectCard key={projects.id} project={projects} />
        ))}
      </Section>
    </MainContainer>
  )
}
