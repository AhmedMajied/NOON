/* author : Mariam Ashraf Fekry */
var express = require('express');
var router = express.Router();
var mediaController = require('./../Controllers/MediaController');
var multer=require('multer');
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/MediaPhotos/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})
var upload=multer({storage:storage});

router.get("/addPhoto", (req, res) => {
mediaController.addPhotoForm(req, res);
});
router.post("/addPhoto",upload.single('uploadPhoto'), (req, res) => {
    mediaController.addPhoto(req, res);
    res.redirect("/media/displayPhotos");
});

router.all("/displayPhotos", (req, res) => {
    mediaController.getPhotos(req, res);
});
router.post("/deletePhoto",(req,res)=>{
    mediaController.deletePhoto(req,res);
    res.redirect("/media/displayPhotos");
});
module.exports = router;