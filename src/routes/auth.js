const expres = require('express');
const router = expres.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);

module.exports = router;