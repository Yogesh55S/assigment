const express = require('express');
const {  handleshorternURL} = require("../controller/url");
const router = express.Router();
router.post('/',handleshorternURL);
module.exports = router;