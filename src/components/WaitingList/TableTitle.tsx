import { Container } from "@material-ui/core";
import React from "react";
import './WaitingList.scss';

function TableTitle() {
  // 
  return (
    <Container>
      <div id = "wrap">
        {/* <div className='tableTitle'>
          대기 목록
        </div> */}
        <br/>
        <div className='tableTime'>
          대기 목록
        </div>
      </div>
    </Container>
  );
}

export default TableTitle;