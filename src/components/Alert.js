import React, { useState, useEffect, useMemo, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Emoji from 'a11y-react-emoji';
import api from '../services/api';
import Typography from '@material-ui/core/Typography';
import RoomContext from '../context/room';
import localStorage from 'localStorage';

export default function Alert({ open, onClose, isCorrect, introId }) {
  const [operator, setOperator] = useState(null);

  const { room } = useContext(RoomContext);
  const { roomSplit, setRoomSplit } = useContext(RoomContext);

  useEffect(() => {
    const getOperator = async () => {
      const response = await api.get('/intro');
      const operatorFilter = response.data.filter(item => item.id === introId);
      setOperator(operatorFilter[0]);
    };
    getOperator();
  }, [introId]);

  const errorGame = useMemo(() => {
    if (operator)
      return (
        <>
          <Typography>O conceito certo era o: {operator.name}</Typography>
          <Typography><pre style={{whiteSpace: 'pre-wrap'}}>{operator.description}</pre></Typography>
        </>
      );
  }, [operator]);

  const handleClick = () => {
    setRoomSplit(roomSplit === 3 ? 0 : roomSplit + 1);
    if (roomSplit === 3) localStorage.setItem('gameOver', true);

    //add placar
    if (isCorrect) {
      const score = localStorage.getItem('score');
      localStorage.setItem('score', parseInt(score) + 1);
    }
    onClose();
  };

  return (
    <div>
      {operator && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {isCorrect
              ? 'Parabéns você acertou '
              : 'Ahhhh não nessa você vacilou '}

            <Emoji
              symbol={isCorrect ? '👏' : '😑'}
              label={isCorrect ? 'palmas' : 'triste'}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {isCorrect
                ? `Aprendemos juntos sobre o operador ${operator.name}. Avance para o próximo nível`
                : errorGame}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary">
              {!!room.length ? 'Próximo desafio' : 'Finalizar'}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
