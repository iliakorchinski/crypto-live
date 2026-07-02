import type { PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

import { theme } from '@/shared/config/theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
