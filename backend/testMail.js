const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "962784446be026",
    pass: "dab411d56b80f1",
  },
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: '"Tubaomakeup" <noreply@tubaomakeup.com>',
      to: "your-email@example.com", // Thay bằng email của bạn để test
      subject: "Test Mailtrap Email",
      text: "Nếu bạn nhận được email này, Mailtrap đang hoạt động!",
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Lỗi gửi email:", error);
  }
}

sendTestEmail();
