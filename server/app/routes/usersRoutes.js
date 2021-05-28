const express = require("express");
const router = express.Router();

const usersController = require("../controller/usersController");
router.get("/users", usersController.getAllUsers);
router.get("/users/:userId", usersController.getUsers);
router.post("/users", usersController.addUsers);
router.put("/users/:userId", usersController.updateUsers);
router.delete("/users/:userId", usersController.deleteUsers);
module.exports = router;