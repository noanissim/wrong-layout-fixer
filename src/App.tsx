import React from 'react'
import { CssBaseline, ThemeProvider, Container, Box, Chip } from '@mui/material'
import { theme } from './theme'
import { Header } from './components/Header'
import { Converter } from './components/Converter'

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Header />
         <Container maxWidth="md">
            <Box py={4}>
               <Converter />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
               <Chip size="small" label="By Noa Nissim" variant="outlined" />
            </Box>
         </Container>
      </ThemeProvider>
   )
}
