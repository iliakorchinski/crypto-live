import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TableCell from '@mui/material/TableCell'

export const TableWrapper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  overflow: 'hidden',
}))

export const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const BodyCell = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))
