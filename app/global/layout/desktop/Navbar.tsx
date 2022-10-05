import { useLocation } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from '@remix-run/react'

import { makeStyles, routes } from '~/utils'

const navbarHeight = 40
const appBarButtonStyles = {
  height: navbarHeight,
  borderRadius: 0,
  color: '#FFF',
  padding: '0 25px',
  fontSize: '14px',
  fontFamily: 'Nunito Sans',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#000'
  }
}
const useStyles = makeStyles()(() => ({
  appBar: {
    backgroundColor: '#222222',
    zIndex: 200
  },
  toolbar: {
    minHeight: '40px !important',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px !important'
  },
  appBarButton: {
    ...appBarButtonStyles
  },
  pressedAppBarButton: {
    ...appBarButtonStyles,
    borderBottom: '1px solid #FFF'
  }
}))

const Navbar = () => {
  const { classes } = useStyles()
  const location = useLocation()

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {routes.map(({ label, path }) => (
          <Button
            key={path}
            className={
              path === location.pathname
                ? classes.pressedAppBarButton
                : classes.appBarButton
            }
          >
            <Link to={path}>{label}</Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export { Navbar }
