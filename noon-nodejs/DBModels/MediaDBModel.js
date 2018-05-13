/* Author : Ahmed Mohamed Ahmed */

var mongoose = require('mongoose');
var MongoDB = require('./MongoDB');
var fs = require("fs");
function MediaDBModel(){}

MediaDBModel.prototype.Photo = mongoose.model('Photos',MongoDB.PhotoSchema);
MediaDBModel.prototype.Video = mongoose.model('Videos',MongoDB.VideoSchema);

/* manipulate Photos */
MediaDBModel.prototype.getPhotos = function(_callback){
    this.Photo.find().lean().then(function(photos){
        _callback(photos);
    });

}

MediaDBModel.prototype.insertPhoto = function(newPhoto){
    newPhoto.save();
}

MediaDBModel.prototype.deletePhoto = function(photoID){
    this.Photo.findById(photoID,function(err,photo){
        try{
            // Delete Related Files From FileSystem
            fs.unlink(photo.source.replace("./..", "public"));
        }
        finally{
            photo.remove()
        }
    });
}

/* manipulate videos */
MediaDBModel.prototype.getVideos = function(_callback){
    this.Video.find().lean().then(function(videos){
        _callback(videos);
    });
}

MediaDBModel.prototype.insertVideo = function(newVideo){
    newVideo.save();
}

MediaDBModel.prototype.deleteVideo = function(videoID){
    this.Video.findById(videoID,function(err,video){
        try{
            // Delete Related Files From FileSystem
            fs.unlink(video.coverSource.replace("./..", "public"));
            fs.unlink(video.source.replace("./..", "public"));
            fs.unlink(video.iconImageSource.replace("./..", "public"));
        }
        finally{
            video.remove()
        }
    });
}

module.exports = new MediaDBModel();