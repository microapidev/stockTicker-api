const { socket } = require('../bin/www');
const companyInfo = require('../services/companyInfo');
const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.finnhub.io?token=bscqdufrh5rcu5phfvm0');

const company = companyInfo.connect(ws, function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'symbol';

    channel.assertQueue(queue, {
      durable: true
    });

    channel.consume(queue, function (data) {
      JSON.parse(data.content.toString());
      console.log('data', data);
      //Socket Trigger All Clients
      socket.emit('symbol');
    });
  });
});
module.exports = { company };
