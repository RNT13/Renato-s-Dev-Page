import { MinorTextH4, TitleH3 } from '@/styles/globalStyles'
import Image from 'next/image'
import { useState } from 'react'
import { ProjectType } from '../../../../types'
import Button from '../Button/Button'
import GaleryItem from '../GaleryItem/GaleryItem'
import Modal from '../Modal/Modal'
import {
  Galery,
  ProjectCardBody,
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardFooter,
  ProjectCardGalery,
  ProjectCardHeader
} from './ProjectCardStyles'

type ProjectCardProps = {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description } = project
  const [isOpenGalery, setIsOpenGalery] = useState(false)
  const [activeImg, setActiveImg] = useState<string | null>(null)

  return (
    <ProjectCardContainer>
      <ProjectCardContent>
        <ProjectCardHeader>
          <Image src={project.thumbnail} alt={project.title} width={400} height={300} priority />
        </ProjectCardHeader>

        <ProjectCardBody>
          <TitleH3>{title}</TitleH3>
          <MinorTextH4>{description}</MinorTextH4>
        </ProjectCardBody>

        <ProjectCardFooter>
          <Button href={project.link} title={`See the project ${title}`} variant="primary" size="sm">
            See the project
          </Button>
          <Button title="Galery" variant="primary" size="sm" onClick={() => setIsOpenGalery(!isOpenGalery)}>
            Galery
          </Button>
        </ProjectCardFooter>

        <ProjectCardGalery $isOpen={isOpenGalery}>
          <Galery>
            {project.galery.map((img, index) => (
              <GaleryItem key={index} src={img} alt={`${project.title} - screenshot ${index + 1}`} onClick={() => setActiveImg(img)} />
            ))}
          </Galery>
        </ProjectCardGalery>

        <Modal isOpen={!!activeImg} onClose={() => setActiveImg(null)}>
          {activeImg && <Image src={activeImg} alt={project.title} width={1000} height={1000} />}
        </Modal>
      </ProjectCardContent>
    </ProjectCardContainer>
  )
}
