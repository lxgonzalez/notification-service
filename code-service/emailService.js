const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_FROM, EMAIL_PASSWORD, LOGO_URL } = require('./config');

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASSWORD,
  },
});

function generateEmailContent(code, date) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #ec4899; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">🚀 Code Notification Alert!</h1>
      </div>
      <div style="padding: 20px; background-color: #f3f4f6;">
        <p style="font-size: 18px; color: #333;">
          The code <strong style="color: #8b5cf6;">${code}</strong>
        </p>
        <div style="text-align: center; margin-top: 15px;">
          <img src="${LOGO_URL}" alt="Company Logo" style="width: 40%; border-radius: 8px;">
        </div>
      </div>
      <div style="padding: 15px; background-color: #ec4899; color: white; text-align: center;">
        <p style="margin: 0;">Eternal Graphics © 2025. All rights reserved.</p>
      </div>
    </div>
  `;
}

function sendEmail(email, subject, code, date) {
  const htmlMessage = generateEmailContent(code, date);

  const mailOptions = {
    from: EMAIL_FROM,
    to: email,
    subject: subject,
    html: htmlMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = { sendEmail };
