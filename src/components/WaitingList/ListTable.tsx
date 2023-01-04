import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


interface Column {
  id: 'number' | 'name' | 'people' | 'phonenumber';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: '번호', minWidth: 100 },
  { id: 'name', label: '대기자', minWidth: 50 },
  {
    id: 'people',
    label: '인원수',
    minWidth: 70,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'phonenumber',
    label: '휴대폰번호',
    minWidth: 70,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  number: number;
  name: string;
  people: number;
  phonenumber: string;
}

function createData(
number: number,
name: string,
people: number,
phonenumber: string,
): Data {
  return { number, name, people, phonenumber};
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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ 
        width: '70%', 
        overflow: 'hidden' 
        }}>
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
        rowsPerPageOptions={[5, 10, 15]}
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