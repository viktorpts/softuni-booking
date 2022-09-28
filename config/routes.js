const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const createController = require('../controllers/createController');
const defaultController = require('../controllers/defaultController');


module.exports = (app) => {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/create', createController);
    // TODO attach other controllers

    app.all('*', defaultController);
};