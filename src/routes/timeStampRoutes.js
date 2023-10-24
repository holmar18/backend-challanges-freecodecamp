const express = require("express");
const router = express.Router();
const timeStampController = require("../controllers/timeStampController");

// Route for handling date parameters
router.get("/:date", timeStampController.getTimeStamp);

// Route for handling empty date parameters
router.get("/", timeStampController.getTimeStamp);

module.exports = router;
