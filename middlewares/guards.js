function hasUser() {
    return (req, res, next) => {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user != undefined) {
            res.redirect('/');
        } else {
            next();
        }
    };
}

function hasRole(role) {
    return (req, res, next) => {
        if (req.user == undefined || req.user.roles.includes(role) == false) {
            res.redirect('/auth/login');
        } else {
            next();
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    hasRole
};