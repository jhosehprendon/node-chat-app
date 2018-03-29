var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

});

socket.on('disconnect', function() {
    console.log('User was disconnected');
})

socket.on('newMessage', function(message) {
    console.log('NewMessage', message);
})