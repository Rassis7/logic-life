import React, { useMemo, useContext } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import RoomContext from '../context/room';

const useStyles = makeStyles(theme => ({
  heroContent: {
    alignSelf: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: '30px',
    width: '40vw',
  },

  containerImage: {
    width: '400px',
    height: '400px',
    // background: '#ccc',
    backgroundImage: `url('images/background.png')`,
  },
  avatarCozinha: {
    position: 'relative',
    top: '100px',
    left: '100px',
    width: '38px',
    height: '52px',
    background: `url('images/char-female.png') 0 0`,
  },
  avatarQuarto: {
    position: 'relative',
    top: '250px',
    left: '280px',
    width: '38px',
    height: '52px',
    background: `url('images/char-female.png') 0 0`,
  },
  avatarBanheiro: {
    position: 'relative',
    top: '60px',
    left: '280px',
    width: '38px',
    height: '52px',
    background: `url('images/char-female.png') 0 0`,
  },
  avatarSala: {
    position: 'relative',
    top: '250px',
    left: '100px',
    width: '38px',
    height: '52px',
    background: `url('images/char-female.png') 0 0`,
  },
}));

const Image = () => {
  const classes = useStyles();
  const { room } = useContext(RoomContext);

  const cssAvatar = type => {
    const avatar = {
      banheiro: classes.avatarBanheiro,
      sala: classes.avatarSala,
      quarto: classes.avatarQuarto,
      cozinha: classes.avatarCozinha,
    };
    return avatar[type];
  };

  const avatar = useMemo(() => cssAvatar(room), [room]);

  return (
    <div className={classes.heroContent}>
      <Container className={classes.containerImage} maxWidth="lg">
        <div className={avatar}></div>
      </Container>
    </div>
  );
};

export default Image;
