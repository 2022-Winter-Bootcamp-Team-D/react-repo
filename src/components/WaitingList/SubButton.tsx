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
    axios.patch('http://localhost:8000/api/v1/stores/breaktimes/',{
      store_id: 2 //localStorage.getItem("store_id") //회원가입(가게등록)을 해서 store_id가 생성이 돼야 localStorage에 저장이 되고,
                                                    //이후 getItem을 통해 store_id를 가져올 수 있는데, 아직 그 과정이 선행되지 않아 임의로 2로 지정해주어 확인 작업함
    })
    .then(res => setIs_waiting(!is_waiting)  
    )  
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