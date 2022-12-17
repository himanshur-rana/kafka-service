const express = require('express');
const app = express();
const router = require('./routes/index');
const { consumeKafkaEvents } = require('./implementation/kafka-consumer');
try {
  app.listen(5001);
  app.use('/', router);
  consumeKafkaEvents();
} catch (error) {
  console.log(error);
}
