import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
  },
  headerTitle: {
    flexGrow: 1,
    fontFamily: 'Homemade Apple, cursive',
    textDecoration: 'none',
    color: 'inherit',
  },
  headerButton: {
    margin: theme.spacing(2),
  },
  gridContainer: {
    width: '100%',
    marginTop: 20,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    marginTop: 20,
    borderTop: '5px solid #3f51b5',
  },
}));

export default useStyles;
