const express = require("express");
const {getAllInsights}= require("../controllers/insightController");
const router =express.Router();

router. route("/all/insight").get(getAllInsights);
module.exports =router;