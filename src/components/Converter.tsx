import React from 'react'
import { Box, Button, Card, CardContent, Chip, Snackbar, Typography } from '@mui/material'
import { autoConvert, convertEnToHe, convertHeToEn, type Direction } from '../lib/convert'
import { InputArea } from './InputArea'
import { OutputArea } from './OutputArea'

export function Converter() {
   const [input, setInput] = React.useState('')
   const [output, setOutput] = React.useState('')
   const [mode, setMode] = React.useState<Direction>('auto')
   const [copied, setCopied] = React.useState(false)

   const performConvert = React.useCallback(() => {
      if (!input.trim()) return setOutput('')
      if (mode === 'auto') {
         const res = autoConvert(input)
         setOutput(res.value)
      } else if (mode === 'en→he') setOutput(convertEnToHe(input))
      else setOutput(convertHeToEn(input))
   }, [input, mode])

   React.useEffect(() => {
      performConvert()
   }, [performConvert])

   return (
      <Card>
         <CardContent>
            <Typography variant="h5" gutterBottom>
               Paste or type your text
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
               Fix text typed on the wrong keyboard layout (not translation).
            </Typography>

            <Typography variant="body2" color="text.secondary">
               For example:
               <Chip size="small" label="akuo → שלום" onClick={() => setInput('akuo')} sx={{ mr: 1, ml: 1 }} />
               <Chip size="small" label="ישפפט → happy" onClick={() => setInput('ישפפט')} />
            </Typography>

            <Box mt={2} display="grid" gap={2}>
               <InputArea input={input} setInput={setInput} />

               <Box display="flex" gap={1} flexWrap="wrap">
                  <Button variant="contained" onClick={performConvert}>
                     Convert (auto)
                  </Button>
               </Box>

               <OutputArea output={output} setCopied={setCopied} />
            </Box>
         </CardContent>

         <Snackbar open={copied} autoHideDuration={1800} onClose={() => setCopied(false)} message="Copied to clipboard" />
      </Card>
   )
}
