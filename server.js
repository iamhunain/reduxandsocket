const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message); // Broadcasts to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
