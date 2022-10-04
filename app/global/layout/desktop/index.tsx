import type { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'

type DesktopLayoutProps = {
  children?: ReactNode
}

const DesktopLayout: FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          zIndex: 100
        }}
      >
        {children}
      </div>
    </>
  )
}

export { DesktopLayout }
