const Joi = require('joi');

const postValidation = data => {
  const schema = Joi.object({
    url: Joi.string().required(),
    channel: Joi.string().required().min(3).max(15),
    description: Joi.string().max(50),
    song: Joi.string().max(30),
    likes: Joi.number(),
    shares: Joi.number(),
    messages: Joi.number(),
  });

  return schema.validate(data);
};

module.exports.postValidation = postValidation;
