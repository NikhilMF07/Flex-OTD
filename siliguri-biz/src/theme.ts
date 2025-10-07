import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef6c00',
    },
    background: {
      default: '#fafafa',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 22,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
