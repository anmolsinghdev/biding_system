const express = require("express");
const itemController = require("../controllers/itemController");
const router = express.Router();

router.post("/create", itemController.createItem);
router.post("/showallitem", itemController.showallItem);

module.exports = router;
