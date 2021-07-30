const express = require("express");
const router = express.Router();

const banpaidawarBikribitaranController = require("../controller/banpaidawarBikribitaranController");
router.post("/banpaidawarbikribitaransList", banpaidawarBikribitaranController.getAllBanpaidawarBikribitaran);
router.get("/banpaidawarbikribitarans/:banpaidawarbikribitaranId", banpaidawarBikribitaranController.getBanpaidawarBikribitaran);
router.post("/banpaidawarbikribitarans", banpaidawarBikribitaranController.addBanpaidawarBikribitaran);
router.put("/banpaidawarbikribitarans/:banpaidawarbikribitaranId", banpaidawarBikribitaranController.updateBanpaidawarBikribitaran);
router.delete("/banpaidawarbikribitarans/:banpaidawarbikribitaranId", banpaidawarBikribitaranController.deleteBanpaidawarBikribitaran);
module.exports = router;