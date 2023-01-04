import { Container } from "@material-ui/core";
import React from "react";
import styles from './WaitingList.css';

function TimeBar() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container>
      <div style={time_bar}>
      2022 - 12 - 30   23 : 48
      </div>
    </Container>
  );
}

export default TimeBar;