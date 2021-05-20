const express = require("express");
const router = express.Router();

const banxetraAtikramanAreaBibaranController = require("../controller/banxetraAtikramanAreaBibaranController");
router.get("/banxetraAtikramanAreaBibaran", banxetraAtikramanAreaBibaranController.getAllBanxetraAtikramanAreaBibaran);
router.get("/banxetraAtikramanAreaBibaran/banxetraAtikramanAreaBibaranId", banxetraAtikramanAreaBibaranController.getBanxetraAtikramanAreaBibaran);
router.post("/banxetraAtikramanAreaBibaran", banxetraAtikramanAreaBibaranController.addBanxetraAtikramanAreaBibaran);
router.put("/banxetraAtikramanAreaBibaran", banxetraAtikramanAreaBibaranController.updateBanxetraAtikramanAreaBibaran);
router.delete("/banxetraAtikramanAreaBibaran", banxetraAtikramanAreaBibaranController.deleteBanxetraAtikramanAreaBibaran);
module.exports = router;