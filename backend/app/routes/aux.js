let express = require('express');
const router = express.Router();
const AuxController = require('../controllers/aux');

router.get('/home', AuxController.home);
module.exports = router;
