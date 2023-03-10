import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../components/CustomerRegister/Logo";
import {
    Link, useNavigate
  } from "react-router-dom"; 
import axios from "axios";
import { access } from "fs";


function Login() {
    document.body.style.backgroundColor = "#FFFBD9";
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    const storeLogin =()=>{
        axios.post('http://15.164.28.246:8000/api/v1/stores/login/',{
            email: email,
            password: password})
          .then((response) => {
            var str1 = 'Bearer '
            var token = str1.concat(response.data.access)
            localStorage.setItem('accessToken', token);
            console.log('[access]' + token)
            navigate("/WaitingList")
        }) 
    }

    const [hidePassword, setHidePassword] = useState(true);

    const toggleHidePassword =()=>{
        setHidePassword(!hidePassword);
    }
    

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
                    <TextField onChange={(e)=>{setEmail(e.target.value)}} id="standard-basic" label="이메일 주소" variant="standard" />
                    <TextField type={hidePassword ? "password":"text"}  onChange={(e)=>{setPassword(e.target.value)}}id="standard-basic" label="비밀번호" variant="standard" />
            </Box>
        <div className="InputStyle">  
        <button className="ButtonStyle" onClick={storeLogin} >로그인</button>    
        <Link to="/storeRegister">
            <button className="ButtonStyle2" >가게 등록</button>
        </Link>
        </div>
      </div>
      );
  }

  export default Login;