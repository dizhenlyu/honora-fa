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

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  list: {
    paddingTop: 48
  },
  listItemIcon: {
    color: theme.palette.text.light,
  },
  listItemText: {
    color: theme.palette.text.light,
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: '#EEF4F9',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
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
    backgroundColor: '#555C78',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (min-width: 600px)': {
        height: 64,
    },
  },
  logoImg: {
    height: 80,
    margin: 'auto',
  },
  drawerPaper: {
    width: drawerWidth,
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
            <ListItemIcon><TableChartIcon className={classes.listItemIcon}/></ListItemIcon>
            <ListItemText primary='Investments' classes={{ primary: this.props.classes.listItemText }}/>
          </ListItem>
          <ListItem button key='Performance'>
            <ListItemIcon><BarChartIcon className={classes.listItemIcon}/></ListItemIcon>
            <ListItemText primary='Performance' classes={{ primary: this.props.classes.listItemText }}/>
          </ListItem>
          <ListItem button key='Users'>
            <ListItemIcon><GroupIcon className={classes.listItemIcon}/></ListItemIcon>
            <ListItemText primary='Users' classes={{ primary: this.props.classes.listItemText }}/>
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
