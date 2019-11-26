import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  heroContent: {
    alignSelf: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: '30px',
    width: '50vw',
  },

  containerImage: {
    width: '400px',
    height: '400px',
    background: '#ccc',
  },
}));

const Image = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container className={classes.containerImage} maxWidth="lg"></Container>
    </div>
  );
};

export default Image;
