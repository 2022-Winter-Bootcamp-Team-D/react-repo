import { Container } from "@material-ui/core";
import React from "react";

import TimeBar from "../../components/WaitingList/TimeBar"
import ListTable from "../../components/WaitingList/ListTable";


function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container>
      <header>
        대기 목록
      </header>
      
      <TimeBar/>
      <ListTable/>

      <footer>
      </footer>
    </Container>
  );
}

export default WaitingList;