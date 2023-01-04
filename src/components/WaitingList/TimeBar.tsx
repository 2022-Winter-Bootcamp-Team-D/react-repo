import { Container } from "@material-ui/core";
import React from "react";
import styles from './WaitingList.scss';

function TimeBar() {
  
  return (
    <Container>
      <div className={styles.timeBar}>
      2022 - 12 - 30   23 : 48
      </div>
    </Container>
  );
}

export default TimeBar;