let socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Jun',
    text: 'it is working'
  })
})

socket.on('disconnect', function() {
  console.log('Disconnected');
})

socket.on('newMessage', function(message) {
  console.log('New Message', message);
})
