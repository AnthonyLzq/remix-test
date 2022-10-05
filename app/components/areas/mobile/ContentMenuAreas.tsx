import type { FC } from 'react'
import type { Area } from '@prisma/client'

import { InfoArea } from './InfoArea'
import { BottomMenu } from './BottomMenu'
import { MobileLayoutContextAPI } from './context'

type ContentMenuAreasProps = {
  areas?: Area[]
}

const ContentMenuAreas: FC<ContentMenuAreasProps> = props => {
  const { areas } = props

  return (
    <MobileLayoutContextAPI areas={areas}>
      <InfoArea />
      <BottomMenu />
    </MobileLayoutContextAPI>
  )
}

export { ContentMenuAreas }
