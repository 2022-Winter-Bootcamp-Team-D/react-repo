import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../components/CustomerRegister/Logo";
import {
    Link
  } from "react-router-dom"; 
import axios from "axios";

// 로그인, response body - access, refresh

function Login() {
    document.body.style.backgroundColor = "#FFFBD9";
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function Con() {
        console.log(email, password)
    }

    const storeLogin =()=>{
        //axios.post(url : post가 연결되어야 할 api주소, data : 백엔드에서 정의한 request body).then(앞 코드가 정상작동하면 실행되는 다음 행위)
        axios.post('http://localhost:8000/api/v1/stores/login/',{
            email: email,
            password: password})
          .then((res) =>localStorage.setItem("token", res.data.token)) //(setItem) 로컬스토리지에 res.data.store_id를 "id"로 저장하는 코드,
                                           // res는 사용자 마음대로 정의, res.data.store_id는 백엔드에서 받아온 response body
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
                    <TextField onChange={(e)=>{setPassword(e.target.value)}}id="standard-basic" label="비밀번호" variant="standard" />
            </Box>
        <div className="InputStyle">
            <Link to="/WaitingList">
            <button className="ButtonStyle" onClick={()=>{ Con()}}>로그인</button>
            </Link>
            <Link to="/storeRegister">
                <button onClick={storeLogin} className="ButtonStyle2" >가게 등록</button>
            </Link>
        </div>
      </div>
      );
  }

  export default Login;