import * as React from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

interface OutputAreaProps {
   output: string
   setCopied: (val: boolean) => void
}

export function OutputArea({ output, setCopied }: OutputAreaProps) {
   const copyOutput = async () => {
      if (!output) return
      try {
         await navigator.clipboard.writeText(output)
         setCopied(true)
      } catch {
         console.log('Failed copy output')
      }
   }

   return (
      <TextField
         label="Output"
         value={output}
         multiline
         minRows={4}
         fullWidth
         slotProps={{
            input: {
               readOnly: true,
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton aria-label="Copy" onClick={copyOutput} disabled={!output}>
                        <ContentCopyIcon />
                     </IconButton>
                  </InputAdornment>
               )
            }
         }}
      />
   )
}
