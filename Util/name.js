
var random_name = require('node-random-name');

const getName =() => {
    var random_name = require('node-random-name');
    return random_name();
}

console.log(getName())
exports.getName= getName

