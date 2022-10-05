const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();


router.get('/', async (req, res) => {
    const search = req.query.search || '';
    const city = req.query.city || '';
    const fromPrice = Number(req.query.fromPrice) || 1;
    const toPrice = Number(req.query.toPrice) || 1000;
    
    const rooms = await getAll(search, city, fromPrice, toPrice);

    res.render('catalog', {
        title: 'All Accomodation',
        rooms,
        search,
        city,
        fromPrice,
        toPrice
    });
});

router.get('/:id', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId);

    if (req.user && req.user._id == room.owner) {
        room.isOwner = true;
    }

    if (room) {
        res.render('details', {
            title: 'Accomodation Details',
            room
        });
    } else {
        res.render('roomNotFound', {
            title: 'Accomodation Details',
            roomId
        });
    }
});

module.exports = router;