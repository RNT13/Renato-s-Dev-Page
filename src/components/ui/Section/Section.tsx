import { Dot, Line, TitleH2 } from '@/styles/globalStyles'
import MotionWrapper from '../MotionWrapper/MotionWrapper'
import { SectionContainer, SectionContent, SectionGrid, SectionTitle } from './SectionStyles'

type SectionProps = {
  children?: React.ReactNode
  title?: string
  id?: string
  $grid?: boolean
  $variant?: 'skills' | 'projects'
}

export default function Sectio({ children, title, id, $grid, $variant }: SectionProps) {
  return (
    <SectionContainer id={id}>
      <SectionContent className="container">
        <MotionWrapper>
          <SectionTitle>
            <TitleH2>{title}</TitleH2>
            <MotionWrapper>
              <div>
                <Line />
                <Dot />
                <Dot />
                <Dot />
              </div>
            </MotionWrapper>
          </SectionTitle>
          <MotionWrapper>
            <SectionGrid $grid={$grid} $variant={$variant}>
              {children}
            </SectionGrid>
          </MotionWrapper>
        </MotionWrapper>
      </SectionContent>
    </SectionContainer>
  )
}
