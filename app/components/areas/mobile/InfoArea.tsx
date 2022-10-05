import { useContext } from 'react'
import type { Theme } from '@mui/material'
import { Button, Typography } from '@mui/material'

import { makeStyles } from '~/utils'
import { getBackGround } from '~/utils'
import { MobileLayoutContext } from './context'

const useStyles = makeStyles()((theme: Theme) => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    zIndex: 100,
    width: '100vw',
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    width: 'calc(100% - 30vw)',
    margin: '0 15vw',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 24vw)',
      margin: '0 12vw'
    }
  },
  title: {
    color: '#FFF',
    fontSize: '6.5vw',
    fontFamily: 'Nunito Sans',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '7.5vw'
    }
  },
  subtitle: {
    fontFamily: 'Nunito Sans',
    color: '#FFF',
    marginTop: '30px',
    fontSize: '3.5vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw'
    }
  },
  showMoreButtonWrapper: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center'
  },
  showMoreButton: {
    fontFamily: 'Nunito Sans',
    fontWeight: 600,
    width: '150px',
    color: '#FFF',
    backgroundColor: '#2F2F30',
    '&:hover': {
      backgroundColor: '#303030'
    }
  }
}))

const InfoArea = () => {
  const { currentArea } = useContext(MobileLayoutContext)
  const backgroundColor = getBackGround(currentArea?.id)
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper} style={{ backgroundColor }}>
      <div className={classes.margin}>
        <Typography variant='h1' className={classes.title}>
          {currentArea?.name}
        </Typography>
        <Typography variant='h2' className={classes.subtitle}>
          {currentArea?.abstract}
        </Typography>
        <div className={classes.showMoreButtonWrapper}>
          <Button className={classes.showMoreButton}>Ver más...</Button>
        </div>
      </div>
    </div>
  )
}

export { InfoArea }
