const { getKafkaProducer } = require('../utils/kafka-helpers');

const produceMessage = async (req, res) => {
  try {
    const producer = await getKafkaProducer();
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS user!' }],
    });
    producer.disconnect();
    res.send('success');
  } catch (error) {
    console.log(err);
  }
};
module.exports = { produceMessage };
