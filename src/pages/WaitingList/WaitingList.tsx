import { Container } from "@material-ui/core";
import React from "react";

import TimeBar from "../../components/WaitingList/TimeBar"
import ManageTable from "../../components/WaitingList/ManageTable";


function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container>
      <header>
        대기 목록
      </header>
      
      <TimeBar/>
      <ManageTable/>

      <footer>
      </footer>
    </Container>
  );
}

export default WaitingList;