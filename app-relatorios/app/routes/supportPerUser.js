let express = require('express');
const router = express.Router();
const SupportPerUserController = require('../controllers/unit');

router.get('/', SupportPerUserController.getReport);
module.exports = router;
