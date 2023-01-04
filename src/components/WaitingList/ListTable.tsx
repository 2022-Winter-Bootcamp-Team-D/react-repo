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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFF0C9',
    color: 'black'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 20,
  },
}));

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
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
  return (
    <TableContainer component={Paper}>
        <Paper sx={{ 
        width: '75%', 
        overflow: 'hidden',
        }}>
        <Table sx={{ minWidth: 300, maxHeight: 440  }} aria-label="sticky table">
        <TableHead>
        <TableRow>
            <StyledTableCell>순번</StyledTableCell>
            <StyledTableCell align="right">예약자</StyledTableCell>
            <StyledTableCell align="center">인원수&nbsp;(명)</StyledTableCell>
            <StyledTableCell align="right">휴대폰번호</StyledTableCell>
            
        </TableRow>
        </TableHead>
        <TableBody>
        {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
                {row.number}
            </StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="center">{row.people}</StyledTableCell>
            <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
            </StyledTableRow>
            
        ))}
        </TableBody>
        </Table>
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
    </TableContainer>
    
  );
}