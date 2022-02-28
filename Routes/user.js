const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/create", userController.createUser);
router.post("/showalluser", userController.showalluser);

module.exports = router;
