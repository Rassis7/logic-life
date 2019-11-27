import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

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

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 400px;
    height: 256px;
  }
`;

const Description = ({ question }) => {
  const classes = useStyles();

  return (
    <Container className={classes.descriptionContainer}>
      <StyledLogo>
        <img src="/images/logo-circle.png" alt="logo" />
        <div className={classes.descriptionContent}>
          <Typography variant="subtitle1">
            <Typewriter
              options={{ delay: 50 }}//aumente o valor para ficar mais lento
              onInit={(typewriter) => {
                typewriter.typeString(question)
                  .start();
              }}
            />
          </Typography>
        </div>
      </StyledLogo>
    </Container>
  );
};

export default Description;
