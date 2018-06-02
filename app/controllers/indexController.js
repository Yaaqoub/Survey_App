var exports = module.exports = {};

let path = require('path');

exports.index = function(req, res) {

    console.log("OOOOOOOOOOOOOOOOOOOOOOS");
    console.log(__dirname);
    res.sendFile('index.html', { root: './static' });
};