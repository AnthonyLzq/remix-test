import { useContext } from 'react'
import type { Theme } from '@mui/material'
import { Typography, Fade } from '@mui/material'

import { makeStyles, routes } from '~/utils'
import { MobileLayoutContext } from './context'
import { Link } from '@remix-run/react'

const useStyles = makeStyles()((theme: Theme) => ({
  menuFab: {
    position: 'fixed',
    zIndex: 200,
    width: '100%',
    height: '100%',
    backgroundColor: theme.customColors.upColor
  },
  menuOption: {
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    '&:hover': {
      color: theme.customColors.bottomColor
    }
  },
  menuOptionFont: {
    fontSize: '9vw',
    fontWeight: 'bold'
  }
}))

const FadeMenu = () => {
  const { openFab, toggleOpenFab } = useContext(MobileLayoutContext)
  const { classes } = useStyles()

  return (
    <Fade in={openFab}>
      <div className={classes.menuFab}>
        {routes.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            onClick={() => {
              toggleOpenFab()
            }}
          >
            <div className={classes.menuOption}>
              <Typography variant='h2' className={classes.menuOptionFont}>
                {label}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </Fade>
  )
}

export { FadeMenu }
