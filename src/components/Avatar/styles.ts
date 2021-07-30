import styled from 'styled-components'
import Image from 'next/image'

const AvatarContainer = styled.div`
  display: flex;
`

const AvatarImage = styled(Image)`
  border-radius: 50%;
`

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  justify-content: center;
  font-size: 0.9rem;

  label {
    font-weight: bold;
  }

  span {
    opacity: 0.8;
    font-size: 0.7rem;
  }
`

export { AvatarContainer, AvatarImage, AvatarInfo }
