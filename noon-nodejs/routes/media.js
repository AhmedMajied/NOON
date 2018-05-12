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
/* GET posts listing. */

router.get("/addMediaPhoto", (req, res) => {
mediaController.addMediaPhotoForm(req, res);
});
router.post("/addMediaPhoto",upload.single('uploadPhoto'), (req, res) => {
    mediaController.addMediaPhoto(req, res);
    res.redirect("/media/displayMediaPhotos");
});

router.all("/displayMediaPhotos", (req, res) => {
    mediaController.getMediaPhotos(req, res);
});
router.post("/deleteMediaPhoto",(req,res)=>{
    mediaController.deletePhoto(req,res);
    res.redirect("/media/displayMediaPhotos");
});
module.exports = router;