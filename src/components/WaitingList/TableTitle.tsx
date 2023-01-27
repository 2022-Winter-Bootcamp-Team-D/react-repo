import { Container } from "@material-ui/core";
import React from "react";
import './WaitingList.scss';

function TableTitle() {
  // 
  return (
    <Container>
      <div id = "wrap">
        <br/>
        {/* <div className='tableTitleLineTop'></div> */}
        <div className='tableTitle'>
          대기 목록
        </div>
        {/* <div className='tableTitleLineBottom'></div> */}
      </div>
    </Container>
  );
}

export default TableTitle;