import { Line } from '@/styles/globalStyles'
import { media } from '@/styles/theme'
import { styled } from 'styled-components'

type SectionProps = {
  $grid?: boolean
  $variant?: 'skills' | 'projects'
}

export const SectionContainer = styled.section`
  padding-top: 70px;
  background-image: linear-gradient(90deg, ${({ theme }) => theme.colors.baseBlack.dark}, ${({ theme }) => theme.colors.baseBlue.dark40});

  ${media.tablet}, ${media.mobile} {
    padding-top: 100px;
  }
`

export const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 4px 0;

    ${Line} {
      width: 200px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.baseBlack.light50};
  }
`

export const SectionGrid = styled.div<SectionProps>`
  align-items: center;
  padding: 24px 12px;
  gap: 16px;
  width: 100%;
  height: 100%;
  display: ${({ $grid }) => ($grid ? 'grid' : 'flex')};

  ${({ $variant }) =>
    $variant === 'skills' &&
    `
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin: 0 auto;

    ${media.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    ${media.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  `}

  ${({ $variant }) =>
    $variant === 'projects' &&
    `
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    ${media.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    ${media.mobile} {
    padding: 24px 0px;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
  `}
`
