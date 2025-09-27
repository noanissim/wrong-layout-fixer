import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
   palette: {
      mode: 'light',
      primary: { main: '#5c7c89' }, // calm blue‑gray
      secondary: { main: '#8bb8a8' }, // soft green
      background: { default: '#f6f8fb', paper: '#ffffff' }
   },
   shape: { borderRadius: 16 },
   typography: {
      fontFamily: ['Inter', 'Heebo', 'Rubik', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(',')
   },
   components: {
      MuiCard: { styleOverrides: { root: { boxShadow: '0 8px 24px rgba(0,0,0,0.07)' } } },
      MuiButton: { defaultProps: { disableElevation: true } }
   }
})
