let express = require('express')
const router = express.Router()
const attendanceController = require('../controllers/attendance')

router.get('/', attendanceController.getAllAttendance)
router.get('/duvidas', attendanceController.qtdAtendimentoNivelDuvida)

module.exports = router;
