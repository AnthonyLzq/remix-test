import type { Theme } from '@mui/material'
import { Box, Card, Grid } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import ErrorIcon from '@mui/icons-material/Error'
import { Formik } from 'formik'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import type { MetaFunction } from '@remix-run/node'

import { makeStyles, particlesConfig } from '~/utils'
import { MainContactTypography, SecondaryContactTypography } from '~/components'

const ReactSwal = withReactContent(Swal)
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
    marginTop: 44,
    zIndex: 40,
    width: '100%',
    height: 'calc(100% - 44px)',
    display: 'grid',
    placeContent: 'center'
  },
  cardContainer: {
    flex: '0 1 700px',
    margin: 'auto',
    borderRadius: 16,
    backgroundColor: '#3e3e3e',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%'
    }
  },
  card: {
    position: 'relative',
    borderRadius: 16
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 18px',
    backgroundColor: '#4d4d4d',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  cardHeaderLeft: {
    marginRight: 'auto'
  },
  cardHeaderRight: {
    display: 'flex'
  },
  cardHeaderButton: {
    display: 'inline-block',
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  cardHeaderEllipsis: {
    width: 3,
    height: 3,
    marginLeft: 2,
    borderRadius: 8,
    backgroundColor: '#999'
  },
  cardBody: {
    display: 'flex',
    margin: 0,
    width: 'auto'
  },
  cardBodyContent: {
    padding: '28px 48px !important',
    [theme.breakpoints.down('md')]: {
      padding: '24px 32px !important'
    }
  },
  cardBodyContentLeft: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardBodyTitle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: '#f2f0f0',
    fontSize: 26,
    fontFamily: 'Nunito, sans-serif',
    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      left: 0,
      bottom: -10,
      width: 25,
      height: 4,
      backgroundColor: '#f2f0f0'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 24
    }
  },
  cardBodyContact: {
    marginTop: 'auto',
    fontSize: 8,
    color: '#888'
  },
  cardFormGroup: {
    marginBottom: 16
  },
  cardFormControl: {
    width: '100%',
    padding: '10px 0',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #666',
    color: '#ddd',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontWeight: 700,
    '&::placeholder': {
      color: '#666'
    },
    '&:focus': {
      borderBottomColor: '#ddd'
    }
  },
  cardFormControlMessage: {
    marginTop: 40
  },
  cardFormControlButtonContainer: {
    marginBottom: 0,
    textAlign: 'right'
  },
  cardFormControlButton: {
    background: 'none',
    border: 'none',
    color: '#f2f0f0',
    fontSize: 14,
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      color: '#626262'
    }
  }
}))
const fireSwal = (successOrError: 'success' | 'error') => {
  ReactSwal.fire({
    title: (
      <p style={{ fontSize: 16 }}>
        <span style={{ display: 'flex' }}>
          {successOrError === 'success' ? (
            <>
              <InfoIcon style={{ marginRight: 8 }} /> ¡Correo enviado!
            </>
          ) : (
            <>
              <ErrorIcon style={{ marginRight: 8 }} />
              Hubo un error enviando el correo :(
            </>
          )}
        </span>
      </p>
    ),
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    background: '#4d4d4d',
    color: '#ddd',
    width: 'auto'
  })
}

export const meta: MetaFunction = () => ({
  title: 'ACECOM - Contáctanos',
  description: 'Envíanos un correo y ponte en contacto con nosotros'
})

const Contact = () => {
  const { classes } = useStyles()
  // const { mutateAsync, isLoading } = useMutation((body: ContactUsBody) =>
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/contactUs`, {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'api-key': `Bearer ${import.meta.env.VITE_BACKEND_API_KEY}`
  //     }
  //   }).then(res => res.json())
  // )
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
        <Card className={classes.cardContainer}>
          <Box className={classes.card}>
            <Box className={classes.cardHeader}>
              <Box className={classes.cardHeaderLeft}>
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#ed1c6f' }}
                />
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#e8e925' }}
                />
                <Box
                  className={classes.cardHeaderButton}
                  style={{ backgroundColor: '#74c54f' }}
                />
              </Box>
              <Box className={classes.cardHeaderRight}>
                <Box className={classes.cardHeaderEllipsis} />
                <Box className={classes.cardHeaderEllipsis} />
                <Box className={classes.cardHeaderEllipsis} />
              </Box>
            </Box>
            <Grid container spacing={2} className={classes.cardBody}>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.cardBodyContent} ${classes.cardBodyContentLeft}`}
              >
                <Box className={classes.cardBodyTitle}>
                  <MainContactTypography>CONTÁCTENOS</MainContactTypography>
                </Box>
                <Box className={classes.cardBodyContact}>
                  <SecondaryContactTypography>
                    EMAIL INFO: acecom@uni.edu.pe
                  </SecondaryContactTypography>
                </Box>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={classes.cardBodyContent}
              >
                <Formik
                  initialValues={{
                    mail: '',
                    message: '',
                    name: '',
                    phone: ''
                  }}
                  validate={values => {
                    const errors: {
                      mail?: string
                      message?: string
                      name?: string
                    } = {}

                    if (!values.mail) errors.mail = 'Requerido'
                    else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.mail
                      )
                    )
                      errors.mail = 'Invalid email address'

                    if (!values.message) errors.message = 'Requerido'

                    if (!values.name) errors.name = 'Requerido'

                    return errors
                  }}
                  onSubmit={(valuesToBeSubmitted, { setSubmitting }) => {
                    fireSwal('success')

                    // mutateAsync({
                    //   ...valuesToBeSubmitted,
                    //   subject: 'Mensaje desde la página de ACECOM'
                    // })
                    //   .then(() => {
                    //     fireSwal('success')
                    //   })
                    //   .catch(() => {
                    //     fireSwal('error')
                    //   })
                    //   .finally(() => {
                    //     setSubmitting(false)
                    //   })
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Box className={classes.cardFormGroup}>
                        <input
                          type='text'
                          name='name'
                          value={values.name}
                          className={classes.cardFormControl}
                          placeholder='NOMBRE'
                          onChange={handleChange}
                          // disabled={isLoading}
                        />
                      </Box>
                      {errors.name && touched.name && errors.name}
                      <Box className={classes.cardFormGroup}>
                        <input
                          type='text'
                          name='mail'
                          value={values.mail}
                          className={classes.cardFormControl}
                          placeholder='CORREO'
                          onChange={handleChange}
                          // disabled={isLoading}
                        />
                      </Box>
                      {errors.mail && touched.mail && errors.mail}
                      <Box className={classes.cardFormGroup}>
                        <input
                          type='text'
                          name='phone'
                          value={values.phone}
                          className={classes.cardFormControl}
                          placeholder='CELULAR'
                          onChange={handleChange}
                          // disabled={isLoading}
                        />
                      </Box>
                      {errors.phone && touched.phone && errors.phone}
                      <Box
                        className={`${classes.cardFormGroup} ${classes.cardFormControlMessage}`}
                      >
                        <input
                          type='text'
                          name='message'
                          value={values.message}
                          className={classes.cardFormControl}
                          placeholder='MENSAJE'
                          onChange={handleChange}
                          // disabled={isLoading}
                        />
                      </Box>
                      {errors.message && touched.message && errors.message}
                      <Box
                        className={`${classes.cardFormGroup} ${classes.cardFormControlButtonContainer}`}
                      >
                        <button
                          type='submit'
                          // disabled={isSubmitting || isLoading}
                          className={classes.cardFormControlButton}
                        >
                          ENVIAR
                        </button>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </div>
    </div>
  )
}

export default Contact
