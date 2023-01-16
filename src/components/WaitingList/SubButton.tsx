import { Container } from "@material-ui/core";
import React from "react";
import './WaitingList.scss';
import {
  Link
} from "react-router-dom"; 

function SubButton() {
  
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