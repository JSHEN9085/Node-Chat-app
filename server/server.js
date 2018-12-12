// https://intense-stream-91987.herokuapp.com/

const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'Jun',
    text: 'Hey, what is going on?'
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  })

  socket.on('disconnect', () => {
    console.log('User was disconnect');
  }) // 'disconnect' on line 19 is event name
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
})
