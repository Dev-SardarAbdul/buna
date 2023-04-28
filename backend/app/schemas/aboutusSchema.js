const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    multiline: true,
  },
});

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  member_logo: {
    type: String,
    required: true,
  },
});

const supervisoryCommunitySchema = new mongoose.Schema({
  image: {
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
});

const aboutUsSchema = new mongoose.Schema({
  aboutusTitle: {
    type: String,
    required: true,
  },
  aboutusDescription: {
    type: String,
    required: true,
  },
  missions: {
    type: [
      mongoose.Schema({
        icon: {
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
      }),
    ],
    required: true,
  },
  visions: {
    type: [
      mongoose.Schema({
        icon: {
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
      }),
    ],
    required: true,
  },
  goals: {
    type: [goalSchema],
    required: true,
  },
  supervisory_community: {
    type: [supervisoryCommunitySchema],
    required: true,
  },
  steering_committee_members: {
    type: [memberSchema],
    required: true,
  },
});

const AboutUs = mongoose.model(`${env.PROJECT_NAME}AboutUs`, aboutUsSchema);

module.exports = AboutUs;
