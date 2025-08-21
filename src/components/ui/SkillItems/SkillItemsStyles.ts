import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const SkillItemsContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const SkillItemsContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SkillItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: linear-gradient(180deg, ${theme.colors.baseBlack.dark}, ${theme.colors.baseBlue.dark40});
  border-top: 5px solid ${({ theme }) => theme.colors.baseBlue.base};
  transition: ${transitions.default};
  cursor: pointer;

  img {
    width: 80px;
    height: auto;
    object-fit: cover;
  }

  h3 {
    color: ${({ theme }) => theme.colors.baseBlue.light50};
  }

  &:hover {
    scale: 1.1;
    transition: ${transitions.default};
    transform: translateY(-5px);
    background-image: linear-gradient(360deg, ${theme.colors.baseBlack.dark}, ${theme.colors.baseBlue.dark40});
  }
`
