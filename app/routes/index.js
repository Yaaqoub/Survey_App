let indexController = require('../controllers/indexController');

module.exports = function(app) {

    /**
     * (GET Method)
     */
    app.get('/', indexController.index);
};