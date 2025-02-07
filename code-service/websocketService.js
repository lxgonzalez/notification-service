const WebSocket = require('ws');
const { WEBSOCKET_URL } = require('./config');
const { sendEmail } = require('./emailService');

function handleWebSocketMessage(data) {
  try {
    const message = JSON.parse(data);
    if (message.topic === 'send_code' && message.event === 'send_email_code') {
      const { email, code, date } = message;
      const subject = `Action Notification: ${code}`;
      sendEmail(email, subject, code, date);
    }
  } catch (error) {
    console.error('Error processing message:', error);
  }
}

function initializeWebSocket() {
  const ws = new WebSocket(WEBSOCKET_URL);

  ws.on('open', () => {
    console.log('Connected to WebSocket');
    const subscriptionMessage = JSON.stringify({
      topic: 'send_code',
      event: 'subscribe',
    });
    ws.send(subscriptionMessage);
    console.log('Subscription message sent:', subscriptionMessage);
  });

  ws.on('message', handleWebSocketMessage);

  ws.on('close', () => {
    console.log('Connection closed');
  });
}

module.exports = { initializeWebSocket };