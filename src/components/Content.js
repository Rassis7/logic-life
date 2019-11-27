import React, { useEffect, useState, useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import localStorage from 'localStorage';
import Image from './Image';
import Description from './Description';
import Conditions from './Conditions';
import Progress from './Progress';

import api from '../services/api';
import RoomContext from '../context/room';

const useStyles = makeStyles(theme => ({
  history: {
    background: '#fff',
    paddingTop: theme.spacing(5),
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
          question.description && (
            <Description question={question.description} />
          )
        )}
      </div>

      {gameOver === 'false' && question && question.option && (
        <Conditions conditions={question.option} introId={question.introId} />
      )}
    </main>
  );
}
