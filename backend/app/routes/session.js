let express = require('express');
const router = express.Router();
const SessionController = require('../controllers/session');
const redirect = require('../controllers/session')

router.post('/login', redirect.redirectHome, SessionController.login);
router.post('/logout', redirect.redirectLogin, SessionController.logout);
module.exports = router;
