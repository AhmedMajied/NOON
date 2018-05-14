/* Authors : Mariam Ashraf Fekry, Andrew Emad Nassif */

var express = require('express');
var router = express.Router();
var mediaController = require('./../Controllers/MediaController');
var adminPanelController = require('./../Controllers/AdminPanelController');
var multer=require('multer');
var photoStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/Photos/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});
var videoStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/Videos/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});
var photoUpload=multer({storage:photoStorage});
var videoUpload=multer({storage:videoStorage});

router.all("/",(req,res) => {
    adminPanelController.displayAdminPanel(req,res);
})
/* author : Mariam Ashraf Fekry */
router.post("/addPhoto",photoUpload.single('uploadPhoto'), (req, res) => {
    mediaController.addPhoto(req, res);
    res.redirect("/admin/");
});
router.post("/deletePhoto",(req,res)=>{
    mediaController.deletePhoto(req,res);
    res.redirect("/admin/");
});
/* author : Mariam Ashraf Fekry */

/* Author: Andrew Emad Nassif */
router.post("/addVideo",videoUpload.any(), (req, res) => {
    mediaController.addVideo(req, res);
    res.redirect("/admin/");
});
router.post("/deleteVideo",(req,res)=>{
    mediaController.deleteVideo(req,res);
    res.redirect("/admin/");
});
/* Author: Andrew Emad Nassif */

module.exports = router;