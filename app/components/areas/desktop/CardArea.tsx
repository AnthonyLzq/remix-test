import type { FC } from 'react'
import { useState } from 'react'
import { Button, Typography } from '@mui/material'

import { makeStyles } from '~/utils'

const cardStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
  userSelect: 'none'
} as const

const useStyles = makeStyles()(() => ({
  card: {
    ...cardStyles,
    flexGrow: 1,
    transition: 'all 0.5s ease-in'
  },
  cardExpand: {
    ...cardStyles,
    flexGrow: 2,
    transition: 'all 0.5s ease-out'
  },
  hoverDiv: {
    position: 'relative',
    zIndex: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '2vw 0'
  },
  titleFont: {
    fontFamily: 'Nunito Sans',
    color: '#FFF',
    fontWeight: 600,
    fontSize: '2.5vw',
    textAlign: 'end'
  },
  titleWrapper: {
    paddingRight: '2vw'
  },
  subtitleFont: {
    fontFamily: 'Nunito Sans',
    color: '#FFF',
    fontSize: '1.3vw',
    textAlign: 'end',
    marginBottom: '50px'
  },
  subtitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '22vw',
    paddingRight: '2vw'
  },
  showMoreButton: {
    fontWeight: 600,
    fontFamily: 'Nunito Sans',
    width: '200px',
    color: '#FFF',
    backgroundColor: '#2F2F30',
    '&:hover': {
      backgroundColor: '#303030'
    }
  }
}))

type CardAreaProps = {
  backgroundColor: string
  title: string
  abstract: string
}

const CardArea: FC<CardAreaProps> = props => {
  const { backgroundColor, title, abstract } = props
  const [isHover, setIsHover] = useState(false)
  const { classes } = useStyles()

  return (
    <div
      className={isHover ? classes.cardExpand : classes.card}
      style={{ backgroundColor }}
    >
      <div
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={classes.hoverDiv}
      >
        <div
          className={!isHover ? classes.titleWrapper : classes.subtitleWrapper}
        >
          {!isHover ? (
            title.split(' ').map(titlePart => (
              <Typography
                key={titlePart}
                variant='h2'
                className={classes.titleFont}
              >
                {titlePart}
              </Typography>
            ))
          ) : (
            <>
              <Typography variant='h3' className={classes.subtitleFont}>
                {abstract}
              </Typography>
              <Button variant='contained' className={classes.showMoreButton}>
                Ver más...
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export { CardArea }
