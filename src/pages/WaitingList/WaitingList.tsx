import { Container } from "@material-ui/core";
import React from "react";


import ListTable from "../../components/WaitingList/ListTable";
import Logo from "../../components/WaitingList/Logo";
import SubButton from "../../components/WaitingList/SubButton";
import TableTitle from "../../components/WaitingList/TableTitle";
import Calender from "../../components/WaitingList/Calender";
import StoreInformation from "../../components/WaitingList/StoreInformation";

//대기자조회api 이 페이지에 연결되어야 함(useEffect) - store_id를 보내고 받아와야 함
//store_id를 백엔드로 넘겨주면, 백엔드에서 is_waiting, waiting(리스트), information를 받아오기 때문에
//이 information을 <StoreInformation/>에 넣어준 다음에 <TextareaAutosize를 호출할 때 value값으로 이 information을 넣어줘야 함


function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  return (
    <Container style={{display: 'flex', overflow: 'hidden'}}>
      <div>
        <Logo/>
        <Calender/>
        {/* axios 받아왔던 information정보들을 StoreInformation컴포넌트 호출할 때 넣어줘야해, 그래야 컴포넌트 값이 넘어가*/}
        <StoreInformation/>
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