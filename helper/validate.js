const { createuserschema, createitemschema } = require("./validate_schema");

exports.userauth = async (req, res, next) => {
  const value = await createuserschema.validate(req.body);
  if (value.error) {
    return next(value.error);
  } else {
    next();
  }
};
exports.itemauth = async (req, res, next) => {
  const value = await createitemschema.validate(req.body);
  if (value.error) {
    return next(value.error);
  } else {
    next();
  }
};
