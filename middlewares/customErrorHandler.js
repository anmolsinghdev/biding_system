class CustomErrorHandler extends Error {
  constructor(statuscode, message) {
    super();
    this.statuscode = statuscode;
    this.message = message;
  }
  static notFound(message) {
    return new customErrorHandler(404, message);
  }
  static alreadyExists(message) {
    return new customErrorHandler(409, message);
  }
  static validateError(message = "already") {
    return new customErrorHandler(401, message);
  }
}
module.exports = CustomErrorHandler;
