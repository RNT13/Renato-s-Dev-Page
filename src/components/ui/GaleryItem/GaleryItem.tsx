import Image from 'next/image'
import { BsZoomIn } from 'react-icons/bs'
import { GaleryItemContainer, GaleryItemContent } from './GaleryItemStyles'

type GaleryItemProps = {
  src: string
  alt: string
  onClick?: () => void
}

export default function GaleryItem({ src, alt, onClick }: GaleryItemProps) {
  return (
    <GaleryItemContainer>
      <GaleryItemContent onClick={onClick}>
        <BsZoomIn />
        <Image src={src} alt={alt} width={75} height={75} priority />
      </GaleryItemContent>
    </GaleryItemContainer>
  )
}
