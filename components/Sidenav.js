import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import GroupIcon from '@material-ui/icons/Group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DescriptionIcon from '@material-ui/icons/Description';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const links = [
  { id: 'investments', label: 'Investments', icon: <DescriptionIcon /> },
  { id: 'performance', label: 'Performance', icon: <TrendingUpIcon /> },
  { id: 'users', label: 'Users', icon: <GroupIcon /> },
];

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
    paddingTop: 56
  },
  linkItem: {
    '&:hover': {
      textDecoration: 'none'
    }
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
  logoBar: {  
    height: 56,
    backgroundColor: theme.palette.logoBar.main,
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
      height: 75,
      paddingTop: 4,
    },
  },
  drawerPaper: {
    width: theme.env.drawerWidth,
    backgroundColor: theme.palette.primary.main,
    borderRight: 0,
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
    const { classes, theme, pageOn } = this.props;

    const drawer = (
      <div >
        <Link href='/'>
          <div className={classes.logoBar}>
            <img src="/static/img/sora-white.svg" className={classes.logoImg}></img>
          </div>
        </Link>
        <List className={classes.list}>
          {links.map(
            link => (
              <Link href={link.id} className={classes.linkItem}>
                <ListItem button key={link.id} selected={link.id === pageOn.id}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItem>
              </Link>
            ),
            this,
          )}
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
              pageOn={this.props.pageOn}
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
              pageOn={this.props.pageOn}
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
