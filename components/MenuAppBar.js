import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sidenav from './Sidenav';

const styles = {
  appBar: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar 
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton 
              aria-label="Open drawer"
              className={classes.menuButton} 
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.grow}>
              Investment Project Overview
            </Typography>
            <IconButton
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Sidenav 
          mobileOpen={this.state.mobileOpen} 
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
        >
        </Sidenav>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);