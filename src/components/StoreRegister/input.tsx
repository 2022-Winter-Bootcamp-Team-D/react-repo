import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="가게명/업소명" variant="standard" />
      <TextField id="standard-basic" label="가게 번호" variant="standard" />
      <TextField id="standard-basic" label="가게 주소" variant="standard" />
      <TextField id="standard-basic" label="비밀번호 (4자리)" variant="standard" />
    </Box>
  );
}