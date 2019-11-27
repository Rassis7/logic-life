import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  Grid,
  CardContent,
  Card,
} from '@material-ui/core';

import { darken } from 'polished';
import styled, { css } from 'styled-components';

import Alert from '../components/Alert';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    // paddingTop: theme.spacing(8),
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
  /* box-shadow: ${props => `1px 1px 1px solid ${props.color} !important`}; */

  transition: background 1s;
  &:hover {
    background: ${darken(0.09, '#ab47bc')};
    color: #fff;
    cursor: pointer;
  }
`;

const ContainerTxtStyled = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 20px;
  span {
    font-size: 24px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Conditions = ({ conditions, introId }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [itemCondition, setItemCondition] = useState([]);
  const [isCorrect, setIsCorrect] = useState();

  useEffect(() => setItemCondition(conditions), [conditions]);

  const classes = useStyles();
  const handleAlert = () => setOpenAlert(!openAlert);

  const handleVote = item => {
    handleAlert();
    setIsCorrect(item.isCorrect);
  };

  return (
    <>
      <ContainerTxtStyled>
        <span>Escolha uma opção</span>
      </ContainerTxtStyled>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {itemCondition.map((item, index) => (
            <Grid item key={index} xs={12} md={6}>
              <CardStyled color="#ab47bc" onClick={() => handleVote(item)}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">{item.text}</Typography>
                </CardContent>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>

      {openAlert && (
        <Alert
          open={openAlert}
          onClose={handleAlert}
          isCorrect={isCorrect}
          introId={introId}
        />
      )}
    </>
  );
};

export default Conditions;
