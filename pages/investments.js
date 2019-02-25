/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Layout from '../components/MyLayout.js'
import EnhancedTable from '../components/EnhancedTable.js'

const styles = theme => ({
  root: {
    margin: '120px 92px auto',
    [theme.breakpoints.up('md')]: {
      margin: '120px 48px auto 258px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '120px 36px auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '120px 18px auto',
    },
  },
  button: {
    float: 'right'
  },
});

class Investments extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Layout>
          <div className={classes.root}>
            <Button variant="contained" color="secondary" className={classes.button}>
              Add New Investment
            </Button>
            <EnhancedTable></EnhancedTable>
          </div>
        </Layout>
    );
  }
}

Investments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Investments);
