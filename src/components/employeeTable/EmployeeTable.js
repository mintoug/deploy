import React, { useState, useContext} from 'react';
import { getComparator } from '../sortTable/SortTable';
import {TableHeader} from '../tableHeader/TableHeader';
import  SearchBar  from '../searchField/SearchField'

import { EmployeeContext } from '../employeeContext';


//material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const dayjs = require('dayjs');

/**
 * Render Employee Table
 * Component that uses material ui
 * @returns {JSX}
 */
export const EmployeeTable = () => {
   const {employees} = useContext(EmployeeContext);

  
   const originalEmployeesRows = employees.map(employee => {
    return {
      firstName: employee.name,
      lastName: employee.lastName,
      birthdate: employee.birthdate,
      department: employee.department,
      startdate: employee.startdate,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    };
  });


  const [rows, setRows] = useState(originalEmployeesRows);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  

  /**
   * Sort the list in ascending or descending order according to a property
   * (by default sort in ascending order of first names)
   * @param {object} event
   * @param {string} property
   */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  /**
   * Change the table page
   * @param {object} event
   * @param {number} newPage
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  
  //  Change the number of rows to display in the table
   
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 /**
   * Filters the display of the list of employees in the table
   * when a new value is entered in the search bar
   * @param {string} searchedVal
   */
  const requestSearch = searchedVal => {
    const filteredRows = originalEmployeesRows.filter(row => {
      return [
        row.firstName,
        row.lastName,
        row.department,
        row.street,
        row.city,
        row.state,
        row.zipCode,
      ].some(text => {
        const [formattedText, formattedSearch] = [text.trim().toLowerCase(),  searchedVal.trim().toLowerCase() ];

        return formattedText.includes(formattedSearch);
      });
    });
    setRows(filteredRows);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <SearchBar requestSearch={requestSearch}  />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort(getComparator(order, orderBy))
              .map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>
                      {dayjs(row.birthdate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>
                      {dayjs(row.startdate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{row.street}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>{row.zipCode}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={9} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ marginBottom: '36px' }}
      />
    </>
  );
};