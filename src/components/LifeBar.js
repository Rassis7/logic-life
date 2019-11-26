import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bar: {
    position: 'fixed',
  },
  tollbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const LifeBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.bar}>
      <Toolbar className={classes.tollbar}>
        <Typography variant="h6" color="inherit">
          Album layout
        </Typography>
        <Typography variant="h6" color="inherit">
          Album layout
        </Typography>
        <Typography variant="h6" color="inherit">
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default LifeBar;
