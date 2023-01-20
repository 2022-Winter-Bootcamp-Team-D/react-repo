import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './RegisterInput.scss';
import {
  Link
} from "react-router-dom"; 
import axios from 'axios';


export default function RegisterInput() {

  const [customer_name, setCustomer_name] = useState('')
  const [phone_num, setPhone_num] = useState('')
  const [people, setPeople] = useState(0) //초기값이 0이 되어도 괜찮은가여

  function getRegisterToken(){
    let token = localStorage.getItem('store_id')
    console.log(token)
  }

  // 
  const customerRegister =()=>{
    //axios.post(url : post가 연결되어야 할 api주소, data : 백엔드에서 정의한 request body).then(앞 코드가 정상작동하면 실행되는 다음 행위)
    axios.post('http://localhost:8000/api/v1/waitings/',{
      store_id: localStorage.getItem('store_id'),
      people: people,
      token: '민아'})
      .then((res) => console.log(res)) //(setItem) 로컬스토리지에 res.data.store_id를 "id"로 저장하는 코드,
                                       // res는 사용자 마음대로 정의, res.data.store_id는 백엔드에서 받아온 response body
}

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
          <TextField onChange={(e)=>{setCustomer_name(e.target.value)}} id="standard-basic" label="이름" variant="standard" />
          <TextField onChange={(e) => {setPhone_num(e.target.value)}} id="standard-basic" label="전화번호" variant="standard" />
          <TextField onChange={(e) => {setPeople(Number(e.target.value))}} id="standard-basic" label="인원수" variant="standard" />
        </Box>
        {/* <Link to="/WaitingList"> */}
          <button onClick={customerRegister} className="ButtonStyle" >웨이팅 등록</button>
        {/* </Link> */}
    </div>

  );
}
