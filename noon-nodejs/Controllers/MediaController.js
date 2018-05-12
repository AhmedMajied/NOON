/* author : Mariam Ashraf Fekry */
var mediaDBModel=require('./../DBModels/MediaDBModel');
function MediaController(){
}
MediaController.prototype.addPhotoForm=(req,res)=>{
    res.render("addMediaPhoto.ejs",{
        message:null,
        title:"Add Photo"
    });
}
MediaController.prototype.addPhoto=(req,res)=>{
    var path=(req.file.path).replace("public","./..");
    var newPhoto = mediaDBModel.Photo({
        captionText:req.body.photoTitle,
        source:path,
    });
    mediaDBModel.insertPhoto(newPhoto);
}
MediaController.prototype.getPhotos=(req,res)=>{
    mediaDBModel.getPhotos(
        function(photos){
            res.render("displayMediaPhotos.ejs",{
                message:null,
                title:"All Photos",
                mediaPhotos:photos
            });
    });
}
MediaController.prototype.deletePhoto=(req,res)=>{
    mediaDBModel.deletePhoto(req.body.mediaId);
}
module.exports= new MediaController();