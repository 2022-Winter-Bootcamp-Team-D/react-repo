import { Box, TextField } from "@mui/material";
import React from "react";
import Logo from "../../components/CustomerRegister/Logo";
import {
    Link
  } from "react-router-dom"; 

function Login() {
    document.body.style.backgroundColor = "#FFFBD9";
    
    return(
        <div>
            <Box className="InputStyle"
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <Logo/>
                <TextField id="standard-basic" label="가게명 / 업소명" variant="standard" />
                <TextField id="standard-basic" label="비밀번호(4자리)" variant="standard" />
            </Box>
        <div className="InputStyle">
            <Link to="/WaitingList">
            <button className="ButtonStyle" >로그인</button>
            </Link>
            <Link to="/storeRegister">
                <button className="ButtonStyle2" >가게등록</button>
            </Link>
        </div>
      </div>
      );
  }

  export default Login;