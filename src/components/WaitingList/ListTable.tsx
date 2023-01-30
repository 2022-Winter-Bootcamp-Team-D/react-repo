import * as React from 'react';
import './WaitingList.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination/TablePagination';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import {waitings, res} from './Waiting';
import {useEffect,useState} from "react";

import { Console } from 'console';
import { tokenToString } from 'typescript';

interface Column {
  id: 'waiting_id' | 'name' | 'people' | 'phone_num';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}


const columns: readonly Column[] = [

  { id: 'waiting_id', label: '순번', minWidth: 30, align: 'center', }, //(count++).toString()
  { id: 'name', label: '예약자', minWidth: 30, align: 'center' },
  {
    id: 'people',
    label: '인원 수',
    minWidth: 30,
    align: 'center',
  },
  
  {
    id: 'phone_num',
    label: '휴대폰 번호',
    minWidth: 30,
    align: 'center',
  },
];

export default function ListTable({waiting ,setTemp}:{waiting:waitings[]|undefined; setTemp:React.Dispatch<React.SetStateAction<res | undefined>>}) { //, {temp}
    //const [temp, setTemp] = useState<res>();
    let abc: number;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    //const [rows, setRows] = React.useState<waitings[]|undefined>(waiting);
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
        console.log(waiting)
    };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //대기목록 MUI 안에 있는 호출 버튼
    const Call =()=>{
      axios.post('http://15.164.28.246:8000/api/v1/stores/notifications/',{
        waiting_id: waiting[index].waiting_id
    }, 
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    })
        .then((response) => {
          console.log('성공')
      }) 
        .catch((error) => { 
          console.log('호출 실패');
        });
  }

    //대기목록 MUI 안에 있는 입장완료 버튼
    const Start = (index: number) => {
      if(waiting !== undefined) {
        axios.patch('http://15.164.28.246:8000/api/v1/stores/waitings/',{
          waiting_id: waiting[index].waiting_id
        },
        {
          headers : {Authorization: localStorage.getItem('accessToken')}
        }
        )
        .then((response) => {
          // console.log("durlghkrdls")
          // console.log(response);
          console.log('[입장완료]' + localStorage.getItem('accessToken'))
        
        }) 
        .catch((error) => { 
          console.log('Error!');
        });
    }}
    
    //대기목록 MUI 안에 있는 대기취소 버튼
      const waitingCancel = (index: number) => {
        if(waiting != undefined) {
          // console.log(waiting[index]);  //배열(?) 확인용
          // console.log(waiting[index].waiting_id);
         axios.patch<res>('http://15.164.28.246:8000/api/v1/stores/cancellations/',{
            waiting_id: waiting[index].waiting_id   
          },
          {
            headers : {Authorization: localStorage.getItem('accessToken')}
          }
          )
          .then((response) => {
            //민아) 뭐가 다른지 확인
          //   console.log(response);  //차이ㅏㄱ 뭔가??
          //   console.log(response.data)
          //console.log(response.data); // 최신 상태 배열
         // setTemp(pre => ({...pre,waiting:[...response.data.waiting]}));
            console.log('[대기강제취소]' + localStorage.getItem('accessToken'))
          })
          .catch((error) => { 
            console.log('Error!');
          });
        }}
        

       
     
  return (
    <Paper className='tableStyle'>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center">호출하기</TableCell>
              <TableCell align="center">입장완료</TableCell>
              <TableCell align="center">대기취소</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            
            {waiting?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any, index:number) => {

                if(waiting != undefined) {
                   abc = waiting.length
                }
               
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.waiting_id}>
                    {columns.map((column:any, i:number) => {
                      //console.log(waiting)
                      const value = row[column.id];
                  
                      return (
                        <TableCell key={column.id} align={column.align}>
                          
                           {column?.id === 'waiting_id'
                            ? (page*rowsPerPage)+(index+1)  : value} 
                           
                             
                        </TableCell>
                      );
                    })}
                    <TableCell onClick={() => Call()} align="center"><IconButton><NotificationsActiveIcon color="warning"/></IconButton></TableCell>
                    {/* waiting_id 대신 index를 넣어줘야 waiting_id가 6, 7 일 때 배열 값과 달라서 발생하는 에러를 해결할 수 있음 */}
                    <TableCell  onClick={() => Start(index)} align="center"><IconButton><CheckCircleIcon color="success"/></IconButton></TableCell>
                    <TableCell onClick={() => waitingCancel(index)} align="center"><IconButton><CancelIcon color="error"/></IconButton></TableCell>
                  </TableRow>
                );
              })}
          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count= {waiting?.length as number}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
// 파일에서 command+shift+f로 검색
// TablePagination의 count가 undefined,count에서 waiting을 못 읽었어!,
// 왜냐면 useEffect가 실행되기 전 컴포넌트(waiting={temp?.data})가 먼저 실행됐기 때문에 undefined 상태,
// undefined상태에서 waiting을 slice 등을 해주라고 하니까 오류가 발생한 거야
// 오류를 해결하기 위해서 undefined일 때 waiting을 빈 배열로 만들어 줘서 초기값을 만들어준겨

ListTable.defaultProps = {
 waiting:[]
}

