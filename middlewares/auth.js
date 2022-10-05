const jwt = require('jsonwebtoken');


module.exports = (jwtSecret) => (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const data = jwt.verify(token, jwtSecret);
            req.user = data;
        } catch (err) {
            res.cookie('jwt', '', { maxAge: 0 });
            return res.redirect('/login');
        }
    }

    req.signJwt = (data) => jwt.sign(data, jwtSecret, {
        expiresIn: '4h'
    });

    next();
};