const express = require('express');
const {handleshorternURL} = require("../controller");
const router = express.Router();
router.post('/',handleshorternURL);
module.exports = router;