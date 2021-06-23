const express = require("express");
const router = express.Router();

const consumerGroupDetailsController = require("../controller/ConsumerGroupDetailsController");
router.post(
  "/ConsumerGroupDetailsList",
  consumerGroupDetailsController.getAllConsumerGroupDetails
);
router.get(
  "/ConsumerGroupDetails/:consumerGroupDetailsId",
  consumerGroupDetailsController.getConsumerGroupDetails
);
router.post(
  "/ConsumerGroupDetails",
  consumerGroupDetailsController.addConsumerGroupDetails
);
router.put(
  "/ConsumerGroupDetails/:consumerGroupDetailsId",
  consumerGroupDetailsController.updateConsumerGroupDetails
);
router.delete(
  "/ConsumerGroupDetails/:consumerGroupDetailsId",
  consumerGroupDetailsController.deleteConsumerGroupDetails
);
module.exports = router;
