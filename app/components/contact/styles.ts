import { Typography, styled } from '@mui/material'

const MainContactTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    fontSize: 24
  }
}))

const SecondaryContactTypography = styled(Typography)({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 400,
  fontSize: 12
})

export { MainContactTypography, SecondaryContactTypography }
