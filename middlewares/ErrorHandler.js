exports.errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let Error = {
    message: "Internal Server Error",
    originalError: err.message,
  };
  res.status(statusCode).json({
    Error,
  });
};
