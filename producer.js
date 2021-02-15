const net = require('net');

const server = net.createServer();

server.listen(5580, '0.0.0.0');

server.on('connection', (socket) => {
  // @todo remove setInterval / clearInterval
  let interval = setInterval(() => {
    console.log('>>> REQUEST INFO');
    socket.write('INFO');
  }, 1000);

  socket.setEncoding('utf8');

  socket.setTimeout(1000);

  socket.on('error', (error) => {
    console.log('error', error);
  });

  socket.on('close', () => {
    socket.end();
    socket.destroy();
    // @todo remove setInterval / clearInterval
    clearInterval(interval);
    interval = null;
  });

  socket.on('data', (data) => {
    console.log('<<< RESPONSE', data.toString());
  });
});
