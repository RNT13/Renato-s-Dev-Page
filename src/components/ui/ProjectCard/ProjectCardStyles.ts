import { media, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

type ProjectCardProps = {
  $isOpen: boolean
}

export const ProjectCardContainer = styled.div``

export const ProjectCardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 8px;
  gap: 4px;
  background-image: linear-gradient(180deg, ${({ theme }) => theme.colors.baseBlack.dark}, ${({ theme }) => theme.colors.baseBlue.dark30});
  transition: ${transitions.default};
  border: 1px solid ${({ theme }) => theme.colors.baseBlue.dark};

  &:hover {
    background-image: linear-gradient(360deg, ${({ theme }) => theme.colors.baseBlack.dark}, ${({ theme }) => theme.colors.baseBlue.dark30});
    transition: ${transitions.slow};
  }
`

export const ProjectCardHeader = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProjectCardBody = styled.div`
  width: 100%;
  height: 170px;

  ${media.mobile} {
    height: auto;
  }
`

export const ProjectCardFooter = styled.div`
  width: 100%;
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProjectCardGalery = styled.div<ProjectCardProps>`
  width: 100%;
  display: flex;
  height: ${({ $isOpen }) => ($isOpen ? '80px' : '0')};
  transition: ${transitions.default};
  overflow: hidden;

  img {
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition:
      opacity 0.6s ease-in-out,
      visibility 0.6s ease-in-out;
    object-fit: cover;
  }
`

export const Galery = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
