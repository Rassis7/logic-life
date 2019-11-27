import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Content from '../components/Content';
import api from '../services/api';

export default function Main() {
  const [room, setRoom] = useState();

  useEffect(() => {
    const getRoom = async () => {
      const response = await api.get('/comodos');
      const rand =
        response.data[Math.floor(Math.random() * response.data.length)];
      setRoom(rand);
    };
    getRoom();
  }, []);

  return (
    <>
      <CssBaseline />
      {/* <LifeBar /> */}
      <Content room={room} />
      {/* <Footer /> */}
    </>
  );
}
