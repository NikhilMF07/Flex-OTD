import { Box, Divider, Stack, Typography } from '@mui/material'
import type { StockItem } from '../types'

export function DetailsPanel({ row }: { row: StockItem | null }) {
  if (!row) {
    return (
      <Box sx={{ color: 'text.secondary' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Details
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">Select a row to view details.</Typography>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {row.category}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Stack spacing={1}>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Item Description
          </Typography>
          <Typography variant="body2">{row.itemDescription}</Typography>
        </Box>
        <Stack direction="row" spacing={4}>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Length
            </Typography>
            <Typography variant="body2">{row.length}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Qty
            </Typography>
            <Typography variant="body2">
              {Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(row.qty)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Alt Qty
            </Typography>
            <Typography variant="body2">{row.altQty}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
