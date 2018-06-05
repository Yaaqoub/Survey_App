var exports = module.exports = {};

let path = require('path');

exports.index = function(req, res) {

    res.sendFile('index.html', { root: './static' });
};