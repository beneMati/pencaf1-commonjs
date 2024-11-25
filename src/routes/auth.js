const router = require('express').Router();
const formRegister = require('../controllers/auth/renderRegister');
const formLogin = require('../controllers/auth/renderLogin');
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

router.get('/register', formRegister);

router.post('/register', register);

router.get('/login', formLogin);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;