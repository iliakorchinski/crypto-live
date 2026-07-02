import { createTheme } from '@mui/material/styles'
import { colorTokens, fontFamilyTokens } from './tokens'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colorTokens.background.app,
      paper: colorTokens.background.surface,
    },
    divider: colorTokens.border.default,
    text: {
      primary: colorTokens.text.primary,
      secondary: colorTokens.text.secondary,
      disabled: colorTokens.text.muted,
    },
    success: {
      main: colorTokens.status.positive,
      light: colorTokens.status.positiveTint,
    },
    error: {
      main: colorTokens.status.negative,
      light: colorTokens.status.negativeTint,
    },
  },
  typography: {
    fontFamily: fontFamilyTokens.sans,
  },
})
