const UserModel = require("../Models/User");
const mongoose = require("mongoose");
const CustomErrorHandler = require("../middlewares/customErrorHandler");
const ObjectId = mongoose.Types.ObjectId;

exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (UserModel.exists({ email: email })) {
      // res.json({
      //   error: "err",
      // });
      return next(CustomErrorHandler.validateError());
    } else {
      const data = await UserModel.create({
        username: username,
        email: email,
        password: password,
      });
      res.json({
        status: "Success",
        data: data,
      });
    }
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

// exports.showalluser = async (req, res, next) => {
//   try {
//     // const data = await UserModel.find({});
//     const data = await UserModel.aggregate([
//       {
//         $project: {
//           _id: "$$REMOVE",
//         },
//       },
//     ]);

//     res.json({
//       status: "Success",
//       data: data,
//     });
//   } catch (err) {
//     return next(err);
//   }
// };

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

// exports.showOneuser = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const data = await UserModel.aggregate([
//       { $match: { _id: ObjectId(id) } },
//       {
//         $lookup: {
//           from: "items",
//         },
//       },
//       // { $project: { email: 1, _id: 0 } },
//       // {
//       // $unionWith: {
//       //   coll: "items",
//       //   pipeline: [{ $project: { itemName: 1, _id: 0 } }],
//       // },
//       // },
//     ]);

//     res.json({
//       status: "Success",
//       data: data,
//     });
//   } catch (err) {
//     return next(err);
//   }
// };
