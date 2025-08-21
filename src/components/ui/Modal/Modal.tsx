import { CloseButton, OverlayBlur } from '@/styles/globalStyles'
import { IoMdCloseCircle } from 'react-icons/io'
import { ModalContainer, ModalContent } from './ModalStyles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <ModalContainer>
      <OverlayBlur onClick={onClose} />
      <ModalContent>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircle />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}
