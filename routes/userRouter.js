const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.addUser);
router.route("/:id").get(userController.getUser);

module.exports = router;
