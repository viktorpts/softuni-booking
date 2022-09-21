const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('catalog', {
        title: 'All Accomodation'
    });
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: 'Accomodation Details'
    });
});

module.exports = router;