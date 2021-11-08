import React, { Suspense } from 'react'
import {
  AvatarName,
  Avatars,
  PeepAvatarProps,
} from './Peep.types'

export const avatars: Avatars = {
  Peep1: React.lazy(() => import('./avatars/Peep1')),
  Peep2: React.lazy(() => import('./avatars/Peep2')),
  Peep3: React.lazy(() => import('./avatars/Peep3')),
  Peep4: React.lazy(() => import('./avatars/Peep4')),
  Peep5: React.lazy(() => import('./avatars/Peep5')),
  Peep6: React.lazy(() => import('./avatars/Peep6')),
}
const getAvatarComp = (avatarName: AvatarName) => {
  if (!avatars[avatarName]) return null
  return avatars[avatarName]
}

const PeepAvatar: React.FunctionComponent<PeepAvatarProps> =
  ({
    name,
    title,
    backgroundColor = '#96C7C1',
    borderRadius = 'none',
    fontSize = '10em',
    ...props
  }) => {
    const PeepComp = getAvatarComp(name)
    if (!name || !title) {
      return null
    }

    return (
      <Suspense fallback="">
        <PeepComp
          style={{
            backgroundColor,
            fontSize,
            borderRadius,
          }}
          {...props}
        />
      </Suspense>
    )
  }

export default PeepAvatar
