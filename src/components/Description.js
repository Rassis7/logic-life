import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  descriptionContainer: {
    alignSelf: 'center',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    width: '60vw',
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  descriptionContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Description = ({ question }) => {
  const classes = useStyles();

  return (
    <Container className={classes.descriptionContainer}>
      <div className={classes.descriptionContent}>
        <Typography variant="subtitle1">{question}</Typography>
      </div>
    </Container>
  );
};

export default Description;
