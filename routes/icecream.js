var express = require('express');
var router = express.Router();
const icecream_controller = require("../controllers/icecream")
/* GET home page. */
router.get('/', icecream_controller.icecream_view_all_Page );

module.exports = router;