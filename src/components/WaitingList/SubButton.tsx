import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import './WaitingList.scss';
import {
  Link
} from "react-router-dom"; 
import axios from "axios";

function SubButton() {
  
  const [is_waiting, setIs_waiting] = useState(true); 
  const iswaitingChange = () => {
    axios.patch('http://15.164.28.246:8000/api/v1/stores/breaktimes/',{
    }, 
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    }
    )
    .then((response) => {
      localStorage.getItem('accessToken')
      console.log(response.data);
      setIs_waiting(response.data.is_waiting);
      console.log(is_waiting);
      
    })
  }

  return (
    <Container>
      <div id = "wrap">
        <br/>
        <button onClick={iswaitingChange} className={`stopRegisterButton ${is_waiting ? 'closeBg' : 'openBg'}`} >
          {is_waiting ? '대기 마감' : '대기 시작'} 
        </button>
      </div>
    </Container>
  );
}

export default SubButton;