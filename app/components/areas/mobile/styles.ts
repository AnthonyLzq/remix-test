import { BottomNavigationAction, styled } from '@mui/material'

import { themeConfig } from '~/global'

const CustomBottomNavigationAction = styled(BottomNavigationAction)({
  '&.Mui-selected': {
    color: themeConfig.fab.fontColor
  }
})

export { CustomBottomNavigationAction }
