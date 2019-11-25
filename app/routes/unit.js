let express = require('express');
const router = express.Router();
const UnitController = require('../controllers/unit')

router.post('/new',UnitController.createUnit);

module.exports = router;
