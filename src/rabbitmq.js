// rabbitmq.js

const amqp = require('amqplib');

class RabbitMQ {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    try {
      this.connection = await amqp.connect('amqp://localhost'); // Replace with your RabbitMQ server URL
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue('your_queue_name'); // Replace with your queue name
    } catch (error) {
      console.error('RabbitMQ connection error:', error);
    }
  }

  async publishMessage(message) {
    try {
      await this.channel.sendToQueue('your_queue_name', Buffer.from(JSON.stringify(message))); // Replace with your queue name
    } catch (error) {
      console.error('Error publishing message:', error);
    }
  }

  async close() {
    if (this.connection) {
      await this.connection.close();
    }
  }
}

module.exports = RabbitMQ;x