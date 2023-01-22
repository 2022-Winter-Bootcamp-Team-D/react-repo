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

import { Console } from 'console';

interface Column {
  id: 'waiting_id' | 'name' | 'people' | 'phone_num';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'waiting_id', label: '순번', minWidth: 30 },
  { id: 'name', label: '예약자', minWidth: 30 },
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

export default function ListTable({waiting}:{waiting:waitings[]}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);
    const [rows, setRows] = React.useState<waitings[]>(waiting);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
        console.log(rows)
    };
    
    function setrowData() {
      setRows(rows)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const Start = (index: number) => {
      axios.patch('http://localhost:8000/api/v1/stores/waitings/',{
        waiting_id: rows[index].waiting_id
      })    
      .then((res) =>setRows(res.data.waiting))  //55행 이용, res로 넘어온 정보저장 해야대, 그렇기에 setRows가   
      .catch((error) => { 
        console.log('Error!');
      });
    }
    
      const waitingCancel = (index: number) => {
        axios.patch<res>('http://localhost:8000/api/v1//stores/cancellations/',{
          waiting_id: rows[index].waiting_id
        })
        .then((res) =>setRows(res.data.waiting))
        .catch((error) => { 
          console.log('Error!');
        });
      }
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
            
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.waiting_id}>
                    {columns.map((column:any) => {
                      console.log(rows)
                      const value = row[column.id];
                     
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center"><IconButton><NotificationsActiveIcon color="warning"/></IconButton></TableCell>
                    <TableCell  onClick={() => Start(row.waiting_id)} align="center"><IconButton><CheckCircleIcon color="success"/></IconButton></TableCell>
                    <TableCell onClick={() => waitingCancel(row.waiting_id)} align="center"><IconButton><CancelIcon color="error"/></IconButton></TableCell>
                  </TableRow>
                );
              })}
          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}