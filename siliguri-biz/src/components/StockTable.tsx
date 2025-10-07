import * as React from 'react'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import type { StockItem } from '../types'

export interface StockTableProps {
  rows: StockItem[]
  onSelect: (row: StockItem) => void
}

export default function StockTable({ rows, onSelect }: StockTableProps) {
  const columns = React.useMemo<GridColDef[]>(
    () => [
      { field: 'itemDescription', headerName: 'Item Description', flex: 1, minWidth: 240 },
      { field: 'length', headerName: 'Length', width: 100, type: 'number' },
      {
        field: 'qty',
        headerName: 'Qty',
        width: 140,
        type: 'number',
        valueFormatter: (params: any) =>
          typeof params.value === 'number'
            ? params.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : String(params.value),
      },
      { field: 'altQty', headerName: 'Alt Qty', width: 100, type: 'number' },
    ],
    []
  )

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(r) => r.id}
      onRowClick={(params) => onSelect(params.row as StockItem)}
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
        sorting: { sortModel: [{ field: 'qty', sort: 'desc' }] },
      }}
      pageSizeOptions={[10, 25, 50]}
      sx={{ border: 'none', height: 520 }}
    />
  )
}
