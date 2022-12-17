const { Kafka } = require('kafkajs');

getKafkaProducer = async () => {
  const kafka = new Kafka({
    clientId: 'kafka-service',
    brokers: ['localhost:9092'],
  });
  const producer = kafka.producer();
  await producer.connect();
  return producer;
};

getKafkaConsumer = async () => {
  const kafka = new Kafka({
    clientId: 'kafka-service',
    brokers: ['localhost:9092'],
  });
  const consumer = kafka.consumer({ groupId: 'kafka-service-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
  return consumer;
};

module.exports = {
  getKafkaProducer,
  getKafkaConsumer,
};
