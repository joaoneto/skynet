const net = require('net');

const client = new net.Socket();

let retrying = false;

function connectHandler() {
  retrying = false;
  console.log('connected to server');
}

function makeConnection() {
  client.connect({ port: 5580, host: '127.0.0.1' });
}

function closeHandler() {
  if (!retrying) {
    retrying = true;
    console.log('trying to connect to server');
  }
  setTimeout(makeConnection, 500);
}

client.setEncoding('utf8');

client.on('connect', connectHandler);
client.on('close', closeHandler);
client.on('error', (err) => {
  if (err.code !== 'ECONNREFUSED') {
    console.error(err);
    throw err;
  }
});

client.on('data', (data) => {
  console.log('>>>', data.toString());
  client.write('INFO\r\n');
});

makeConnection();
