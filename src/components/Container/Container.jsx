import { createUseStyles } from "react-jss";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = createUseStyles({
  container: {
    marginTop: "20px",
    padding: "20px",
    width: "360px",
  },
});


const Container = ({ children }) => {
  const classes = useStyles();

  return <Paper elevation={6} className={classes.container}>{children}</Paper>;
};

export default Container;
