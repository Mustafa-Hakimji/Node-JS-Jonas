const express = require("express");
const toursController = require("../controller/tourController");

const router = express.Router();

router.param("id", toursController.checkId);

router
  .route("/")
  .get(toursController.getAllTours)
  .post(toursController.checkBody, toursController.addTour);
router.route("/:id").get(toursController.getTour);

module.exports = router;
