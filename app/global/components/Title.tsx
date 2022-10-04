import type { FC } from 'react'
import type { Theme } from '@mui/material'
import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { CustomTypoGraphy } from './styles'

const useStyles = makeStyles()((theme: Theme) => ({
  title: {
    fontWeight: '700',
    fontSize: '8.5vw',
    [theme.breakpoints.down('md')]: {
      fontSize: '10vw'
    }
  },
  subtitle: {
    fontWeight: '300',
    fontSize: '1.8vw'
  }
}))

type TitleProps = {
  isMobile?: boolean
}

const Title: FC<TitleProps> = ({ isMobile = false }) => {
  const { classes } = useStyles()

  return (
    <>
      {!isMobile && (
        <Grid
          item
          lg={8}
          md={7}
          container
          justifyContent='center'
          alignItems='center'
          style={{ width: '100%', height: '100%' }}
        >
          <div style={{ textAlign: 'center' }}>
            <CustomTypoGraphy variant='h1' className={classes.title}>
              ACECOM
            </CustomTypoGraphy>
            <CustomTypoGraphy variant='h2' className={classes.subtitle}>
              Asociación Científica Especializada en Computación
            </CustomTypoGraphy>
          </div>
        </Grid>
      )}
    </>
  )
}

export { Title }
