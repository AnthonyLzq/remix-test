import { GlobalStyles } from '@mui/material'

const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      '*': { margin: 0, padding: 0, fontFamily: 'Nunito' },
      '*::-webkit-scrollbar': {
        backgroundColor: '#5bc1a5',
        width: 8,
        height: 8
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'grey',
        borderRadius: 15
      },
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px #3e3e3e inset',
          WebkitTextFillColor: '#ddd',
          fontFamily: 'Nunito !important',
          fontWeight: '700 !important',
          WebkitAnimation: 'autofill 0s forwards',
          animation: 'autofill 0s forwards',
          '&:hover': {
            WebkitBoxShadow: '0 0 0 1000px #3e3e3e inset',
            WebkitTextFillColor: '#ddd',
            fontFamily: 'Nunito !important',
            fontWeight: '700 !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          },
          '&:focus': {
            WebkitBoxShadow: '0 0 0 1000px #3e3e3e inset',
            WebkitTextFillColor: '#ddd',
            fontFamily: 'Nunito !important',
            fontWeight: '700 !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          },
          '&:active': {
            WebkitBoxShadow: '0 0 0 1000px #3e3e3e inset',
            WebkitTextFillColor: '#ddd',
            fontFamily: 'Nunito !important',
            fontWeight: '700 !important',
            WebkitAnimation: 'autofill 0s forwards',
            animation: 'autofill 0s forwards'
          }
        },
        '&:-internal-autofill-selected': {
          fontFamily: 'Nunito !important',
          fontWeight: '700 !important',
          '&::first-line': {
            fontFamily: 'Nunito !important',
            fontWeight: '700 !important'
          }
        },
        '&:-internal-autofill-previewed': {
          fontFamily: 'Nunito !important',
          fontWeight: '700 !important'
        }
      }
    }}
  />
)

export { GlobalStyle }
