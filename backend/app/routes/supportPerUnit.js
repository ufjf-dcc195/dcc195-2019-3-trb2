let express = require('express');
const router = express.Router();
const SupportPerUnitController = require('../controllers/supportPerUnit');

router.route('/:unitId')
    .get(SupportPerUnitController.getReport);

router.route('/:unitId/json')
    .get(SupportPerUnitController.getReport);
module.exports = router;
