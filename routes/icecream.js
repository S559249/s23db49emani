var express = require('express');
var router = express.Router();
const icecream_controlers = require("../controllers/icecream")
/* GET home page. */
router.get('/', icecream_controlers.icecream_view_all_Page );

module.exports = router;

/*GET detail icecream page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);

/* GET create icecream page */
router.get('/create', icecream_controlers.icecream_create_Page);

/* GET create update page */
router.get('/update', icecream_controlers.icecream_update_Page);

/* GET delete icecream page */
router.get('/delete', icecream_controlers.icecream_delete_Page);
