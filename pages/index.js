import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/MyLayout.js'

const styles = theme => ({

});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Layout pageOn={{id: 'home', title: 'Homepage'}}>
          
        </Layout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
