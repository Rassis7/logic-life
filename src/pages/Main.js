import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Content from '../components/Content';
import api from '../services/api';
import RoomContext from '../context/room';
import localStorage from 'localStorage';

export default function Main() {
  const [room, setRoom] = useState();
  const [roomSplit, setRoomSplit] = useState(0);

  useEffect(() => {
    localStorage.setItem('gameOver', false);
    localStorage.setItem('score', 0);
  }, []);

  useEffect(() => {
    const getRoom = async () => {
      const response = await api.get('/comodos');
      setRoom(!!response.data.length ? response.data[roomSplit] : null);
    };
    getRoom();
  }, [roomSplit]);

  return (
    <>
      <CssBaseline />
      {/* <LifeBar /> */}
      <RoomContext.Provider
        value={{
          room,
          setRoom,
          roomSplit,
          setRoomSplit,
        }}
      >
        <Content />
      </RoomContext.Provider>
      {/* <Footer /> */}
    </>
  );
}
