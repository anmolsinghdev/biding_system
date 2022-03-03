const Customerrorhandler = require("./customErrorHandler");

exports.errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let Error = {
    message: "Internal Server Error",
    originalError: err.message,
  };
  if (err instanceof Customerrorhandler) {
    statusCode = err.status;
    Error = { message: err.message };
  }
  res.status(statusCode).json({
    Error,
  });
};
