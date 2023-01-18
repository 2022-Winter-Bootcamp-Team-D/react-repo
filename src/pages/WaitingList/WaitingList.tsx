import { Container } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import ListTable from "../../components/WaitingList/ListTable";
import Logo from "../../components/WaitingList/Logo";
import SubButton from "../../components/WaitingList/SubButton";
import TableTitle from "../../components/WaitingList/TableTitle";
import Calender from "../../components/WaitingList/Calender";
import StoreInformation from "../../components/WaitingList/StoreInformation";
import axios from "axios";

//대기자조회api 이 페이지에 연결되어야 함(useEffect) - store_id를 보내고 받아와야 함
//store_id를 백엔드로 넘겨주면, 백엔드에서 is_waiting, waiting(리스트), information를 받아오기 때문에, 그리고 이 정보를 대기자 입장, 웨이팅 취소 등에서도 계속 사용하기에 useState 사용

function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";

  // const [information, setInformation] = useState('');
  // const [is_waiting, setIs_waiting] = useState(true);
  // const [waiting, setWaiting] = useState([]);  //props 이용해서 자식 페이지로 ?


  const [info,setInfo] = useState({
    information: "adsaf",
    is_waiting: true,
    waiting:[
              {
                waiting_id: 1,
                name: '민아네',
                people: 2,
                phone_num: '01011111111',
              },
              {
                waiting_id: 2,
                name: '종훈멤버',
                people: 4,
                phone_num: '01022222222',
              },
    ]
  });
  
  useEffect(()=>{
    const res=waitingScreen();
    setInfo(res);
  },[])

  const waitingScreen = () => {
    // axios.post('http://localhost:8000/api/v1/stores/waitings',{
    //   store_id: 2//localStorage.getItem("store_id"),
    // })
    // .then((res) =>{console.log(res.data)}) 

    return {
      information: "여기는 장어가 맛있어요111",
      is_waiting: true,
      waiting:[
                {
                  waiting_id: 1,
                  name: '민아네',
                  people: 2,
                  phone_num: '01011111111',
                },
                {
                  waiting_id: 2,
                  name: '종훈멤버',
                  people: 4,
                  phone_num: '01022222222',
                },
      ]
    }

  } 

  return (
    <Container style={{display: 'flex', overflow: 'hidden'}}>
      <div>
        <Logo/>
        <Calender/>
        {/* axios 받아왔던 information정보들을 StoreInformation컴포넌트 호출할 때 넣어줘야해, 그래야 컴포넌트 값이 넘어가 / 이때 useLocation 사용?*/}
        <StoreInformation information={info.information}/>
      </div>
      <div className="VerticalLine"></div>
      <div>
        <TableTitle/>
        <ListTable waiting={info.waiting}/> 
      </div>
      <SubButton/>
    </Container>
  );
}

export default WaitingList;

// function useState(arg0: string): [any, any] {
//   throw new Error("Function not implemented.");
// }
