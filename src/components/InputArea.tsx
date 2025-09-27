import React from 'react'
import { TextField, InputAdornment, IconButton, Tooltip } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

interface InputAreaProps {
   input: string
   setInput: (val: string) => void
}

export function InputArea({ input, setInput }: InputAreaProps) {
   return (
      <TextField
         label="Input"
         value={input}
         onChange={e => setInput(e.target.value)}
         multiline
         minRows={4}
         fullWidth
         placeholder="Type here… "
         slotProps={{
            input: {
               endAdornment: (
                  <InputAdornment position="end">
                     <Tooltip title="Clear input">
                        <IconButton aria-label="Clear input" onClick={() => setInput('')} disabled={!input}>
                           <ClearIcon />
                        </IconButton>
                     </Tooltip>
                  </InputAdornment>
               )
            }
         }}
      />
   )
}
