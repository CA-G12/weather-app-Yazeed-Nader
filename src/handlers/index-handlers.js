const locationHandler = require('./location-handler.js');
const publicHandler = require('./public-handler.js');
const homeHandler = require('./home-handler.js');
const errorHandlers = require('./error-handlers.js');

module.exports = { 
    locationHandler,
    publicHandler,
    homeHandler,
    errorHandlers
};