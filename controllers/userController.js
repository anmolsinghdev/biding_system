const UserModel = require("../Models/User");

exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const data = await UserModel.create({
      username: username,
      email: email,
      password: password,
    });
    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};
exports.showalluser = async (req, res, next) => {
  try {
    const data = await UserModel.find({});
    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};
