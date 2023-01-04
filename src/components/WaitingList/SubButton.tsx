import { Container } from "@material-ui/core";
import React from "react";
import './WaitingList.scss';

function SubButton() {
  
  return (
    <Container>
      <div id = "wrap">
        <button className='offlineRegisterButton'>
          NEW
        </button>
        <div className='offlineRegisterText'>
          현장 등록
        </div>
        <br/>
        <button className='stopRegisterButton'>
          STOP
        </button>
        <div className='stopRegisterText'>
          대기 마감
        </div>
      </div>
    </Container>
  );
}

export default SubButton;