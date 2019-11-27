import React from 'react';

const RoomContext = React.createContext({
  room: {},
  roomSplit: 0,
  setRoom: () => {},
  setRoomSplit: () => {},
});

export default RoomContext;
