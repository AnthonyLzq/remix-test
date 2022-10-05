import type { FC, ReactNode } from 'react'

import { makeStyles } from '~/utils'
import { MobileLayoutContextAPI } from './context'
import { FabMobile } from './Fab'
import { FadeMenu } from './FadeMenu'

const useStyles = makeStyles()(() => ({
  content: {
    position: 'relative',
    zIndex: 100
  }
}))

type MobileLayoutProps = {
  children?: ReactNode
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <MobileLayoutContextAPI>
      <FadeMenu />
      <FabMobile />
      <div className={classes.content}>{children}</div>
    </MobileLayoutContextAPI>
  )
}

export { MobileLayout }
