const express = require("express");
const router = express.Router();

const inventoryController = require("../controller/inventoryController");
router.get("/inventory", inventoryController.getAllInventory);
router.get("/inventory/:inventId", inventoryController.getInventory);
router.post("/inventory", inventoryController.addInventory);
router.put("/inventory/:inventId", inventoryController.updateInventory);
router.delete("/inventory/:inventId", inventoryController.deleteInventory);
module.exports = router;