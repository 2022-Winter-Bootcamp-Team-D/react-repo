import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import './WaitingList.scss';
import {
  Link
} from "react-router-dom"; 
import axios from "axios";

function SubButton() {
  
  const [store_id, setStore_id] = useState(''); // 로그인 하고 받은 스토어 아이디 넣기
  const [is_waiting, setIs_waiting] = useState(true);  // 로그인 하고 받은 스토어 아이디 가지고 조회해서 이즈웨이팅 값 넣기

  // useEffect(()=>{
  //   // 스토어 아이디 세팅 => 로그인에서 받은 스토어 아이디
  // })
  

  const iswaitingChange = () => {

    // 버튼을 누르면 스토어 아이디가 만약에 1이라고 하면, 스토어 아이디가 1인 정보에 가서 이즈웨이팅을 바꿔준다. patch

    // 스토어 아디에 접근을 해서 이즈웨티잉을 가져와서 setWait로 바꿔준다.

    // axios.patch('http://localhost:8000//api/v1/stores/breaktimes/',{
    //   store_id: store_id  //로컬스토리지에서ㅓ get해오는 함수
    // }).then(res=>
    //     setIs_waiting(!is_waiting)  // 
    // )

    setIs_waiting(!is_waiting);
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
        {is_waiting ? '대기 마감' : '이제 받을겨'} 
        </div>
      </div>
    </Container>
  );
}

export default SubButton;