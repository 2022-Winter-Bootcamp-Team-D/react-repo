import { Container } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import ListTable from "../../components/WaitingList/ListTable";
import Logo from "../../components/WaitingList/Logo";
import SubButton from "../../components/WaitingList/SubButton";
import TableTitle from "../../components/WaitingList/TableTitle";
import Calender from "../../components/WaitingList/Calender";
import StoreInformation from "../../components/WaitingList/StoreInformation";
import axios from "axios";
import { useRoutes } from "react-router-dom";
import {waitings, res} from '../../components/WaitingList/Waiting';
import ListTableStyle from "../../components/WaitingList/ListTableStyle";
import { NULL } from "sass";

//대기자조회api 이 페이지에 연결되어야 함(useEffect) - store_id를 보내고 받아와야 함
//store_id를 백엔드로 넘겨주면, 백엔드에서 is_waiting, waiting(리스트), information를 받아오기 때문에, 그리고 이 정보를 대기자 입장, 웨이팅 취소 등에서도 계속 사용하기에 useState 사용

//props 전달을 상위에서 하위로 가야해염
const test: waitings[] = [
  {
    people: 3,
    phone_num: "01011111111",
    name: "string",
    waiting_id: 1
    },

    {
      people: 2,
      phone_num: "01011111112",
      name: "string2",
      waiting_id: 2
    },

    {
      people: 3,
      phone_num: "0101231112",
      name: "string3",
      waiting_id: 3
    },
    {
      people: 3,
      phone_num: "01011111111",
      name: "string",
      waiting_id: 1
      },
  
      {
        people: 2,
        phone_num: "01011111112",
        name: "string2",
        waiting_id: 2
      },
  
      {
        people: 3,
        phone_num: "0101231112",
        name: "string3",
        waiting_id: 3
      },
    


  ]

function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";
  const [temp, setTemp] = useState<res>();

  
  // {  // 지정을 해줬더라도 덮어지기 때문에 이대로 진행해도 괜찮다!
  //   information: '',
  //   is_waiting : true, 
  //   waiting : [{
  //     waiting_id : 0,
  //     name: '민아',
  //     people: 4,
  //     phone_num: '010-0000-0000'
  //   }]}
  const getList = async() => {
    //const res = await rankingService.getMyRanking();
    axios.get<res>('http://15.164.28.246:8000/api/v1/stores/waitings/',
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    })
    .then((response) => {
      setTemp(response.data);
    })
  }

  useEffect(()=>{
    getList()
  }, [])
  console.log(temp?.data);
  
  return (
    <Container style={{display: 'flex', overflow: 'hidden'}}>
      <div>
        <Logo/>
        <Calender/> 
        {/* axios 받아왔던 information정보들을 StoreInformation컴포넌트 호출할 때 넣어줘야해, 그래야 컴포넌트 값이 넘어가 / 이때 useLocation 사용?*/}
        <StoreInformation information={temp?.information}/>
      </div>
      <div className="VerticalLine"></div>
      <div>
        <TableTitle/>
        <ListTableStyle/>
        {/* <ListTable waiting={temp?.data} /> */}
        <ListTable waiting={test} />
        <SubButton/>
      </div>
    </Container>
  );
}

export default WaitingList;