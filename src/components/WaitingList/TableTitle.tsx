import { Container } from "@material-ui/core";
import React from "react";
import './ListTable.scss';

function TableTitle() {
  
  return (
    <Container>
      <div id = "wrap">
        <div className='tableTitle'>
          대기 목록
        </div>
        <br/>
        <div className='tableTime'>
          2022 - 12 - 30 &nbsp; 23 : 48
        </div>
      </div>
    </Container>
  );
}

export default TableTitle;