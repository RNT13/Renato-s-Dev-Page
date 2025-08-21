import { TitleH3 } from '@/styles/globalStyles'
import Image from 'next/image'
import { SkillItem, SkillItemsContainer, SkillItemsContent } from './SkillItemsStyles'

type SkillItemsProps = {
  title: string
  src: string
  alt: string
}

export default function SkillItems({ title, src, alt }: SkillItemsProps) {
  return (
    <SkillItemsContainer>
      <SkillItemsContent>
        <SkillItem>
          <TitleH3>{title}</TitleH3>
          <Image src={src} alt={alt} width={100} height={100} priority />
        </SkillItem>
      </SkillItemsContent>
    </SkillItemsContainer>
  )
}
