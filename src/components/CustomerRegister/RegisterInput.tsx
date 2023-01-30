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
        <Link to="/WaitingList">
          {/* <button onClick={customerRegister} className="ButtonStyle" >웨이팅 등록</button> */}
          <button className="ButtonStyle" >웨이팅 등록</button>

        </Link>
    </div>

  );
}
