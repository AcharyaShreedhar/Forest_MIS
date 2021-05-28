const express = require("express");
const router = express.Router();

const officeStaffPostController = require("../controller/officeStaffPostController");
router.get("/officeStaffPosts", officeStaffPostController.getAllOfficeStaffPosts);
router.get("/officeStaffPosts/:officeStaffPostId", officeStaffPostController.getOfficeStaffPosts);
router.post("/officeStaffPosts", officeStaffPostController.addOfficeStaffPosts);
router.put("/officeStaffPosts/:officeStaffPostId", officeStaffPostController.updateOfficeStaffPosts);
router.delete("/officeStaffPosts/:officeStaffPostId", officeStaffPostController.deleteOfficeStaffPosts);
module.exports = router;