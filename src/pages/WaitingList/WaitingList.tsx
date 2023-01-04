import { Container } from "@material-ui/core";
import React from "react";

import ListTable from "../../components/WaitingList/ListTable";
import TableTitle from "../../components/WaitingList/TableTitle";


function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container>
      
      <TableTitle/>
      <ListTable/>

      <footer>
      </footer>
    </Container>
  );
}

export default WaitingList;