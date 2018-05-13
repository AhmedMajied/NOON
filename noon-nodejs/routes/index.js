var express = require('express');
var router = express.Router();



/* just for testing */
var MediaDBModel = require('./../DBModels/MediaDBModel');

router.get('/', function(req, res, next) {
  MediaDBModel.getVideos(
      function(videos){
        console.log(videos)
      });
  res.render('index');
});

router.get('/i', function(req, res, next) {
  var photo = MediaDBModel.Photo({source: "lool"});
  MediaDBModel.insertPhoto(photo);
  res.render('index');
});

router.get('/d', function(req, res, next) {
  MediaDBModel.deleteVideo("5af58d615060f211e47a82f0");
  res.render('index');
});

router.get('/add-image', (req,res)=>{
        res.render('add-image');
});



module.exports = router;
