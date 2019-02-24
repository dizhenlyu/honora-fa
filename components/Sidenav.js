import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: theme.env.drawerWidth,
      flexShrink: 0,
    },
  },
  list: {
    paddingTop: 48
  },
  appBar: {
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
  logobar: {  
    height: 56,
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },
  logoImg: {
    height: 72,
    margin: 'auto',

    [theme.breakpoints.up('sm')]: {
      height: 80,
    },
  },
  drawerPaper: {
    width: theme.env.drawerWidth,
    backgroundColor: theme.palette.primary.main
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
}

  handleDrawerToggle() {
    this.props.handleDrawerToggle();
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div >
        <div className={classes.logobar}>
          <img src="/static/img/sora-white.svg" className={classes.logoImg}></img>
        </div>
        <List className={classes.list}>
          <ListItem button key='Investments' selected>
            <ListItemIcon><TableChartIcon /></ListItemIcon>
            <ListItemText primary='Investments' />
          </ListItem>
          <ListItem button key='Performance'>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary='Performance' />
          </ListItem>
          <ListItem button key='Users'>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary='Users' />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.props.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
