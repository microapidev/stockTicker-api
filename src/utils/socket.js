let socket = require('../bin/www'); 
const companyInfo = require('../services/companyInfo')
const financialInfo = require('../services/financialInfo')

companyInfo.connect(`ws://localhost:${port}`, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'updateStock';

        channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for stockData messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function (data) {
            stock = JSON.parse(data.content.toString())
            console.log(" [x] Received Stock:", stock.name + " : " + stock.value);
            //Socket Trigger All Clients
            wss.emit("updatedStock", ws, stock);
        });
    });
});

financialInfo.connect(`ws://localhost:${port}`, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'updateStock';

        channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for stockData messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function (data) {
            stock = JSON.parse(data.content.toString())
            console.log(" [x] Received Stock:", stock.name + " : " + stock.value);
            //Socket Trigger All Clients
            wss.emit("updatedStock", ws, stock);
        });
    });
});