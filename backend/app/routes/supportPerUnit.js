let express = require('express');
const router = express.Router();
const SupportPerUnitController = require('../controllers/supportPerUnit');

router.route('/:attendantId')
    .get(SupportPerUnitController.getReport);
module.exports = router;
