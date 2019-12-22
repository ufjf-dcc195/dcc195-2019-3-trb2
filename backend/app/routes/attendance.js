let express = require('express')
const router = express.Router()
const attendanceController = require('../controllers/attendance')

router.get('/', attendanceController.getAllAttendance)
router.get('/nivel', attendanceController.qtdAtendimentoNivelDuvida)
router.get('/tipo', attendanceController.qtdAtendimentoTipoDuvida)

module.exports = router;
