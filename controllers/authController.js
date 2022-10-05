const { login } = require('../services/authService');

const authController = require('express').Router();


authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', async (req, res) => {
    const result = await login(req.body.username, req.body.password);
    const token = req.signJwt(result);
    res.cookie('jwt', token);
    res.redirect('/');
});


module.exports = authController;