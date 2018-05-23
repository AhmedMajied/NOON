const express = require('express');
var router = express.Router();
const MediaController = require('../Controllers/MediaController');



router.get('/images', (req, res) => {
        MediaController.getPhotos(req,res,function(photo){
                res.send(photo);
        });
});


router.get('/videos', (req, res) => {
        MediaController.getVideos(req,res,function(video){
                res.send(video);
        });
});

module.exports = router;
