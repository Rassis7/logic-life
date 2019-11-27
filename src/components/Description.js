import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';

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
        <Typography variant="subtitle1">
          <Typewriter
            options={{ delay: 50 }} //aumente o valor para ficar mais lento
            onInit={typewriter => {
              typewriter.typeString(question).start();
            }}
          />
        </Typography>
      </div>
    </Container>
  );
};

export default Description;