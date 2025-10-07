import { Box, ButtonBase, Chip, Divider, Stack, Typography } from '@mui/material'

export type SidebarCategory = {
  name: string
  count: number
}

export function Sidebar({
  categories,
  selected,
  onSelect,
}: {
  categories: SidebarCategory[]
  selected: string
  onSelect: (name: string) => void
}) {
  return (
    <Box sx={{ width: 240, borderRight: '1px solid #eee', bgcolor: 'background.paper', p: 1 }}>
      <Typography variant="subtitle1" sx={{ px: 1, py: 1, fontWeight: 700 }}>
        Current Stock
      </Typography>
      <Divider />
      <Stack spacing={0.5} sx={{ mt: 1 }}>
        {categories.map((c) => {
          const active = c.name === selected
          return (
            <ButtonBase
              key={c.name}
              onClick={() => onSelect(c.name)}
              sx={{
                justifyContent: 'space-between',
                borderRadius: 1,
                px: 1,
                py: 1,
                width: '100%',
                bgcolor: active ? 'primary.lighter' : 'transparent',
                color: active ? 'primary.contrastText' : 'text.primary',
                '&:hover': { bgcolor: active ? 'primary.light' : 'action.hover' },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {c.name}
              </Typography>
              <Chip size="small" label={Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(c.count)} />
            </ButtonBase>
          )
        })}
      </Stack>
    </Box>
  )
}
