const customerrorhandler = require("../middlewares/customErrorHandler");

const { createuserschema } = require("./validate_schema");
module.exports = {
  userauth: async (req, res, next) => {
    const value = await createuserschema.validate(req.body);
    if (value.error) {
      next(customerrorhandler.validateError(401));
    } else {
      next();
    }
  },
};
