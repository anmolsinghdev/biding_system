const itemModel = require("../Models/Item");

exports.createItem = async (req, res, next) => {
  try {
    const { itemName, itemCategory, itemStartingBid, price } = req.body;

    const data = await itemModel.create({
      itemName: itemName,
      itemCategory: itemCategory,
      price: price,
      itemStartingBid: itemStartingBid,
    });

    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};

exports.showallItem = async (req, res, next) => {
  try {
    const data = await itemModel.find({});
    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteAllItem = async (req, res, next) => {
  try {
    const data = await itemModel.deleteMany({});
    res.json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};
