const mongoose = require("mongoose");
const { env } = require("../../environment");
const expertProfileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 2000,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
  profession: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000,
  },
  social: [
    {
      icon: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
      },
      link: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000,
      },
    },
  ],

  personalInfo: [
    {
      profileTitle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
      },
      profileDescription: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 2000,
      },
    },
  ],
});

const ExpertProfile = mongoose.model(
  `${env.PROJECT_NAME}ExpertProfile`,
  expertProfileSchema
);

module.exports = { ExpertProfile };
