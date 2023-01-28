import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './StoreRegisterInput.scss';
import {Link, useNavigate} from "react-router-dom"; 
// import StoreLocation from "./StoreLocation";
import axios from 'axios';

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

// function A {
//   latitude: 
// }

export default function RegisterInput() {
  const [name, setName] = useState('')
  const [phone_num, setPhone_num] = useState('')
  const [posts, setPosts] = useState('') //가게 주소
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [latitude, setlatitude] = useState(0);
  const [longitude, setLogitude] = useState(0);
  

  const storeSearch =()=>{
    axios.get(`map-geocode/v2/geocode?query=${posts}`,
    {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": "pg98qmcln0",
        "X-NCP-APIGW-API-KEY": "ELFgrKAgPdLsxeQDxHBhqv1jQvrpZuVfDJ4Jcmrf"
      }  
    })
      .then((response) => {
        setlatitude(response.data.addresses[0].y)
        setLogitude(response.data.addresses[0].x)
    })
  }

  const storeRegister =()=>{
      //axios.post(url : post가 연결되어야 할 api주소, data : 백엔드에서 정의한 request body).then(앞 코드가 정상작동하면 실행되는 다음 행위)
      axios.post('http://15.164.28.246:8000/api/v1/stores/signup/',{
        name: name,
        phone_num: phone_num,
        latitude: latitude,
        longitude: longitude,
        email : email,
        password: password})
        .then((response) => {
          var str1 = 'Bearer '
          var token = str1.concat(response.data.access)
          localStorage.setItem('accessToken', token);
          console.log(response.data.latitude)
          console.log(response.data.longitude)
          navigate("/WaitingList")
      })
  }
  //console.log(localStorage.getItem("id")) 로컬스토리지에서 저장되어있는 값을 꺼내와서 console.log에 출력해서 확인하는 코드(getItem)

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
          <TextField onChange={(e)=>{setName(e.target.value)}} id="standard-basic" label="가게명 / 업소명" variant="standard" />
          <TextField  onChange={(e)=>{setPhone_num(e.target.value)}}id="standard-basic" label="가게 번호" variant="standard" />
          <TextField onChange={(e)=>{setPosts((e.target.value))}}id="standard-basic" label="가게 주소" variant="standard" />
          <TextField onChange={(e)=>{setEmail(e.target.value)}}id="standard-basic" label="이메일 주소" variant="standard" />
          <TextField onChange={(e)=>{setPassword(e.target.value)}}id="standard-basic" label="비밀번호" variant="standard" />
        </Box>
        
        <button onClick={storeRegister} className="ButtonStyle" >가게 등록</button>
    </div>
  );
}