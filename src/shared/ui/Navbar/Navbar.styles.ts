import { styled } from '@mui/material/styles'
import {Box} from '@mui/material'
import List from '@mui/material/List'

export const NavbarRoot = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 64,
  padding: '0 24px',
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const NavbarBrand = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: theme.typography.fontFamily,
  fontSize: 20,
  fontWeight: 800,
  color: theme.palette.text.primary,
}))

export const LinksContainer = styled(List)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: 0,
  margin: 0,
  listStyle: 'none',
}))
