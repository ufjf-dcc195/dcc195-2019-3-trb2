let express = require('express');
const router = express.Router();
const UnitController = require('../controllers/unit');

router.post('/new',UnitController.createUnit);
// router.post('/newSubUnit/:unitId',UnitController.createSubUnits);
router.get('/', UnitController.getAllUnits);
router.get('/UnitsByName',UnitController.getAllUnitsOrderByName);
module.exports = router;
