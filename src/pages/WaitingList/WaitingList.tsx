import { Container } from "@material-ui/core";
import React from "react";


import ListTable from "../../components/WaitingList/ListTable";
import Logo from "../../components/WaitingList/Logo";
import SubButton from "../../components/WaitingList/SubButton";
import TableTitle from "../../components/WaitingList/TableTitle";
import Calender from "../../components/WaitingList/Calender";
import StoreInformation from "../../components/WaitingList/StoreInformation";


function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container style={{display: 'flex', overflow: 'hidden'}}>
      <div>
        <Logo/>
        <Calender/>
        <div className="RoundSquare">
        <StoreInformation/>
        </div>
      </div>
      <div className="VerticalLine"></div>
      <div>
        <TableTitle/>
        <ListTable/>
      </div>
      <SubButton/>
    </Container>
  );
}

export default WaitingList;