import { Server as SocketIo } from 'socket.io';

let io;

const init = (httpServer) => {
  io = new SocketIo(httpServer, {
    cors: {
      origin: ['http://localhost:5173', 'https://js-task-tau.vercel.app'],
      methods: ['GET', 'POST'],
    },
  });

  let connectCount = 0;

  io.on('connection', (socket) => {
    connectCount++;
    io.emit('user count', connectCount);

    socket.on('disconnect', () => {
      connectCount--;
      io.emit('user count', connectCount);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

export { init, getIO };
