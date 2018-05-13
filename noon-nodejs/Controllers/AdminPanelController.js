/* Author : Andrew Emad Nassif */
var mediaController = require('./MediaController')

function AdminPanelController(){

}

AdminPanelController.prototype.displayAdminPanel = (req,res) => {
    mediaController.getPhotos(req,res,function(photos){
        mediaController.getVideos(req,res,function(videos){
            res.render("admin-panel.ejs",{
                Title:"Admin Panel",
                Photos:photos,
                Videos:videos
            })
        })
    });
}

module.exports = new AdminPanelController();