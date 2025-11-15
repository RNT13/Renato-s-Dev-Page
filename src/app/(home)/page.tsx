'use client'

import Hero from '@/components/ui/Hero/Hero'
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard'
import Section from '@/components/ui/Section/Section'
import SkillItems from '@/components/ui/SkillItems/SkillItems'
import { projectsMock } from '@/data/projectsMock'
import { skills } from '@/data/skillsMock'
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
        {skills.map(skill => (
          <SkillItems key={skill.title} src={skill.src} alt={skill.alt} title={skill.title} />
        ))}
      </Section>

      <Section $grid $variant="projects" id="projects" title="Projects">
        {projectsMock.map(projects => (
          <ProjectCard key={projects.id} project={projects} />
        ))}
      </Section>
    </MainContainer>
  )
}
