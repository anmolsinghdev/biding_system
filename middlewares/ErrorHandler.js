const Customerrorhandler = require("./customErrorHandler");
const { ValidationError } = require("joi");

exports.errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let Error = {
    message: "Internal Server Error",
    originalError: err.message,
  };
  if (err instanceof ValidationError) {
    statusCode = 422;
    Error = { message: err.message };
  }
  if (err instanceof Customerrorhandler) {
    statusCode = err.status;
    Error = { message: err.message };
  }
  res.status(statusCode).json({
    Error,
  });
};
