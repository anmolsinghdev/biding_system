const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { userauth } = require("../helper/validate");
router.post("/create", userauth, userController.createUser);
router.post("/login", userController.userLogin);
router.get("/showalluser", userController.showalluser);
router.post("/showuser/:id", userController.showOneuser);
router.delete("/deletealluser", userController.deleteAllUser);

module.exports = router;
