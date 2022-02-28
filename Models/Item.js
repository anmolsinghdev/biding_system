const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    itemCategory: {
      type: String,
    },
    itemStartingBid: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("items", ItemSchema);
module.exports = ItemModel;
