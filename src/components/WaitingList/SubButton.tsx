import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import './WaitingList.scss';
import {
  Link
} from "react-router-dom"; 
import axios from "axios";

function SubButton() {
  
  const [is_waiting, setIs_waiting] = useState(true);  // 로그인 하고 받은 스토어 아이디 가지고 조회해서 이즈웨이팅 값 넣기
  const iswaitingChange = () => {
    axios.patch('http://15.164.28.246:8000/api/v1/stores/breaktimes/',{
    }, 
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    }
    )
    .then((response) => {
      console.log('[대기마감]' + localStorage.getItem('accessToken'))
      console.log(response.data);
      setIs_waiting(response.data.is_waiting);
      console.log(is_waiting);
      
    })
  }

  return (
    <Container>
      <div id = "wrap">
        <Link to="/customerRegister"
        style={{ textDecoration: "none" }}>
          <button className='offlineRegisterButton'>
            NEW
          </button>
        </Link>
        <div className='offlineRegisterText'>
          현장 등록
        </div>
        <br/>
        <button onClick={iswaitingChange} className={`stopRegisterButton ${is_waiting ? 'closeBg' : 'openBg'}`} >
          {is_waiting ? 'CLOSE' : 'OPEN'} 
        </button>
        <div className=' stopRegisterText'>
        {is_waiting ? '대기 마감' : '대기 시작'} 
        </div>
      </div>
    </Container>
  );
}

export default SubButton;