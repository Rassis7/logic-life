import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components';

import Alert from '../components/Alert';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const CardStyled = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${props => {
    if (!props.color) return;
    return css`
      box-shadow: 10px 10px 10px solid ${props.color} !important;
    `;
  }}
`;

const Conditions = ({ conditions }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [itemCondition, setItemCondition] = useState([]);

  useEffect(() => setItemCondition(conditions), [conditions]);

  const classes = useStyles();
  const handleAlert = () => setOpenAlert(!openAlert);

  const handleSubmit = () => {
    //handleAlert()
  };

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {itemCondition.map((item, index) => (
            <Grid item key={index} xs={12} md={6}>
              <CardStyled className={classes.card} color="red">
                <CardContent className={classes.cardContent}>
                  <Typography>{item.texto}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleSubmit}>
                    Enviar
                  </Button>
                </CardActions>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>

      {openAlert && <Alert open={openAlert} onClose={handleAlert} />}
    </>
  );
};

export default Conditions;
