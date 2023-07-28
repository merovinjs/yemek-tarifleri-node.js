const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  baslik: {
    type: String,
    required: true,
    trim: true,
  },
  açıklama: {
    type: String,
    required: true,
    trim: true,
  },
  malzemeler: {
    type: [String],
    required: true,
  },
  hazirlanisi: {
    type: String,
    required: true,
    trim: true,
  },
  resim: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("post", PostSchema);
