import type { FC } from 'react'
import type { Theme } from '@mui/material'
import type { Area } from '@prisma/client'

import { makeStyles } from '~/utils'
import { getBackGround } from '~/utils'
import { CardArea } from './CardArea'

const useStyles = makeStyles()((theme: Theme) => ({
  cardContent: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  progressContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

type ContentCardsProps = {
  areas: Area[]
}

const ContentCards: FC<ContentCardsProps> = props => {
  const { areas } = props
  const { classes } = useStyles()

  return (
    <div className={classes.cardContent}>
      {(areas || []).map(({ id, name, abstract }) => (
        <CardArea
          key={id}
          title={name}
          abstract={abstract}
          backgroundColor={getBackGround(id)}
        />
      ))}
    </div>
  )
}

export { ContentCards }
