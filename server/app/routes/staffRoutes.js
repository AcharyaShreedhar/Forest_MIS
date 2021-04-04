const express = require("express");
const router = express.Router();

const stafflist = require("../controller/staffController");
router.get("/staffs", stafflist.getAllStaffs);
module.exports = router;
