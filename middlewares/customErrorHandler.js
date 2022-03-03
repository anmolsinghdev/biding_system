class CustomErrorHandler extends Error {
  constructor(statuscode, message) {
    super();
    this.status = statuscode;
    this.message = message;
  }
  static notFound(message) {
    return new CustomErrorHandler(404, message);
  }
  static alreadyExists(message = "already Exist") {
    return new CustomErrorHandler(409, message);
  }
  static validateError(message = "already") {
    return new CustomErrorHandler(401, message);
  }
}
module.exports = CustomErrorHandler;
