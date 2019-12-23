let express = require('express');
const router = express.Router();
const UnitController = require('../controllers/unit');

router.post('/new',UnitController.createUnit);
router.get('/', UnitController.getAllUnits);
router.get('/UnitsByName',UnitController.getAllUnitsOrderByName);
router.route('/:unitId')
    .get(UnitController.getByIdUnit)
module.exports = router;
