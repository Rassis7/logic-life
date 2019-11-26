import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Alert from '../components/Alert';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const cards = [1, 2];

const Conditions = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();

  const handleAlert = () => setOpenAlert(!openAlert);

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleAlert}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {openAlert && <Alert open={openAlert} onClose={handleAlert} />}
    </>
  );
};

export default Conditions;
