const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendResetEmail } = require("../services/emailService");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email đã tồn tại" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email không tồn tại" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mật khẩu không đúng" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email không tồn tại" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000;
    await user.save();

    await sendResetEmail(email, resetToken);

    res.json({ message: "Email đặt lại mật khẩu đã được gửi" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

exports.resetPassword = async (req, res) => {
  try {
      const { token, newPassword } = req.body;
      const user = await User.findOne({
          resetToken: token,
          resetTokenExpiry: { $gt: Date.now() } 
      });

      if (!user) {
          return res.status(400).json({ message: "Token không hợp lệ hoặc đã hết hạn" });
      }

      user.password = await bcrypt.hash(newPassword, 10);
      user.resetToken = null; 
      user.resetTokenExpiry = null; 
      await user.save();

      res.json({ message: "Mật khẩu đã được đặt lại" });
  } catch (error) {
      console.error('Error resetting password:', error); 
      res.status(500).json({ message: "Lỗi server", error });
  }
};
