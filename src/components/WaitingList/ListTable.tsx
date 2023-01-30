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

export default function ListTable({waiting ,setTemp}:{waiting:waitings[]|undefined; setTemp:React.Dispatch<React.SetStateAction<res | undefined>>}) { 
    let abc: number;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
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
          console.log('[입장완료]' + localStorage.getItem('accessToken'))
        }) 
        .catch((error) => { 
          console.log('Error!');
        });
    }}
    
    //대기목록 MUI 안에 있는 대기취소 버튼
      const waitingCancel = (index: number) => {
        if(waiting != undefined) {
         axios.patch<res>('http://15.164.28.246:8000/api/v1/stores/cancellations/',{
            waiting_id: waiting[index].waiting_id   
          },
          {
            headers : {Authorization: localStorage.getItem('accessToken')}
          }
          )
          .then((response) => {
            //민아) 행 삭제 시도
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

ListTable.defaultProps = {
 waiting:[]
}

