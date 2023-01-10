import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './StoreRegisterInput.scss';
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
          <TextField id="standard-basic" label="가게명 / 업소명" variant="standard" />
          <TextField id="standard-basic" label="가게번호" variant="standard" />
          <TextField id="standard-basic" label="가게주소" variant="standard" />
          <TextField id="standard-basic" label="비밀번호(4자리)" variant="standard" />
        </Box>
        <Link to="/">
          <button className="ButtonStyle" >가게 등록</button>
        </Link>
    </div>

  );
}
