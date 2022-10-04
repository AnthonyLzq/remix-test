import type { Theme } from '@mui/material'
import { Grid, useTheme, useMediaQuery } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

import { particlesConfig } from '~/utils'
import { Logo, Title } from '~/global/components'

const fullDiv = {
  width: '100%',
  height: '100%'
}
const useStyles = makeStyles()((theme: Theme) => ({
  particles: {
    ...fullDiv,
    backgroundColor: '#1B2327',
    position: 'absolute',
    boxSizing: 'border-box',
    zIndex: -1,
    overflow: 'hidden'
  },
  wrapper: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 40,
    width: '70%',
    height: '75%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    [theme.breakpoints.down('md')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '90%'
    }
  }
}))

const Home = () => {
  const theme = useTheme<Theme>()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { classes } = useStyles()
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        userSelect: 'none',
        position: 'fixed'
      }}
    >
      <Particles
        init={particlesInit}
        className={classes.particles}
        params={particlesConfig}
      />
      <div className={classes.wrapper}>
        <Grid container style={fullDiv}>
          <Title isMobile={isMobile} />
          <Logo isMobile={isMobile} />
        </Grid>
      </div>
    </div>
  )
}

export default Home
