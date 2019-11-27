import React, { useEffect, useState, useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../components/Image';
import Description from '../components/Description';
import Conditions from '../components/Conditions';
import Progress from '../components/Progress';

import api from '../services/api';
import RoomContext from '../context/room';
import localStorage from 'localStorage';

const useStyles = makeStyles(theme => ({
  history: {
    background: '#fff',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Content() {
  const classes = useStyles();

  const [question, setQuestion] = useState({});
  const { room } = useContext(RoomContext);
  const { roomSplit } = useContext(RoomContext);
  const [gameOver, setGameOver] = useState();

  useEffect(() => {
    const go = localStorage.getItem('gameOver');
    setGameOver(go);
  }, [roomSplit]);

  useEffect(() => {
    if (room) {
      const getQuestion = async () => {
        const response = await api.get(`pergunta-${room}`);
        var rand =
          response.data[Math.floor(Math.random() * response.data.length)];
        setQuestion(rand);
      };
      getQuestion();
    }
  }, [room]);

  return (
    <main>
      <div className={classes.history}>
        <Image />
        {gameOver == 'true' ? (
          <Progress />
        ) : (
          question &&
          question.enunciado && <Description question={question.enunciado} />
        )}
      </div>

      {gameOver === 'false' && question && question.opcoes && (
        <Conditions conditions={question.opcoes} introId={question.introId} />
      )}
    </main>
  );
}
