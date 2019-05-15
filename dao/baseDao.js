const configs = require('../config');
module.exports = require('jano-mysql')(configs.mysql);
