import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './StoreRegisterInput.scss';
import {
  Link
} from "react-router-dom"; 
import axios from 'axios';

export default function RegisterInput() {

  const [store_name, setStore_name] = useState('')
  const [phone_num, setPhone_num] = useState('')
  const [posts, setPosts] = useState(0) //가게 주소
  const [password, setPassword] = useState('')

  const storeRegister =()=>{
      //axios.post(url : post가 연결되어야 할 api주소, data : 백엔드에서 정의한 request body).then(앞 코드가 정상작동하면 실행되는 다음 행위)
      axios.post('http://localhost:8000/api/v1/stores/signin/',{
        store_name: store_name,
        phone_num: phone_num,
        latitude: 0,
        longitude: 0,
        password: password})
        .then((res) =>localStorage.setItem("id", res.data.store_id) ) //(setItem) 로컬스토리지에 res.data.store_id를 "id"로 저장하는 코드,
                                                                      // res는 사용자 마음대로 정의, res.data.store_id는 백엔드에서 받아온 response body
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
          <TextField onChange={(e)=>{setStore_name(e.target.value)}} id="standard-basic" label="가게명 / 업소명" variant="standard" />
          <TextField  onChange={(e)=>{setPhone_num(e.target.value)}}id="standard-basic" label="가게번호" variant="standard" />
          <TextField onChange={(e)=>{setPosts(Number(e.target.value))}}id="standard-basic" label="가게주소" variant="standard" />
          <TextField onChange={(e)=>{setPassword(e.target.value)}}id="standard-basic" label="비밀번호(4자리)" variant="standard" />
        </Box>
        <Link to="/waitingList">
          <button onClick={storeRegister} className="ButtonStyle" >가게 등록</button>
        </Link>
    </div>

  );
}