import MenuAppBar from './MenuAppBar'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  child: {
    width: '100%',
    margin: '120px 48px auto',
    [theme.breakpoints.down('sm')]: {
      margin: '120px 24px auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '120px 0px auto',
    },
  }
});

class Layout extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MenuAppBar />
        <div className={classes.child}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(Layout);
