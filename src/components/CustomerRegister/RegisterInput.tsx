import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './RegisterInput.scss';
import {
  Link
} from "react-router-dom"; 

export default function RegisterInput() {
  return (
    <div>
        <Box className="InputStyle"
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="이름" variant="standard" />
          <TextField id="standard-basic" label="전화번호" variant="standard" />
          <TextField id="standard-basic" label="인원수" variant="standard" />
        </Box>
        <Link to="/">
          <button className="ButtonStyle" >웨이팅 등록</button>
        </Link>
    </div>

  );
}
