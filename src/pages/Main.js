import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/Footer';
import LifeBar from '../components/LifeBar';
import Image from '../components/Image';
import Description from '../components/Description';
import Conditions from '../components/Conditions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  history: {
    background: '#fff',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      {/* <LifeBar /> */}
      <main>
        <div className={classes.history}>
          <Image />
          <Description />
        </div>
        <Conditions />
      </main>
      {/* <Footer /> */}
    </>
  );
}
