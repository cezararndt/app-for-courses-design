import React from 'react'
import { AvatarImage, AvatarInfo, AvatarContainer } from './styles'

interface AvatarProps {
  image: StaticImageData
  size: 'small' | 'medium' | 'large'
  name?: string
  occupation?: string
}

const avatarSize = {
  small: 50,
  medium: 75,
  large: 80
}

const Avatar: React.FC<AvatarProps> = ({ image, name, size, occupation }) => {
  return (
    <AvatarContainer>
      <AvatarImage
        width={avatarSize[size]}
        height={avatarSize[size]}
        src={image}
      />
      {(name || occupation) && (
        <AvatarInfo>
          {name && <label>{name}</label>}
          {occupation && <span>{occupation}</span>}
        </AvatarInfo>
      )}
    </AvatarContainer>
  )
}

export default Avatar
