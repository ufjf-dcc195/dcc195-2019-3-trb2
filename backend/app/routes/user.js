let express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
router.route('/new')
      .post(UserController.createUser);
router.route('/')
    .get(UserController.getAllUsers);
router.route('/:userId')
    .get(UserController.getByIdUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);
module.exports = router;
