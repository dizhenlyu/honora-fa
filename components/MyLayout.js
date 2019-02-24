import MenuAppBar from './MenuAppBar'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

const Layout = (props) => (
  <div className={props.root}>
    <MenuAppBar />
    {props.children}
  </div>
);

export default withStyles(styles, { withTheme: true })(Layout);
