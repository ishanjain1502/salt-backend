const express = require("express");
const { Router, application } = require("express");
const router = express.Router();

const signup = require("./signup");
const signin = require("./signin");

router.use("/signup", signup);
router.use("/signin", signin);

module.exports = router;