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

interface Column {
  id: 'number' | 'name' | 'people' | 'phoneNumber' | 'alarm' | 'enter' | 'cancel';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: '순번', minWidth: 30 },
  { id: 'name', label: '예약자', minWidth: 30 },
  {
    id: 'people',
    label: '인원 수',
    minWidth: 30,
    align: 'center',
  },
  {
    id: 'phoneNumber',
    label: '휴대폰 번호',
    minWidth: 30,
    align: 'center',
  },
  { id: 'alarm', label: '고객호출', minWidth: 30 },
  { id: 'enter', label: '고객입장', minWidth: 30 },
  { id: 'cancel', label: '대기취소', minWidth: 30 },
];

function createData(
    number: number,
    name: string,
    people: number,
    phoneNumber: string,
    alarm: string,
    enter: string,
    cancel: string
    ) {
    return { number, name, people, phoneNumber, alarm, enter, cancel};
}

const rows = [
    createData(1, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(2, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(3, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(4, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(5, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(6, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(7, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(8, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(9, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(10, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(11, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(12, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(13, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(14, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(15, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(10, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(16, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
    createData(17, '김철수', 2, '010-1234-5678', '호출하기', '입장완료', '취소하기'),
  ];

export default function ListTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
            </TableRow>
          </TableHead>
          <TableBody>
            
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.number}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
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