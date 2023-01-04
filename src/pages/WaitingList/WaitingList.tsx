import { Container } from "@material-ui/core";
import React from "react";

import TimeBar from "../../components/WaitingList/TimeBar"

function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container>
      <header>
        대기 목록
      </header>
      
      <TimeBar/>

      <footer>

      </footer>
    </Container>
  );
}

export default WaitingList;