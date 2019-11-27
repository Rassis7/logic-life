import React, { useMemo, useCallback, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Typewriter from 'typewriter-effect';
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
    margin-bottom: 30px;
  }
`;

const TypographyStyled = styled(Typography)`
  color: #666 !important;
`;

const Description = ({ question }) => {
  const [typeWriter, setTypeWriter] = useState('');
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    if (question !== typeWriter) {
      setIndex(0);
      setTypeWriter('');
    }
  }, [question, typeWriter]);

  useEffect(() => {
    if (index < question.length) setTimeout(createTypeWriter(typeWriter), 50);
  }, [typeWriter]);

  const createTypeWriter = t => {
    setTypeWriter(`${t}${question.charAt(index)}`);
    setIndex(index + 1);
  };

  return (
    <Container className={classes.descriptionContainer}>
      <StyledLogo>
        <img src="/images/logo-fundo.png" alt="logo" />
        <div className={classes.descriptionContent}>
          <TypographyStyled variant="h6">{typeWriter}</TypographyStyled>
        </div>
      </StyledLogo>
    </Container>
  );
};

export default Description;
