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

function WaitingList() {
  document.body.style.backgroundColor = "#FFFBD9";
  const [temp, setTemp] = useState<res>();

  const getList = async() => {
    axios.get<res>('http://15.164.28.246:8000/api/v1/stores/waitings/',
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    })
    .then((response) => {
      setTemp(response.data);
    })
    .catch((error) => { 
      console.log(localStorage.getItem('accessToken'));
    });
  }

  useEffect(()=>{
    getList()
  }, [])
  

  return (
    <Container style={{display: 'flex', overflow: 'hidden'}}>
      <div>
        <Logo/>
        <Calender/>
        <StoreInformation information={temp?.information}/>
      </div>
      <div className="VerticalLine"></div>
      <div>
        <TableTitle/>
        <ListTableStyle/>
        <ListTable waiting={temp?.data} setTemp={setTemp} /> 
        <SubButton/>
      </div>
    </Container>
  );
}

export default WaitingList;