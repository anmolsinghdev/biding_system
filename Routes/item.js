const express = require("express");

const itemController = require("../controllers/itemController");
const router = express.Router();

router.post("/create", itemController.createItem);
router.get("/showallitem", itemController.showallItem);
router.delete("/deleteallitem", itemController.deleteAllItem);
module.exports = router;
