const express = require("express")
const router = express.Router()
const timeStampController = require("../controllers/timeStampController")

router.get("/:date", timeStampController.getTimeStamp)



module.exports = router