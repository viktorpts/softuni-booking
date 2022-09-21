const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host New Accomodation'
    });
});

module.exports = router;