import { useMemo, useState } from 'react'
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  InputBase,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import SyncIcon from '@mui/icons-material/Sync'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TuneIcon from '@mui/icons-material/Tune'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'

import { Sidebar } from './components/Sidebar'
import StockTable from './components/StockTable'
import { DetailsPanel } from './components/DetailsPanel'
import { stockItems } from './data'
import type { StockItem } from './types'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedRow, setSelectedRow] = useState<StockItem | null>(null)
  const [search, setSearch] = useState('')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#ef6c00',
          },
          background: {
            default: '#f6f7fb',
          },
        },
        shape: { borderRadius: 10 },
        typography: { fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial' },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: { boxShadow: 'none' },
            },
          },
        },
      }),
    []
  )

  const categoriesWithCounts = useMemo(() => {
    const sums = new Map<string, number>()
    for (const row of stockItems) {
      sums.set(row.category, (sums.get(row.category) ?? 0) + row.qty)
    }
    const list = Array.from(sums.entries()).map(([name, count]) => ({ name, count }))
    const total = list.reduce((acc, c) => acc + c.count, 0)
    return [{ name: 'All', count: total }, ...list.sort((a, b) => a.name.localeCompare(b.name))]
  }, [])

  const filteredRows = useMemo(() => {
    const byCategory = selectedCategory === 'All'
      ? stockItems
      : stockItems.filter((r) => r.category === selectedCategory)
    const s = search.trim().toLowerCase()
    if (!s) return byCategory
    return byCategory.filter((r) =>
      r.itemDescription.toLowerCase().includes(s)
    )
  }, [selectedCategory, search])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 2 }}>
          <Inventory2Icon />
          <Typography variant="h6" sx={{ fontWeight: 700, mr: 2 }}>
            Siliguri Biz App
          </Typography>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Paper
              sx={{
                px: 2,
                py: 0.5,
                maxWidth: 560,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'rgba(255,255,255,0.9)'
              }}
            >
              <SearchIcon color="action" sx={{ mr: 1 }} />
              <InputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Current Stock"
                sx={{ flex: 1 }}
              />
            </Paper>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit"><SyncIcon /></IconButton>
            <IconButton color="inherit"><ChevronLeftIcon /></IconButton>
            <IconButton color="inherit"><ChevronRightIcon /></IconButton>
            <IconButton color="inherit"><TuneIcon /></IconButton>
            <IconButton color="inherit"><AccountCircleIcon /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Sidebar
          categories={categoriesWithCounts}
          selected={selectedCategory}
          onSelect={(c) => {
            setSelectedCategory(c)
            setSelectedRow(null)
          }}
        />

        <Box sx={{ flex: 1, display: 'flex', gap: 2, p: 2, overflow: 'hidden' }}>
          <Box sx={{ flex: 1, bgcolor: 'background.paper', borderRadius: 2, p: 1, overflow: 'hidden' }}>
            <StockTable
              rows={filteredRows}
              onSelect={(row) => setSelectedRow(row)}
            />
          </Box>
          <Box sx={{ width: 420, flexShrink: 0, bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
            <DetailsPanel row={selectedRow} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
