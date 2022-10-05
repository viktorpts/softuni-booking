const { create } = require('../services/roomService');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host New Accomodation'
    });
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body, req.user._id);
        res.redirect('/catalog/' + result._id);
    } catch(err) {
        res.render('create', {
            title: 'Request Error',
            error: err.message.split('\n')
        });
    }
});

module.exports = router;