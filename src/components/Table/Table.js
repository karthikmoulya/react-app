import React from 'react';
import './Table.css';
import SelectField from '../Select/Select';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AutocompleteField from '../AutoCompleteField/AutoCompleteField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className="Table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Autocomplete</TableCell>
              <TableCell>Input</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="12345">
              <TableCell>
                <SelectField />
              </TableCell>
              <TableCell>
                <AutocompleteField />
              </TableCell>
              <TableCell>
                <Input placeholder="Input" />
              </TableCell>
            </TableRow>
            <TableRow key="12346">
              <TableCell>
                <SelectField />
              </TableCell>
              <TableCell>
                <AutocompleteField />
              </TableCell>
              <TableCell>
                <Input placeholder="Input" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
