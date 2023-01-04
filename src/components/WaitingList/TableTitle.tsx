import { Container } from "@material-ui/core";
import React from "react";
import styles from './ListTable.scss';

function TableTitle() {
  
  return (
    <Container>
      <div className={styles.tableTitle}>
      대기 목록
      2022 - 12 - 30   23 : 48
      </div>
    </Container>
  );
}

export default TableTitle;