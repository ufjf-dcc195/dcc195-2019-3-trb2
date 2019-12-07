let express = require('express');
const router = express.Router();
const SupportPerUnitController = require('../controllers/unit');

router.get('/', SupportPerUnitController.getReport);
module.exports = router;
