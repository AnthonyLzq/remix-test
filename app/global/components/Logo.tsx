import type { FC } from 'react'
import type { Theme } from '@mui/material'
import { Grid, Hidden } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { acecomLogo } from '~/static'
import { CustomTypoGraphy } from './styles'

const useStyles = makeStyles()((theme: Theme) => ({
  acecomLogo: {
    width: '100%',
    maxHeight: '100%',
    [theme.breakpoints.down('md')]: {
      width: '45%'
    },
    [theme.breakpoints.down('smd')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '65%'
    }
  },
  fontWrapper: {
    textAlign: 'center',
    marginTop: '20px'
  },
  titleMobile: {
    fontWeight: '700',
    fontSize: '12vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '15vw'
    }
  },
  subtitleMobile: {
    fontWeight: '300',
    fontSize: '3vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5vw'
    }
  }
}))

type LogoProps = {
  isMobile?: boolean
}

const Logo: FC<LogoProps> = ({ isMobile = false }) => {
  const { classes } = useStyles()

  return (
    <>
      <Grid
        item
        lg={4}
        md={5}
        sm={12}
        container
        justifyContent='center'
        alignContent='center'
        alignItems='center'
        style={{ width: '100%', height: '100%' }}
      >
        <img alt='acecomLogo' src={acecomLogo} className={classes.acecomLogo} />
        <Hidden mdUp>
          <div className={classes.fontWrapper}>
            <CustomTypoGraphy variant='h1' className={classes.titleMobile}>
              ACECOM
            </CustomTypoGraphy>
            <CustomTypoGraphy variant='h2' className={classes.subtitleMobile}>
              Asociación Científica Especializada en Computación
            </CustomTypoGraphy>
          </div>
        </Hidden>
      </Grid>
    </>
  )
}

export { Logo }
