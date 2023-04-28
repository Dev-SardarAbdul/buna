const Joi = require("joi");

const createArticleSchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string()),
  featured: Joi.boolean().required(),
  non_featured: Joi.boolean().required(),
  tags: Joi.array().items(Joi.string()),
  video: Joi.string(),
  audio: Joi.string(),
  files: Joi.array().items(Joi.string()),
});

module.exports = {
  createArticleSchema,
};
