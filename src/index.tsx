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
  Peep7: React.lazy(() => import('./avatars/Peep7')),
  Peep8: React.lazy(() => import('./avatars/Peep8')),
  Peep9: React.lazy(() => import('./avatars/Peep9')),
  Peep10: React.lazy(() => import('./avatars/Peep10')),
  Peep11: React.lazy(() => import('./avatars/Peep11')),
  Peep12: React.lazy(() => import('./avatars/Peep12')),
  Peep13: React.lazy(() => import('./avatars/Peep13')),
  Peep14: React.lazy(() => import('./avatars/Peep14')),
  Peep15: React.lazy(() => import('./avatars/Peep15')),
  Peep16: React.lazy(() => import('./avatars/Peep16')),
  Peep17: React.lazy(() => import('./avatars/Peep17')),
  Peep18: React.lazy(() => import('./avatars/Peep18')),
  Peep19: React.lazy(() => import('./avatars/Peep19')),
  Peep20: React.lazy(() => import('./avatars/Peep20')),
  Peep21: React.lazy(() => import('./avatars/Peep21')),
  Peep22: React.lazy(() => import('./avatars/Peep22')),
  Peep23: React.lazy(() => import('./avatars/Peep23')),
  Peep24: React.lazy(() => import('./avatars/Peep24')),
  Peep25: React.lazy(() => import('./avatars/Peep25')),
  Peep26: React.lazy(() => import('./avatars/Peep26')),
  Peep27: React.lazy(() => import('./avatars/Peep27')),
  Peep28: React.lazy(() => import('./avatars/Peep28')),
  Peep29: React.lazy(() => import('./avatars/Peep29')),
  Peep30: React.lazy(() => import('./avatars/Peep30')),
}

const getAvatarComp = (avatarName: AvatarName) => {
  console.log('getavatar')
  if (!avatars[avatarName]) return null
  return avatars[avatarName]
}

const PeepAvatar: React.FunctionComponent<PeepAvatarProps> =
  ({
    name,
    title,
    backgroundColor = 'none',
    borderRadius = 'none',
    fontSize = '10em',
    ...rest
  }) => {
    console.log('peepavatar')
    const PeepComp = getAvatarComp(name)
    if (!name || !title) {
      return null
    }
    console.log('PeepComp', PeepComp)
    return (
      <Suspense fallback="">
        <PeepComp
          style={{
            backgroundColor,
            fontSize,
            borderRadius,
          }}
          color={rest.color ? rest.color : '#000'}
          {...rest}
        />
      </Suspense>
    )
  }

export default PeepAvatar
