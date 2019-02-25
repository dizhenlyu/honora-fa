import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip'
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

let counter = 0;
function createData(name, amount, dateCompleted, dateAdded) {
  counter += 1;
  return { id: counter, name, amount, dateCompleted, dateAdded };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Project Name' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount (USD)' },
  { id: 'dateCompleted', numeric: true, disablePadding: false, label: 'Date Completed' },
  { id: 'dateAdded', numeric: true, disablePadding: false, label: 'Date Added' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
          <TableCell align='right'>Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    float: 'left'
  },
  table: {
    minWidth: 624,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  iconButton: {
    padding: '5px'
  }
});

class EnhancedTable extends React.Component {
  state = {
    order: 'desc',
    orderBy: 'dateAdded',
    data: [
      createData('Cupcake', '305,000', '12/22/2018', '12/23/2018'),
      createData('Donut', '452,000', '11/26/2018', '11/29/2018'),
      createData('Eclair', '262,000', '12/30/2018', '12/31/2018'),
      createData('Frozen yoghurt', '159,000', '09/18/2018', '09/23/2018'),
      createData('Gingerbread', '356,000', '10/26/2018', '11/03/2018'),
      createData('Honeycomb', '408,000', '10/29/2018', '11/03/2018'),
      createData('Ice cream sandwich', '237,000', '12/27/2018', '12/29/2018'),
      createData('Jelly Bean', '375,000', '12/12/2018', '12/20/2018'),
      createData('KitKat', '518,000', '09/11/2018', '09/21/2018'),
      createData('Lollipop', '392,000', '08/23/2018', '09/01/2018'),
      createData('Marshmallow', '318,000', '11/27/2018','11/30/2018'),
      createData('Nougat', '360,000', '12/28/2018', '12/30/2018'),
      createData('Oreo', '437,000', '03/27/2018', '06/02/2018'),
    ],
    page: 0,
    rowsPerPage: 5,
  };

  // TODO: handle date sort later

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };


  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell component="th" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell align="right">{n.amount}</TableCell>
                      <TableCell align="right">{n.dateCompleted}</TableCell>
                      <TableCell align="right">{n.dateAdded}</TableCell>
                      <TableCell align="right">
                        <IconButton className={classes.iconButton}><EditIcon/></IconButton>
                        <IconButton className={classes.iconButton}><DeleteIcon/></IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
