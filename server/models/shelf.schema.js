var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShelfSchema = new Schema({
    description: {type: String},
    username: {type: String},
    image: {type: String}

});

module.exports = mongoose.model('Shelf', ShelfSchema);


