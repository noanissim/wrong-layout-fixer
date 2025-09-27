import React from 'react'
import { AppBar, Toolbar, Typography, Chip } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt'

export function Header() {
   return (
      <AppBar position="sticky" color="transparent" elevation={0}>
         <Toolbar sx={{ gap: 1, alignSelf: 'center' }}>
            <BoltIcon />
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
               Keyboard‑Language Fixer · Hebrew ⇄ English
            </Typography>
         </Toolbar>
      </AppBar>
   )
}
