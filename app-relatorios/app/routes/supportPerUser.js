let express = require('express');
const router = express.Router();
const SupportPerUserController = require('../controllers/supportPerUser');

router.get('/supportPerUser', SupportPerUserController.getReport);
module.exports = router;
