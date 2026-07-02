import type { ReactNode } from 'react'
import MuiTable from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'

import { BodyCell, HeaderCell, TableWrapper } from './Table.styles'

export interface TableColumn<T> {
  key: keyof T
  label: string
  align?: 'left' | 'center' | 'right'
  render?: (row: T) => ReactNode
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  rows: T[]
  getRowKey: (row: T) => string | number
}

export const Table = <T,>({ columns, rows, getRowKey }: TableProps<T>) => {
  return (
    <TableWrapper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <HeaderCell key={String(column.key)} align={column.align}>
                  {column.label}
                </HeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={getRowKey(row)}>
                {columns.map((column) => (
                  <BodyCell key={String(column.key)} align={column.align}>
                    {column.render ? column.render(row) : String(row[column.key])}
                  </BodyCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </TableWrapper>
  )
}
