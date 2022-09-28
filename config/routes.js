const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const createController = require('../controllers/createController');
const defaultController = require('../controllers/defaultController');
const facilityController = require('../controllers/facilityController');


module.exports = (app) => {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/create', createController);
    app.use('/facility', facilityController);
    // TODO attach other controllers

    app.all('*', defaultController);
};