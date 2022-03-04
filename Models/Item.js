const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemCategory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    itemStartingBid: {
      type: Number,
      required: true,
    },
    CurrentBid: { type: Array },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("items", ItemSchema);
module.exports = ItemModel;
