/* author : Mariam Ashraf Fekry */
var mediaDBModel=require('./../DBModels/MediaDBModel');
function MediaController(){
}
MediaController.prototype.addMediaPhotoForm=(req,res)=>{
    res.render("addMediaPhoto.ejs",{
        message:null,
        title:"Add MediaPhoto"
    });
}
MediaController.prototype.addMediaPhoto=(req,res)=>{
    var path=(req.file.path).replace("public","./..");
    var newPhoto = mediaDBModel.Photo({
        captionText:req.body.photoTitle,
        source:path,
        publishTime:req.body.date
    });
    mediaDBModel.insertPhoto(newPhoto);
}
MediaController.prototype.getMediaPhotos=(req,res)=>{
    mediaDBModel.getPhotos(
        function(photos){
            res.render("displayMediaPhotos.ejs",{
                message:null,
                title:"All MediaPhotos",
                mediaPhotos:photos
            });
    });
}
MediaController.prototype.deletePhoto=(req,res)=>{
    mediaDBModel.deletePhoto(req.body.mediaId);
}
module.exports= new MediaController();