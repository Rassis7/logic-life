import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../components/Image';
import Description from '../components/Description';
import Conditions from '../components/Conditions';

import api from '../services/api';

const useStyles = makeStyles(theme => ({
  history: {
    background: '#fff',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Content({ room, ...props }) {
  const classes = useStyles();
  const [question, setQuestion] = useState({});

  useEffect(() => {
    const getQuestion = async () => {
      const response = await api.get(`pergunta-${room}`);
      var rand =
        response.data[Math.floor(Math.random() * response.data.length)];
      setQuestion(rand);
    };
    getQuestion();
  }, [room]);

  return (
    <main>
      <div className={classes.history}>
        <Image room={room} />
        {question && question.enunciado && (
          <Description question={question.enunciado} />
        )}
      </div>
      {question && question.opcoes && (
        <Conditions conditions={question.opcoes} />
      )}
    </main>
  );
}
