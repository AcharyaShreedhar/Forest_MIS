const express = require("express");
const router = express.Router();

const anyasampatiController = require("../controller/anyaSampatiController");
router.post("/anyasampatiList", anyasampatiController.getAllAnyaSampati);
router.get("/anyasampati/:sampatiId", anyasampatiController.getAnyaSampati);
router.post("/anyasampati", anyasampatiController.addAnyaSampati);
router.put("/anyasampati/:sampatiId", anyasampatiController.updateAnyaSampati);
router.delete("/anyasampati/:sampatiId", anyasampatiController.deleteAnyaSampati);
module.exports = router;