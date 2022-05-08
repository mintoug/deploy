import TableHead from '@mui/material/TableHead';
import { visuallyHidden } from '@mui/utils';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';

const headCells = [
  {
    id: 'firstName',
    label: 'First Name',
  },
  {
    id: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'birthdate',
    label: 'Date of Birth',
  },
  {
    id: 'department',
    label: 'Department',
  },
  {
    id: 'startDate',
    label: 'Start Date',
  },
  {
    id: 'street',
    label: 'Street',
  },
  {
    id: 'city',
    label: 'City',
  },
  {
    id: 'state',
    label: 'State',
  },
  {
    id: 'zipCode',
    label: 'zipCode',
  },
];

/**
 * Render Table Header
 * @param {object} props
 * @returns
 */
export const TableHeader = props => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};