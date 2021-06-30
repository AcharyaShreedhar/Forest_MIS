const express = require("express");
const router = express.Router();

const banpaidawarBikribitaranController = require("../controller/banpaidawarBikribitaranController");
router.post("/banpaidawarbikribitaransList", banpaidawarBikribitaranController.getAllBanpaidawarBikribitaran);
router.get("/banpaidawarbikribitarans/:banpaidawarBikribitaranId", banpaidawarBikribitaranController.getBanpaidawarBikribitaran);
router.post("/banpaidawarbikribitarans", banpaidawarBikribitaranController.addBanpaidawarBikribitaran);
router.put("/banpaidawarbikribitarans/:banpaidawarBikribitaranId", banpaidawarBikribitaranController.updateBanpaidawarBikribitaran);
router.delete("/banpaidawarbikribitarans/:banpaidawarBikribitaranId", banpaidawarBikribitaranController.deleteBanpaidawarBikribitaran);
module.exports = router;