const UserModel = require("../Models/User");
const mongoose = require("mongoose");
const CustomErrorHandler = require("../middlewares/customErrorHandler");
const ObjectId = mongoose.Types.ObjectId;

const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const checkUserExists = await UserModel.exists({
      username: username,
    });

    if (checkUserExists) {
      return next(CustomErrorHandler.alreadyExists("Already Username Exists"));
    }
    const data = await UserModel.create({
      username: username,
      email: email,
      password: password,
    });
    res.json({
      Success: true,
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};
exports.deleteAllUser = async (req, res, next) => {
  try {
    const data = await UserModel.deleteMany({});
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
    const data = await UserModel.aggregate([
      {
        $lookup: {
          from: "items",
          localField: "itemid",
          foreignField: "_id",
          as: "items",
        },
      },
    ]);

    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};

exports.showOneuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await UserModel.aggregate([
      { $match: { _id: ObjectId(id) } },
      {
        $lookup: {
          from: "items",
          localField: "itemid",
          foreignField: "_id",
          as: "items",
        },
      },
    ]);

    if (data.length === 0) {
      res.status(404).json({
        result: "failed",
        error: "User not Found",
      });
    } else {
      res.json({
        status: "Success",
        data: data,
      });
    }
  } catch (err) {
    return next(err);
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    const { username: inputUsername, password: inputPassword } = req.body;
    const data = await UserModel.find({
      username: inputUsername,
    });
    if (data[0].password === inputPassword) {
      const jwtSign = jwt.sign(
        { username: inputUsername, id: data[0].id },
        process.env.SECRET_KEY
      );

      res.json({
        success: true,
        data: data,
        jwtSign: jwtSign,
      });
    } else {
      next(CustomErrorHandler.notFound("check Username & Password"));
    }
  } catch (err) {
    return next(err);
  }
};
