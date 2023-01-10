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

interface Column {
  id: 'number' | 'name' | 'people' | 'phoneNumber';
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
];

function createData(
    number: number,
    name: string,
    people: number,
    phoneNumber: string,
    ) {
    return { number, name, people, phoneNumber};
}

const rows = [
    createData(1, '김철수', 2, '010-1234-5678'),
    createData(2, '김철수', 2, '010-1234-5678'),
    createData(3, '김철수', 2, '010-1234-5678'),
    createData(4, '김철수', 2, '010-1234-5678'),
    createData(5, '김철수', 2, '010-1234-5678'),
    createData(6, '김철수', 2, '010-1234-5678'),
    createData(7, '김철수', 2, '010-1234-5678'),
    createData(8, '김철수', 2, '010-1234-5678'),
    createData(9, '김철수', 2, '010-1234-5678'),
    createData(10, '김철수', 2, '010-1234-5678'),
    createData(11, '김철수', 2, '010-1234-5678'),
    createData(12, '김철수', 2, '010-1234-5678'),
    createData(13, '김철수', 2, '010-1234-5678'),
    createData(14, '김철수', 2, '010-1234-5678'),
    createData(15, '김철수', 2, '010-1234-5678'),
    createData(16, '김철수', 2, '010-1234-5678'),
    createData(17, '김철수', 2, '010-1234-5678'),
    createData(18, '김철수', 2, '010-1234-5678'),
    createData(19, '김철수', 2, '010-1234-5678'),
    createData(20, '김철수', 2, '010-1234-5678'),
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
              <TableCell align="center">호출하기</TableCell>
              <TableCell align="center">입장완료</TableCell>
              <TableCell align="center">대기취소</TableCell>
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
                    <TableCell align="center"><IconButton><NotificationsActiveIcon color="warning"/></IconButton></TableCell>
                    <TableCell align="center"><IconButton><CheckCircleIcon color="success"/></IconButton></TableCell>
                    <TableCell align="center"><IconButton><CancelIcon color="error"/></IconButton></TableCell>
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