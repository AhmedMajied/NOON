/* Author : Ahmed Mohamed Ahmed */

var mongoose = require('mongoose');
var MongoDB = require('./MongoDB');

function MediaDBModel(){}

MediaDBModel.prototype.Photo = mongoose.model('Photos',MongoDB.PhotoSchema);
MediaDBModel.prototype.Video = mongoose.model('Videos',MongoDB.VideoSchema);

/* manipulate Photos */
MediaDBModel.prototype.getPhotos = function(_callback){
    this.Photo.find().then(function(photos){
        _callback(photos);
    });
}

MediaDBModel.prototype.insertPhoto = function(newPhoto){
    newPhoto.save();
}

MediaDBModel.prototype.deletePhoto = function(photoID){
    this.Photo.findByIdAndRemove(photoID).exec();
}

/* manipulate videos */
MediaDBModel.prototype.getVideos = function(_callback){
    this.Video.find().then(function(videos){
        _callback(videos);
    });
}

MediaDBModel.prototype.insertVideo = function(newVideo){
    newVideo.save();
}

MediaDBModel.prototype.deleteVideo = function(videoID){
    this.Video.findByIdAndRemove(videoID).exec();
}

module.exports = new MediaDBModel();