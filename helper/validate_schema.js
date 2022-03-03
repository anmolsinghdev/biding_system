const joi = require("joi");

exports.createuserschema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
exports.createitemschema = joi.object({
  itemName: joi.string().required(),
  itemCategory: joi.string().required(),
  price: joi.number().required(),
  itemStartingBid: joi.number().required(),
  CurrentBid: joi.array(),
});
