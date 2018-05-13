const express = require('express');
var router = express.Router();
const MediaController = require('../Controllers/MediaController');



router.get('/images', (req, res) => {
        MediaController.getAllPhoto(req,res);
});


router.get('/videos', (req, res) => {
        MediaController.getAllVideo(req,res);
});


router.get('/add-video', (req,res)=>{
        res.render('add-video');
});

router.post('/add-video',(req,res)=>{
        MediaController.addVideo(req,res);
});

module.exports = router;
