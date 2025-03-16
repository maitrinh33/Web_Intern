const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  description: String,
  image_url: String,
  link: String,
});

module.exports = mongoose.model("News", NewsSchema);
