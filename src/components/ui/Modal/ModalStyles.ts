import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.baseRed.base};
  }
`
