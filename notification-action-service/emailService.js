const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_FROM, EMAIL_PASSWORD, LOGO_URL } = require('./config');

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASSWORD,
  },
});


function generateEmailContent(action, date) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #333; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">🚀 Action Notification Alert!</h1>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <p style="font-size: 18px; color: #333;">
          Dear user, the action <strong style="color: #555;">${action}</strong> was registered on <strong>${date}</strong>.
        </p>
        <div style="text-align: center; margin-top: 15px;">
          <img src="${LOGO_URL}" alt="Company Logo" style="width: 40%; border-radius: 8px;">
        </div>
      </div>
      <div style="padding: 15px; background-color: #333; color: white; text-align: center;">
        <p style="margin: 0;">Eternal Graphics © 2025. All rights reserved.</p>
      </div>
    </div>
  `;
}

function sendEmail(email, subject, action, date) {
  const htmlMessage = generateEmailContent(action, date);

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