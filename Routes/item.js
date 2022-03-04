const express = require("express");

const itemController = require("../controllers/itemController");
const router = express.Router();
const { itemauth } = require("../helper/validate");
router.post("/create", itemauth, itemController.createItem);
router.get("/showallitem", itemController.showallItem);
router.delete("/deleteallitem", itemController.deleteAllItem);
router.post("/bid/:id", itemController.bidOnItem);
module.exports = router;
