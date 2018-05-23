/* Author : Ahmed Mohamed Ahmed */

var mongoose = require('mongoose');
var MongoDB = require('./MongoDB');
var fs = require("fs");
function MediaDBModel(){}

MediaDBModel.prototype.Photo = mongoose.model('Photos',MongoDB.PhotoSchema);
MediaDBModel.prototype.Video = mongoose.model('Videos',MongoDB.VideoSchema);

/* retrieve all Photos */
MediaDBModel.prototype.getPhotos = function(_callback){
    this.Photo.find().lean().then(function(photos){
        _callback(photos);
    });

}

/* insert new photo into DB */
MediaDBModel.prototype.insertPhoto = function(newPhoto){
    newPhoto.save();
}

/* delete photo source from server then delete its path from DB */
MediaDBModel.prototype.deletePhoto = function(photoID){
    this.Photo.findById(photoID,function(err,photo){
        try{
            // delete photo source from server
            fs.unlinkSync(photo.source.replace("./..", "public"));
        }
        catch (error){
            console.log(error);
        }
        finally{
            photo.remove()
        }
    });
}

/* retrieve all videos */
MediaDBModel.prototype.getVideos = function(_callback){
    this.Video.find().lean().then(function(videos){
        _callback(videos);
    });
}

/* insert new video into DB */
MediaDBModel.prototype.insertVideo = function(newVideo){
    newVideo.save();
}

/* delete video related sources from server then delete their paths from DB */
MediaDBModel.prototype.deleteVideo = function(videoID){
    this.Video.findById(videoID,function(err,video){
        try{
            // delete cover source, video source and icon image source from server
            fs.unlinkSync(video.coverSource.replace("./..", "public"));
            fs.unlinkSync(video.source.replace("./..", "public"));
            fs.unlinkSync(video.iconImageSource.replace("./..", "public"));
        }
        catch (error){
            console.log(error);
        }
        finally{
            video.remove()
        }
    });
}

module.exports = new MediaDBModel();