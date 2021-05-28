const express = require("express");
const router = express.Router();

const ConsumerGroupDetailsController = require("../controller/ConsumerGroupDetailsController");
router.get("/ConsumerGroupDetails", ConsumerGroupDetailsController.getAllConsumerGroupDetails);
router.get("/ConsumerGroupDetails/:ConsumerGroupDetailsId", ConsumerGroupDetailsController.getConsumerGroupDetails);
router.post("/ConsumerGroupDetails",ConsumerGroupDetailsController.addConsumerGroupDetails);
router.put("/ConsumerGroupDetails/:ConsumerGroupDetailsId", ConsumerGroupDetailsController.updateConsumerGroupDetails);
router.delete("/ConsumerGroupDetails/:ConsumerGroupDetailsId", ConsumerGroupDetailsController.deleteConsumerGroupDetails);
module.exports = router;