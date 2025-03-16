
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendResetEmail = async (to, token) => {
  const resetLink = `http://localhost:3000/reset-password/${token}`; 
  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
    to,
    subject: "Password Reset Request",
    text: `Click this link to reset your password: ${resetLink}`,
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Reset password email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = { sendResetEmail };

