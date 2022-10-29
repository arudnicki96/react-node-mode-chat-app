const express = require('express');
const accountsController = require('../controllers/usersController');

const router = express.Router();

router.route('/').post(accountsController.createUser).get(accountsController.getAllUsers)
router.route('/:id').delete(accountsController.deleteUser)

module.exports = router;