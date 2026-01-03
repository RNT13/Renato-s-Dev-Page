import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 80vw;
  height: 80vh;
  z-index: 1001;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
