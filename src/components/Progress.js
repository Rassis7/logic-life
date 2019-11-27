import React, { useMemo } from 'react';

import styled from 'styled-components';
import { Line } from 'rc-progress';
import localStorage from 'localStorage';
import { Typography } from '@material-ui/core';

import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  Star,
} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 60vw;
`;

const StyledLine = styled(Line)`
  width: 60%;
  align-self: center;
`;

const StyledTypography = styled(Typography)`
  align-self: center;
  margin-bottom: 20px !important;
  color: #ab47bc;
  font-weight: bold !important;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const icon = type => {
  const score = {
    0: () => SentimentVeryDissatisfied,
    1: () => SentimentDissatisfied,
    2: () => SentimentSatisfied,
    3: () => Star,
  };
  return score[parseInt(type)]();
};

const color = type => {
  const score = {
    0: () => '#ff0000',
    1: () => '#daa520',
    2: () => '#daa520',
    3: () => '#008000',
  };
  return score[parseInt(type)]();
};

export default function Progress() {
  const score = useMemo(() => localStorage.getItem('score'), []);
  const Icon = useMemo(() => icon(score));

  return (
    <Container>
      <StyledTypography variant="h5">
        Você acertou {score} de 4 perguntas
      </StyledTypography>
      <StyledDiv>
        <StyledLine
          percent={(parseInt(score) / 4) * 100}
          strokeWidth="3"
          strokeColor="#ab47bc"
        />
        <Icon
          style={{ fontSize: 58, color: color(score), marginTop: '-20px' }}
        />
      </StyledDiv>
    </Container>
  );
}
