let express = require('express');
const router = express.Router();
const attendantController = require('../controllers/attendant');

router.route('/new')
    .post(attendantController.createAttendant);

router.route('/')
    .get(attendantController.getAllAttendants);

router.route('/:userId')
    .get(attendantController.getAttendantById)
    .put(attendantController.updateAttendant)
    .delete(attendantController.deleteAttendant);

module.exports = router;