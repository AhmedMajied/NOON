/* Author : Ahmed Mohamed Ahmed */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function MongoDB(){
    mongoose.connect('mongodb://localhost:27017/noonDB');
}

MongoDB.prototype.PhotoSchema = new Schema ({
    source: {type: String, required: true},
    captionText: String,
    publishTime: {type: Date, default: Date.now()}
});

MongoDB.prototype.VideoSchema = new Schema({
    title: String,
    source: {type: String, required: true},
    coverSource: {type: String, required: true},
    captionText: String,
    publishTime: {type: Date, default: Date.now()},
    iconImageSource: String
});

module.exports = new MongoDB();