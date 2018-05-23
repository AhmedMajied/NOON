/* Authors : Mariam Ashraf Fekry, Andrew Emad Nassif */

var mediaDBModel = require('./../DBModels/MediaDBModel');
var getDurationFromDate = require("./../time.js");

function MediaController() {
}
/* author : Mariam Ashraf Fekry */
/* addPhoto to mediaDB using data that comes from view */
MediaController.prototype.addPhoto = (req, res) => {
    var path = (req.file.path).replace("public", "./..");
    var newPhoto = mediaDBModel.Photo({
        captionText: req.body.photoTitle,
        source: path,
    });
    mediaDBModel.insertPhoto(newPhoto);
}
/* getPhotos from db in MediaDB */
MediaController.prototype.getPhotos = (req, res, _callback) => {
    mediaDBModel.getPhotos(function(photos){
        photos.forEach(photo => photo.publishTime = getDurationFromDate(photo.publishTime));
        _callback(photos)
    });
}
/* delete photo from db using photoID */
MediaController.prototype.deletePhoto = (req, res) => {
    mediaDBModel.deletePhoto(req.body.mediaId);
}
/* author : Mariam Ashraf Fekry */

/* Author: Andrew Emad Nassif */

// Get Videos From Database Model
MediaController.prototype.getVideos = (req, res, _callback) => {
    mediaDBModel.getVideos(function(videos){
        //Convert publishTime to something like (x mins. ago)
        videos.forEach(video => video.publishTime = getDurationFromDate(video.publishTime));
        _callback(videos)
    });
}

// Send Video to Database Model to insert it
MediaController.prototype.addVideo = (req, res) => {
    var videoPath = (req.files[2].path).replace("public", "./..");
    var coverPath = (req.files[0].path).replace("public", "./..");
    var iconPath = (req.files[1].path).replace("public", "./..");
    var newVideo = mediaDBModel.Video({
        title: req.body.videoTitle,
        source: videoPath,
        coverSource: coverPath,
        captionText: req.body.videoCaption,
        iconImageSource: iconPath
    });
    mediaDBModel.insertVideo(newVideo);
}

// Delete Video From Database
MediaController.prototype.deleteVideo = (req, res) => {
    mediaDBModel.deleteVideo(req.body.mediaId);
}
/* Author: Andrew Emad Nassif */

module.exports = new MediaController();