import type { FC, ReactNode } from 'react'
import { createContext, useState } from 'react'

type MobileLayoutContextProps = {
  openFab: boolean
  toggleOpenFab: () => void
}

const MobileLayoutContext = createContext<MobileLayoutContextProps>({
  openFab: false,
  toggleOpenFab: () => {}
})

type MobileLayoutContextAPIProps = {
  children: ReactNode
}

const MobileLayoutContextAPI: FC<MobileLayoutContextAPIProps> = ({
  children
}) => {
  const [openFab, setOpenFab] = useState(false)
  const toggleOpenFab = () => setOpenFab(!openFab)

  return (
    <MobileLayoutContext.Provider value={{ openFab, toggleOpenFab }}>
      {children}
    </MobileLayoutContext.Provider>
  )
}

export { MobileLayoutContext, MobileLayoutContextAPI }
