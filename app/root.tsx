import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { useTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import {
  DesktopLayout,
  GlobalStyle,
  MobileLayout,
  StylesContext
} from './global'
import { useContext } from 'react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ACECOM',
  viewport: 'width=device-width,initial-scale=1',
  keywords:
    'ACECOM,Asociación,Científica,Especializada,En,Computación,Association,Scientific,Specialized,In,Computing,Computer Science,Computer,Science',
  'twitter:image':
    'https://remix-test-psi.vercel.app/build/_assets/acecomLogo-EOQZHCKF.svg',
  'twitter:card': 'ACECOM',
  'twitter:creator': '@AnthonLzq',
  'twitter:title': 'ACECOM',
  'twitter:description': 'Scientific Association Specilized in Computing'
})

export default function App() {
  const styleData = useContext(StylesContext)
  const theme = useTheme<Theme>()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const Layout = isMobile ? MobileLayout : DesktopLayout

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        {styleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        <Layout>
          <GlobalStyle />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  )
}
