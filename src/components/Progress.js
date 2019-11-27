import React, { useMemo } from 'react';

import { Line } from 'rc-progress';
import styled from 'styled-components';
import localStorage from 'localStorage';

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 60vw;
`;

const StyledLine = styled(Line)`
  width: 50%;
`;

export default function Progress() {
  const score = useMemo(() => localStorage.getItem('score'), []);
  console.log(score);

  return (
    <Container>
      <StyledLine
        percent={(parseInt(score) / 4) * 100}
        strokeWidth="3"
        strokeColor="#ab47bc"
      />
    </Container>
  );
}
