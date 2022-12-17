const { getKafkaConsumer } = require('../utils/kafka-helpers');

const consumeKafkaEvents = async () => {
  const consumer = await getKafkaConsumer();
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

module.exports = { consumeKafkaEvents };
