const express = require("express");
const router = express.Router();

const nijiBanBibarancontroller = require("../controller/provinceController");
router.get("/province", nijiBanBibarancontroller.getAllnijiBanBibaran);
router.get("/province/provinceId", nijiBanBibarancontroller.getnijiBanBibaran);
router.post("/province", nijiBanBibarancontroller.addnijiBanBibaran);
router.put("/province", nijiBanBibarancontroller.updatenijiBanBibaran);
router.delete("/province", nijiBanBibarancontroller.deletenijiBanBibaran);
module.exports = router;