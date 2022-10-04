import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

// import { routes } from 'routes'

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
    minHeight: 40,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0
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
  const navigate = useNavigate()
  const { classes } = useStyles()
  const location = useLocation()

  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* {routes.map(({ label, path }) => (
            <Button
              key={path}
              className={
                path === location.pathname
                  ? classes.pressedAppBarButton
                  : classes.appBarButton
              }
              variant='text'
              onClick={() => navigate(path)}
            >
              {label}
            </Button>
          ))} */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export { Navbar }
