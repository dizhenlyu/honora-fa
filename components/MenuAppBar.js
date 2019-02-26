import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sidenav from './Sidenav';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    marginLeft: theme.env.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.env.drawerWidth})`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  pageTitle: {
    flexGrow: 1,
    marginLeft: 0,
    fontSize: '1.15rem',

    [theme.breakpoints.up('md')]: {
      marginLeft: 24,
    },
  },
});

class MenuAppBar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, pageOn } = this.props;

    return (
      <div className={classes.root}>
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
            <Typography variant="h6" className={classes.pageTitle} color="primary">
              {pageOn.title}
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
          pageOn={pageOn}
        >
        </Sidenav>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
