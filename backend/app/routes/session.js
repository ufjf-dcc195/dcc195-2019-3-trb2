let express = require('express')
const router = express.Router()
const sessionController = require('../controllers/session')
const redirect = require('../controllers/session')

router.post('/login', redirect.redirectHome, sessionController.login)
router.post('/logout', redirect.redirectLogin, sessionController.logout)    
module.exports = router;
