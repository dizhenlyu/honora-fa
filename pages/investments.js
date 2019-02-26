/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Layout from '../components/MyLayout.js'
import EnhancedTable from '../components/EnhancedTable.js'

const styles = theme => ({
  button: {
    float: 'right'
  },
});

class Investments extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Layout>
          <Button variant="contained" color="secondary" className={classes.button}>
            Add New Investment
          </Button>
          <EnhancedTable></EnhancedTable>
        </Layout>
    );
  }
}

Investments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Investments);
