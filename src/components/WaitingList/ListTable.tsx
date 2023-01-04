import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination/TablePagination';

interface Column {
  id: 'number' | 'name' | 'people' | 'phoneNumber';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: '순번', minWidth: 170 },
  { id: 'name', label: '예약자', minWidth: 100 },
  {
    id: 'people',
    label: '인원 수',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'phoneNumber',
    label: '휴대폰 번호',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  number: number,
  name: string,
  people: number,
  phoneNumber: string,
}

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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
                  <TableRow hover role="checkbox" tabIndex={0} key={row.number}>
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