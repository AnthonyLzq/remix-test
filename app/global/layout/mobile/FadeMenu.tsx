import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Theme } from '@mui/material'
import { Typography, Fade } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { MobileLayoutContext } from './context'
// import { routes } from 'routes'

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
  const navigate = useNavigate()

  return (
    <Fade in={openFab}>
      <div className={classes.menuFab}>
        {/* {routes.map(({ label, path }) => (
          <div
            key={label}
            className={classes.menuOption}
            onClick={() => {
              navigate(path)
              toggleOpenFab()
            }}
          >
            <Typography variant='h2' className={classes.menuOptionFont}>
              {label}
            </Typography>
          </div>
        ))} */}
      </div>
    </Fade>
  )
}

export { FadeMenu }
