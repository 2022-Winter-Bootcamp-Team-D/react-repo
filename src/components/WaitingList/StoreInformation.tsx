import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './StoreInformation.scss';

export default function StoreInformation() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="" variant="standard" />
    </Box>
  );
}
