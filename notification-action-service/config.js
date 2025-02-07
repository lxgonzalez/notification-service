require('dotenv').config();

module.exports = {
  EMAIL_SERVICE: 'gmail',
  WEBSOCKET_URL: process.env.WEBSOCKET_URL,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  LOGO_URL: process.env.LOGO_URL,
};