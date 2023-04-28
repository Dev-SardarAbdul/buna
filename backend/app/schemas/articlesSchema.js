const mongoose = require("mongoose");
const { env } = require("../../environment");

const articleSchema = new mongoose.Schema({
  language: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  non_featured: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
    required: true,
  },
  video: {
    type: String,
  },
  audio: {
    type: String,
  },
  files: {
    type: [String],
  },
  favorites: [
    {
      userId: {
        type: String,
      },
      count: {
        type: String,
      },
    },
  ],
  share: [
    {
      userId: {
        type: String,
      },
      count: {
        type: String,
      },
    },
  ],
  saveLater: [
    {
      userId: {
        type: String,
      },
      count: {
        type: String,
      },
    },
  ],
});

const Article = mongoose.model(`${env.PROJECT_NAME}Articles`, articleSchema);

module.exports = { Article };
