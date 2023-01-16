import { Container } from "@material-ui/core";
import { useState } from "react";
import './WaitingList.scss';
import {
  Link
} from "react-router-dom"; 
import axios from "axios";

function SubButton() {

  const [store_id, setStore_id] = useState();
  const [iswaiting, setIswaiting] = useState('');
  const iswaitingFalse = () => {
    axios.patch('http://localhost:8000//api/v1/stores/breaktimes/',{
      store_id: store_id
    })
      .then( )
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
        <button className='stopRegisterButton'>
          CLOSE
        </button>
        <div className='stopRegisterText'>
          대기 마감
        </div>
      </div>
    </Container>
  );
}

export default SubButton;